"use client";

import { useEffect, useRef, useState } from "react";
import { createSwapy } from "swapy";
import { useRouter } from "next/navigation";
import { Board } from "@/types/index"
import {getBoard} from '@/lib/utils'

export default function BoardPage({ params }: { params: { slug: string } }) {
  const [boardData, setBoardData] = useState<Board | null>(null);
  const [slug, setSlug] = useState<string | null>(null)
  
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

      swapy.current?.destroy();
    };
  }, []);

  if (!boardData) {
    return <div>Loading...</div>;
  }else{
    
  }

  return (
    <div className="bg-black mx-10 container">
      
    </div>
  );
}