# Excalidraw State Management Analysis

## Key Discoveries

### 1. State Structure
Excalidraw manages state through two main objects:

```typescript
// Elements: Array of drawable objects
type ExcalidrawElement = {
  id: string;
  type: "rectangle" | "diamond" | "ellipse" | "text" | "line" | "arrow" | "freedraw" | "image";
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
  strokeColor: string;
  backgroundColor: string;
  fillStyle: "hachure" | "cross-hatch" | "solid";
  strokeWidth: number;
  strokeStyle: "solid" | "dashed" | "dotted";
  roughness: number;
  opacity: number;
  // ... many more properties
}

// AppState: UI and view state
type AppState = {
  viewBackgroundColor: string;
  currentItemStrokeColor: string;
  currentItemBackgroundColor: string;
  currentItemFillStyle: string;
  currentItemStrokeWidth: number;
  currentItemRoughness: number;
  currentItemOpacity: number;
  zoom: { value: number };
  scrollX: number;
  scrollY: number;
  // ... cursor position, selection, etc.
}
```

### 2. Change Events
The `onChange` callback fires on:
- Element creation/modification/deletion
- Selection changes
- View state changes (zoom, pan)
- Style changes

### 3. Imperative API
ExcalidrawImperativeAPI provides methods to:
- `updateScene()` - Update elements and app state
- `getSceneElements()` - Get current elements
- `getAppState()` - Get current app state
- `scrollToContent()` - Programmatic navigation
- `updateLibrary()` - Manage component library

### 4. Collaboration Challenges

**No Built-in Collaboration:**
Unlike tldraw which has first-class multiplayer support, Excalidraw requires:
1. Manual state synchronization
2. Custom conflict resolution
3. Cursor position tracking
4. Presence management

**State Sync Requirements:**
```typescript
// We need to sync:
interface SyncableState {
  elements: ExcalidrawElement[];
  cursor: { x: number; y: number; userId: string };
  selection: string[]; // element IDs
  viewport: { x: number; y: number; zoom: number };
}
```

### 5. Custom Elements Challenge
Excalidraw doesn't support custom element types. For Card/CardStack, we need:
1. Use rectangles as placeholders
2. Overlay React components
3. Sync overlay state separately
4. Handle interactions carefully

### 6. Performance Considerations
- Canvas-based rendering (fast)
- But overlays are DOM elements (slower)
- Need to optimize overlay count
- Virtualization may be needed

## Sync Layer Architecture

Based on this analysis, our sync layer needs:

```typescript
class ExcalidrawLiveblocksSync {
  private room: Room;
  private excalidrawAPI: ExcalidrawImperativeAPI;
  private overlays: Map<string, OverlayData>;
  
  constructor(room: Room, api: ExcalidrawImperativeAPI) {
    this.room = room;
    this.excalidrawAPI = api;
    this.overlays = new Map();
    
    // Sync Excalidraw elements
    this.syncElements();
    
    // Sync cursor positions
    this.syncCursors();
    
    // Sync overlays (Cards, CardStacks)
    this.syncOverlays();
  }
  
  private syncElements() {
    // Convert Excalidraw elements to Liveblocks storage
    // Handle conflicts with last-write-wins
    // Batch updates for performance
  }
  
  private syncCursors() {
    // Track pointer positions
    // Broadcast to other users
    // Render cursor overlays
  }
  
  private syncOverlays() {
    // Custom data for Cards/CardStacks
    // Position synced with placeholder elements
    // Handle drag/drop operations
  }
}
```

## Comparison with tldraw

| Feature | tldraw | Excalidraw |
|---------|--------|------------|
| Multiplayer | Built-in | Manual implementation |
| Custom shapes | Native support | Overlay workaround |
| State sync | Automatic | Manual |
| Conflict resolution | Built-in | Custom needed |
| Performance | Optimized for collab | Single-user optimized |
| Complexity | Low | High |

## Next Steps
1. Implement basic element synchronization
2. Add cursor tracking
3. Design overlay system for custom blocks
4. Test performance with multiple users