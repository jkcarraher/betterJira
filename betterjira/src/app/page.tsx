import Ticket from "@/components/ticket";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black mx-10">
      <div className="flex space-x-10">
        <div className="w-1/3 bg-gray rounded h-full space-y-10">
          <Ticket title="Ticket 1" description="HELLO"/>
          <Ticket title="Ticket 1" description="HELLO"/>
        </div>
        <div className="w-1/3 bg-gray rounded">
          hello
        </div>
        <div className="w-1/3 bg-gray rounded">
          hello
        </div>
      </div>
     
      
    </div>
  );
}
