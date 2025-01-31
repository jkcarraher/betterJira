"use client"
import Ticket from "@/components/ticket";
import Image from "next/image";
import { useEffect } from "react";
import { createSwapy } from 'swapy'

export default function Home() {

  useEffect(() => {
    const container = document.querySelector('.container')!;
    const swapy = createSwapy(container);
  }, []);

  return (
    <div className="bg-black mx-10 container">
      <h1 className="w-full text-center my-10 font-bold text-3xl">PROJECT TITLE</h1>
      <div className="flex space-x-10 container">
        <div className="w-1/3 bg-gray rounded h-full space-y-5 bg-sections p-5" data-swapy-slot="a">
          <Ticket title="Ticket 1" description="HELLO" data-swapy-item="a"/>
          <Ticket title="Ticket 1" description="HELLO" data-swapy-item="b"/>
        </div>
        <div className="w-1/3 bg-gray rounded h-full space-y-5 bg-sections p-5" data-swapy-slot="b">
          hello
        </div>
        <div className="w-1/3 bg-gray rounded h-full space-y-5 bg-sections p-5" data-swapy-slot="c">
          hello
        </div>
      </div>
      
    </div>
  );
}
