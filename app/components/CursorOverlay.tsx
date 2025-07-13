"use client";

import { useOthers } from "@/liveblocks.config";

const COLORS = [
  "#DC2626", // red
  "#EA580C", // orange
  "#D97706", // amber
  "#65A30D", // lime
  "#16A34A", // green
  "#059669", // emerald
  "#0891B2", // cyan
  "#2563EB", // blue
  "#7C3AED", // violet
  "#C026D3", // fuchsia
];

export default function CursorOverlay() {
  const others = useOthers();

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {others.map(({ connectionId, presence }) => {
        if (!presence.cursor) return null;

        const color = COLORS[connectionId % COLORS.length];

        return (
          <div
            key={connectionId}
            className="absolute"
            style={{
              left: presence.cursor.x,
              top: presence.cursor.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Cursor icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                fill={color}
                stroke="white"
                strokeWidth="1"
              />
            </svg>
            
            {/* User name */}
            <div
              className="absolute top-5 left-2 px-2 py-1 rounded text-xs text-white whitespace-nowrap"
              style={{ backgroundColor: color }}
            >
              {presence.user.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}