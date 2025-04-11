'use server'

import { v4 as uuidv4 } from 'uuid';
import prisma from '../prisma'
import { Board, Ticket } from '@/types';


export async function createBoard(name: string) {
  const board = await prisma.board.create({
    data: {
      id: uuidv4(),
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  });

  console.log("Created Board")

  return {
    id: board.id,
    name: board.name,
    createdAt: board.createdAt.toISOString(),
    updatedAt: board.updatedAt.toISOString(),
  };
}

export async function getBoard(id: string): Promise<Board | null> {
  const board = await prisma.board.findUnique({
    where: { id },
  });

  if (!board) {
    return null;
  }

  return {
    id: board.id,
    name: board.name,
    createdAt: board.createdAt.toISOString(),
    updatedAt: board.updatedAt.toISOString(),
  };
}

export async function createTicket(name: string, board: string) {
  const ticket = await prisma.ticket.create({
    data: {
      id: uuidv4(),
      title: name,
      boardId: board,
      description: "",
      tag: "todo",
    }
  })

  return {
    id: ticket.id,
    title: ticket.title,
    boardId: ticket.boardId,
    description: ticket.description,
    tag: ticket.tag,
  }
}

export async function getTickets(boardId: string): Promise<Ticket[]> {
  const tickets = await prisma.ticket.findMany({
    where: { boardId },
  });

  console.log(tickets)

  return tickets.map((ticket) => ({
    id: ticket.id,
    title: ticket.title,
    boardId: ticket.boardId,
    description: ticket.description ?? "",
    tag: ticket.tag as "todo" | "in-progress" | "done",
  }));
}