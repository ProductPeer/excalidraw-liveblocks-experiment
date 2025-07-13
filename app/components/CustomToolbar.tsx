"use client";

import { useMutation } from "@/liveblocks.config";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import type { OverlayData, CardData } from "@/liveblocks.config";

interface CustomToolbarProps {
  excalidrawAPI: ExcalidrawImperativeAPI | null;
}

export default function CustomToolbar({ excalidrawAPI }: CustomToolbarProps) {
  const addOverlay = useMutation(({ storage }, overlay: OverlayData) => {
    const overlays = storage.get("overlays");
    overlays.set(overlay.id, overlay);
  }, []);

  const createCard = () => {
    if (!excalidrawAPI) return;

    // Create a rectangle element in Excalidraw as placeholder
    const element = {
      id: `rect-${Date.now()}`,
      type: "rectangle" as const,
      x: 100,
      y: 100,
      width: 200,
      height: 150,
      angle: 0,
      strokeColor: "#1e40af",
      backgroundColor: "#dbeafe",
      fillStyle: "solid" as const,
      strokeWidth: 2,
      strokeStyle: "solid" as const,
      roughness: 0,
      opacity: 100,
      groupIds: [],
      frameId: null,
      index: 0,
      roundness: { type: 3 as const },
      seed: Math.floor(Math.random() * 2000000000),
      versionNonce: Math.floor(Math.random() * 2000000000),
      isDeleted: false,
      boundElements: null,
      updated: Date.now(),
      link: null,
      locked: false,
    };

    // Add element to Excalidraw
    excalidrawAPI.updateScene({
      elements: [...excalidrawAPI.getSceneElements(), element],
    });

    // Create overlay data
    const cardData: CardData = {
      title: "New Card",
      body: "Click to edit this card...",
      position: { x: element.x, y: element.y },
      dimensions: { width: element.width, height: element.height },
    };

    const overlay: OverlayData = {
      id: `card-${Date.now()}`,
      type: "card",
      elementId: element.id,
      data: cardData,
    };

    // Add overlay to Liveblocks
    addOverlay(overlay);
  };

  return (
    <div className="absolute top-4 left-4 z-50 bg-white rounded-lg shadow-lg p-2">
      <h3 className="text-sm font-semibold mb-2">Custom Blocks</h3>
      <button
        onClick={createCard}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        + Add Card
      </button>
    </div>
  );
}