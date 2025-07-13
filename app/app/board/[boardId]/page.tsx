"use client";

import { use } from "react";
import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues
const CollaborativeExcalidraw = dynamic(
  () => import('@/components/CollaborativeExcalidraw'),
  { ssr: false }
);

export default function BoardPage({ params }: { params: Promise<{ boardId: string }> }) {
  const { boardId } = use(params);
  return (
    <RoomProvider
      id={boardId}
      initialPresence={{
        cursor: null,
        user: {
          id: "",
          name: "",
          color: "",
        },
        selectedElementIds: [],
      }}
      initialStorage={{
        elements: [],
        overlays: new Map(),
      }}
    >
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => <CollaborativeExcalidraw />}
      </ClientSideSuspense>
    </RoomProvider>
  );
}