"use client"
import Ticket from "@/components/ticket";
import { useEffect, useRef } from "react";
import { createSwapy } from 'swapy'

export default function Board() {

  const swapy = useRef<ReturnType<typeof createSwapy> | null>(null)
  const container = useRef(null)

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current)

      swapy.current.onSwap((event) => {
        console.log('swap', event);
      })
    }

    return () => {
      swapy.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-black mx-10 container">
      <h1 className="w-full text-center my-10 font-bold text-3xl">PROJECT TITLE</h1>
      <div ref={container} className="flex space-x-10">
        <div className="w-1/3 rounded">
          <div className="bg-blue-500 px-3 font-bold rounded-3xl w-fit mb-2">To-Do</div>
          <div className="bg-sections h-full space-y-5 p-5 min-h-32 rounded" data-swapy-slot="a">
            <Ticket title="Ticket 1" description="a" dataSwapyItem="a"/>
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-yellow-500 px-3 font-bold rounded-3xl w-fit mb-2">In progress</div>
          <div className="bg-sections h-full space-y-5 p-5 min-h-32 rounded" data-swapy-slot="b">
          <Ticket title="Ticket 1" description="a" dataSwapyItem="b"/>
          </div>
        </div>
        
        <div className="w-1/3">
          <div className="bg-green-500 px-3 font-bold rounded-3xl w-fit mb-2">Done</div>
          <div className="bg-sections h-full space-y-5 p-5 min-h-32 rounded" data-swapy-slot="c">
            <Ticket title="Ticket 1" description="c" dataSwapyItem="c"/>
          </div>
        </div>
      </div>  
    </div>
  );
}
