import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Excalidraw + Liveblocks Experiment</h1>
        <p className="text-gray-600 mb-8">Testing AI-native canvas with Excalidraw</p>
        <div className="flex gap-4">
          <Link
            href="/board"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Open Canvas
          </Link>
          <Link
            href="/test-collab"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Test Collaboration
          </Link>
        </div>
      </div>
    </div>
  );
}