import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import type { ExcalidrawElement, AppState } from "@excalidraw/excalidraw/types/types";
import type { Room } from "@liveblocks/client";
import type { Presence, Storage } from "@/liveblocks.config";

export class ExcalidrawLiveblocksSync {
  private room: Room<Presence, Storage>;
  private excalidrawAPI: ExcalidrawImperativeAPI;
  private isRemoteUpdate = false;
  private lastLocalElements: Map<string, ExcalidrawElement> = new Map();

  constructor(room: Room<Presence, Storage>, excalidrawAPI: ExcalidrawImperativeAPI) {
    this.room = room;
    this.excalidrawAPI = excalidrawAPI;
    
    // Initialize storage with current Excalidraw elements
    this.initializeStorage();
    
    // Subscribe to remote changes
    this.subscribeToRemoteChanges();
    
    // Set up cursor tracking
    this.setupCursorTracking();
  }

  private initializeStorage() {
    const elements = this.excalidrawAPI.getSceneElements();
    
    // Initialize Liveblocks storage with current elements
    this.room.batch(() => {
      const storage = this.room.getStorage();
      if (!storage.get("elements")) {
        storage.set("elements", elements as ExcalidrawElement[]);
      }
      if (!storage.get("overlays")) {
        storage.set("overlays", new Map());
      }
    });
  }

  private subscribeToRemoteChanges() {
    // Subscribe to element changes from other users
    const storage = this.room.getStorage();
    const elementsStorage = storage.get("elements");
    
    if (elementsStorage) {
      this.room.subscribe(elementsStorage, (elements) => {
        if (!this.isRemoteUpdate && elements) {
          this.isRemoteUpdate = true;
          
          // Update Excalidraw with remote changes
          this.excalidrawAPI.updateScene({
            elements: elements as ExcalidrawElement[],
          });
          
          // Reset flag after a short delay
          setTimeout(() => {
            this.isRemoteUpdate = false;
          }, 100);
        }
      });
    }
  }

  private setupCursorTracking() {
    // Track pointer movements
    document.addEventListener("pointermove", (e) => {
      this.room.updatePresence({
        cursor: { x: e.clientX, y: e.clientY },
      });
    });

    // Clear cursor when pointer leaves
    document.addEventListener("pointerleave", () => {
      this.room.updatePresence({
        cursor: null,
      });
    });
  }

  // Called by Excalidraw's onChange
  public handleLocalChange(
    elements: readonly ExcalidrawElement[],
    appState: AppState
  ) {
    // Skip if this is a remote update
    if (this.isRemoteUpdate) return;

    // Find changed elements
    const changedElements = this.findChangedElements(elements);
    
    if (changedElements.length > 0) {
      // Update Liveblocks storage
      this.room.batch(() => {
        const storage = this.room.getStorage();
        storage.set("elements", elements as ExcalidrawElement[]);
      });

      // Update local cache
      elements.forEach(el => {
        this.lastLocalElements.set(el.id, el);
      });
    }

    // Update selected elements in presence
    const selectedElementIds = appState.selectedElementIds || {};
    this.room.updatePresence({
      selectedElementIds: Object.keys(selectedElementIds),
    });
  }

  private findChangedElements(elements: readonly ExcalidrawElement[]): ExcalidrawElement[] {
    const changed: ExcalidrawElement[] = [];
    
    elements.forEach(element => {
      const lastVersion = this.lastLocalElements.get(element.id);
      if (!lastVersion || JSON.stringify(lastVersion) !== JSON.stringify(element)) {
        changed.push(element);
      }
    });

    // Check for deleted elements
    this.lastLocalElements.forEach((element, id) => {
      if (!elements.find(el => el.id === id)) {
        changed.push(element); // Mark as changed (deleted)
      }
    });

    return changed;
  }

  public destroy() {
    // Clean up event listeners and subscriptions
    document.removeEventListener("pointermove", () => {});
    document.removeEventListener("pointerleave", () => {});
  }
}