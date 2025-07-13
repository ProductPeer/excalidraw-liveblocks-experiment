"use client";

import { useState, useRef, useEffect } from "react";
import type { CardData } from "@/liveblocks.config";

interface CardProps {
  data: CardData;
  elementBounds: { x: number; y: number; width: number; height: number };
  isSelected: boolean;
  onUpdate: (data: CardData) => void;
  onDelete: () => void;
}

export default function Card({ data, elementBounds, isSelected, onUpdate, onDelete }: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localTitle, setLocalTitle] = useState(data.title);
  const [localBody, setLocalBody] = useState(data.body);
  const [showModal, setShowModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocalTitle(data.title);
    setLocalBody(data.body);
  }, [data]);

  const handleSave = () => {
    onUpdate({
      ...data,
      title: localTitle,
      body: localBody,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLocalTitle(data.title);
    setLocalBody(data.body);
    setIsEditing(false);
  };

  // Position card overlay on top of Excalidraw element
  const style = {
    position: "absolute" as const,
    left: elementBounds.x,
    top: elementBounds.y,
    width: elementBounds.width,
    height: elementBounds.height,
    pointerEvents: "auto" as const,
  };

  return (
    <>
      {/* Card Overlay */}
      <div
        ref={cardRef}
        style={style}
        className={`
          bg-white rounded-lg shadow-md p-4 cursor-pointer
          ${isSelected ? "ring-2 ring-blue-500" : ""}
          ${isEditing ? "z-50" : "z-10"}
        `}
        onClick={() => !isEditing && setShowModal(true)}
      >
        {isEditing ? (
          <div className="flex flex-col h-full">
            <input
              type="text"
              value={localTitle}
              onChange={(e) => setLocalTitle(e.target.value)}
              className="font-semibold mb-2 p-1 border rounded"
              placeholder="Card title..."
              onClick={(e) => e.stopPropagation()}
            />
            <textarea
              value={localBody}
              onChange={(e) => setLocalBody(e.target.value)}
              className="flex-1 p-1 border rounded resize-none"
              placeholder="Card content..."
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSave();
                }}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
              >
                Save
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCancel();
                }}
                className="px-3 py-1 bg-gray-300 rounded text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full overflow-hidden">
            <h3 className="font-semibold mb-2">{data.title || "Untitled Card"}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">
              {data.body || "Click to add content..."}
            </p>
          </div>
        )}
      </div>

      {/* Modal for expanded view */}
      {showModal && !isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{data.title || "Untitled Card"}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{data.body || "No content yet..."}</p>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                  setIsEditing(true);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (confirm("Delete this card?")) {
                    setShowModal(false);
                    onDelete();
                  }
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}