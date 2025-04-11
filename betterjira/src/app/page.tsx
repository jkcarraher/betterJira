"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBoard } from "../lib/utils";

export default function Home() {
  const [boardName, setBoardName] = useState("");
  const router = useRouter();

  const handleCreateBoard = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (boardName.trim()) {
      try {
        const newBoard = await createBoard(boardName);

        const boardSlug = encodeURIComponent(newBoard.id.trim().toLowerCase().replace(/\s+/g, '-'));
        router.push(`/board/${boardSlug}`);
      } catch (error) {
        console.error("Failed to create board:", error);
      }
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-xl">
        <h1 className="text-center font-bold text-3xl mb-6 text-white">Create Your Kanban Board</h1>
        
        <form onSubmit={handleCreateBoard} className="space-y-4">
          <div>
            <label htmlFor="boardName" className="block text-sm font-medium text-gray-300 mb-2">
              Board Name
            </label>
            <input
              type="text"
              id="boardName"
              placeholder="Enter your board name..."
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Create Board
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Create a personal Kanban board to organize your tasks and projects.</p>
        </div>
      </div>
    </div>
  );
}