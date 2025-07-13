import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/types";

// Define Liveblocks types
export type Presence = {
  cursor: { x: number; y: number } | null;
  user: {
    id: string;
    name: string;
    color: string;
  };
  selectedElementIds: string[];
};

export type Storage = {
  elements: ExcalidrawElement[];
  overlays: Map<string, OverlayData>;
};

export type OverlayData = {
  id: string;
  type: "card" | "cardstack";
  elementId: string; // Links to Excalidraw element
  data: CardData | CardStackData;
};

export type CardData = {
  title: string;
  body: string;
  position: { x: number; y: number };
  dimensions: { width: number; height: number };
};

export type CardStackData = {
  title: string;
  cardIds: string[];
  position: { x: number; y: number };
  dimensions: { width: number; height: number };
};

// Create Liveblocks client
const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
});

// Create room context
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useSelf,
    useStorage,
    useMutation,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
  },
} = createRoomContext<Presence, Storage>(client);