"use client";

import { useEffect, useRef, useState } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import type { 
  ExcalidrawElement,
  AppState,
  BinaryFiles,
  ExcalidrawImperativeAPI
} from "@excalidraw/excalidraw/types/types";

export default function ExcalidrawCanvas() {
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);

  // Log state changes to understand Excalidraw's internals
  const handleChange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    console.log("Excalidraw state changed:", {
      elementsCount: elements.length,
      elements: elements,
      appState: appState,
      files: files
    });
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Excalidraw
        onChange={handleChange}
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
        onPointerUpdate={(payload) => {
          console.log("Pointer update:", payload);
        }}
      />
    </div>
  );
}