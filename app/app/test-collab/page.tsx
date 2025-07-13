"use client";

import Link from "next/link";
import { useState } from "react";

export default function TestCollabPage() {
  const [boardId] = useState("test-board-" + Date.now());

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6">Test Collaboration</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Instructions:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Open the board link below in two separate browser windows</li>
            <li>Draw shapes in one window and watch them appear in the other</li>
            <li>Move your cursor and see it tracked in real-time</li>
            <li>Test selecting elements simultaneously</li>
          </ol>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <p className="text-sm text-gray-600 mb-4">Board ID: {boardId}</p>
          <Link
            href={`/board/${boardId}`}
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Open Collaborative Board
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>Note: You'll need a Liveblocks API key in .env.local for this to work</p>
        </div>
      </div>
    </div>
  );
}