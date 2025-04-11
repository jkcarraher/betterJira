'use server'

import { v4 as uuidv4 } from 'uuid';
import prisma from '../prisma'
import { Board } from '@/types';


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