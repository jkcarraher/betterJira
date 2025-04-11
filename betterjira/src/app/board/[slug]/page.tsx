"use client";

import { useEffect, useRef, useState } from "react";
import { createSwapy } from "swapy";
import { useRouter } from "next/navigation";
import { Board, Ticket } from "@/types/index"
import {createTicket, getBoard} from '@/lib/utils'
import BoardColumns from "@/components/boardColumns";

export default function BoardPage({ params }: { params: { slug: string } }) {
  const [boardData, setBoardData] = useState<Board | null>(null);
  const [slug, setSlug] = useState<string | null>(null)
  
  const [tickets, setTickets] = useState<Ticket[]>([])

  
  const swapy = useRef<ReturnType<typeof createSwapy> | null>(null);
  const container = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (slug) {
      const fetchBoardData = async () => {
        try {
          const board = await getBoard(slug);
          if (!board) {
            router.push("/404");
          } else {
            setBoardData(board);
          }
        } catch (error) {
          console.error(error);
          router.push("/404");
        }
      };

      fetchBoardData();
    }
  }, [slug, router]);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);

      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);

  if (!boardData) {
    return <div>Loading...</div>;
  }else{
    
  }

  return (
    <div className="mx-10 container">
      <div className="flex">
        <h1 className="w-full text-center my-10 font-bold text-3xl">{boardData.name}</h1>
        <button
          onClick={() => createTicket("New Ticket", slug!)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Create Ticket
        </button>
      </div>
      
      <BoardColumns tickets={[]}/>
    </div>
  );
}