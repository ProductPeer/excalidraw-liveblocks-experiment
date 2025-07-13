"use client";

import { useEffect, useRef, useState } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import type { 
  ExcalidrawElement,
  AppState,
  BinaryFiles,
  ExcalidrawImperativeAPI
} from "@excalidraw/excalidraw/types/types";
import { useRoom, useMyPresence } from "@/liveblocks.config";
import { ExcalidrawLiveblocksSync } from "@/lib/ExcalidrawLiveblocksSync";
import CursorOverlay from "./CursorOverlay";
import OverlayManager from "./OverlayManager";
import CustomToolbar from "./CustomToolbar";

export default function CollaborativeExcalidraw() {
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);
  const syncRef = useRef<ExcalidrawLiveblocksSync | null>(null);
  const room = useRoom();
  const [myPresence, updateMyPresence] = useMyPresence();
  const [currentElements, setCurrentElements] = useState<readonly ExcalidrawElement[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Initialize sync when both room and API are ready
  useEffect(() => {
    if (room && excalidrawAPI && !syncRef.current) {
      syncRef.current = new ExcalidrawLiveblocksSync(room, excalidrawAPI);
      
      // Set initial user presence
      updateMyPresence({
        user: {
          id: `user-${Math.random().toString(36).substr(2, 9)}`,
          name: `User ${Math.floor(Math.random() * 100)}`,
          color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        },
        cursor: null,
        selectedElementIds: [],
      });
    }

    return () => {
      if (syncRef.current) {
        syncRef.current.destroy();
        syncRef.current = null;
      }
    };
  }, [room, excalidrawAPI, updateMyPresence]);

  const handleChange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    // Update local state
    setCurrentElements(elements);
    setSelectedIds(Object.keys(appState.selectedElementIds || {}));
    
    // Pass changes to sync layer
    if (syncRef.current) {
      syncRef.current.handleLocalChange(elements, appState);
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <Excalidraw
        onChange={handleChange}
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
      />
      <CursorOverlay />
      <OverlayManager 
        elements={currentElements}
        selectedElementIds={selectedIds}
      />
      <CustomToolbar excalidrawAPI={excalidrawAPI} />
    </div>
  );
}