import TicketObject from '@/components/ticket';
import { createSwapy } from 'swapy';
import { useEffect, useRef } from 'react';
import { Ticket } from '@/types';

interface BoardColumnsProps {
  tickets: Ticket[];
}

export default function BoardColumns({ tickets }: BoardColumnsProps) {
  const swapy = useRef<ReturnType<typeof createSwapy> | null>(null);
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);

      swapy.current.onSwap((event) => {
        console.log('swap', event);
      });
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);

  return (
    <div className="bg-black mx-10 container">
      <div ref={container} className="flex space-x-10">
        {/* To-Do Column */}
        <div className="w-1/3 rounded">
          <div className="bg-blue-500 px-3 font-bold rounded-3xl w-fit mb-2">To-Do</div>
          <div className="bg-sections h-full space-y-5 p-5 min-h-32 rounded" data-swapy-slot="a">
            {tickets
              .filter((ticket) => ticket.tag === 'todo')
              .map((ticket) => (
                <TicketObject
                  key={ticket.id}
                  title={ticket.title}
                  description={ticket.description}
                  dataSwapyItem={ticket.id}
                />
              ))}
          </div>
        </div>

        {/* In-Progress Column */}
        <div className="w-1/3">
          <div className="bg-yellow-500 px-3 font-bold rounded-3xl w-fit mb-2">In Progress</div>
          <div className="bg-sections h-full space-y-5 p-5 min-h-32 rounded" data-swapy-slot="b">
            {tickets
              .filter((ticket) => ticket.tag === 'in-progress')
              .map((ticket) => (
                <TicketObject
                  key={ticket.id}
                  title={ticket.title}
                  description={ticket.description}
                  dataSwapyItem={ticket.id}
                />
              ))}
          </div>
        </div>

        {/* Done Column */}
        <div className="w-1/3">
          <div className="bg-green-500 px-3 font-bold rounded-3xl w-fit mb-2">Done</div>
          <div className="bg-sections h-full space-y-5 p-5 min-h-32 rounded" data-swapy-slot="c">
            {tickets
              .filter((ticket) => ticket.tag === 'done')
              .map((ticket) => (
                <TicketObject
                  key={ticket.id}
                  title={ticket.title}
                  description={ticket.description}
                  dataSwapyItem={ticket.id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}