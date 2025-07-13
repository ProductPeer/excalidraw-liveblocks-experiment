"use client";

import { useEffect, useState } from "react";
import { useStorage, useMutation } from "@/liveblocks.config";
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/types";
import type { OverlayData, CardData } from "@/liveblocks.config";
import Card from "./Card";

interface OverlayManagerProps {
  elements: readonly ExcalidrawElement[];
  selectedElementIds: string[];
}

export default function OverlayManager({ elements, selectedElementIds }: OverlayManagerProps) {
  const overlays = useStorage((root) => root.overlays);
  const [elementBounds, setElementBounds] = useState<Map<string, DOMRect>>(new Map());

  // Mutations for overlay updates
  const updateOverlay = useMutation(({ storage }, id: string, data: OverlayData) => {
    const overlays = storage.get("overlays");
    overlays.set(id, data);
  }, []);

  const deleteOverlay = useMutation(({ storage }, id: string) => {
    const overlays = storage.get("overlays");
    overlays.delete(id);
  }, []);

  // Calculate element bounds in screen coordinates
  useEffect(() => {
    const updateBounds = () => {
      const newBounds = new Map<string, DOMRect>();
      
      elements.forEach(element => {
        if (element.type === "rectangle") {
          // Get the canvas element
          const canvas = document.querySelector("canvas.excalidraw__canvas");
          if (!canvas) return;

          const canvasRect = canvas.getBoundingClientRect();
          
          // Calculate element position relative to viewport
          // This is a simplified calculation - in reality we'd need to account for zoom/pan
          const bounds = {
            x: canvasRect.left + element.x,
            y: canvasRect.top + element.y,
            width: element.width,
            height: element.height,
            top: canvasRect.top + element.y,
            right: canvasRect.left + element.x + element.width,
            bottom: canvasRect.top + element.y + element.height,
            left: canvasRect.left + element.x,
          } as DOMRect;

          newBounds.set(element.id, bounds);
        }
      });

      setElementBounds(newBounds);
    };

    updateBounds();
    
    // Update bounds on scroll/zoom
    const handleUpdate = () => {
      requestAnimationFrame(updateBounds);
    };

    window.addEventListener("scroll", handleUpdate);
    window.addEventListener("resize", handleUpdate);
    
    return () => {
      window.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    };
  }, [elements]);

  if (!overlays) return null;

  // Render overlays for card elements
  const cardOverlays: JSX.Element[] = [];
  
  // Liveblocks Map needs to be converted to entries
  Array.from(overlays.entries()).forEach(([id, overlay]) => {
    if (overlay.type === "card") {
      const element = elements.find(el => el.id === overlay.elementId);
      const bounds = elementBounds.get(overlay.elementId);
      
      if (element && bounds) {
        cardOverlays.push(
          <Card
            key={id}
            data={overlay.data as CardData}
            elementBounds={{
              x: bounds.left,
              y: bounds.top,
              width: bounds.width,
              height: bounds.height,
            }}
            isSelected={selectedElementIds.includes(overlay.elementId)}
            onUpdate={(newData) => {
              updateOverlay(id, {
                ...overlay,
                data: newData,
              });
            }}
            onDelete={() => {
              deleteOverlay(id);
              // TODO: Also delete the Excalidraw element
            }}
          />
        );
      }
    }
  });

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 100 }}>
      <div className="relative w-full h-full">
        {cardOverlays}
      </div>
    </div>
  );
}