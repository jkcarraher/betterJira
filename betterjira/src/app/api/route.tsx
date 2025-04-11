import { NextResponse } from "next/server";
import prisma from "@/prisma"

export async function GET() {
	const inventory = await prisma.ticket.findMany({
	});

	return NextResponse.json({
		ok: true,
		inventory: inventory
	});
}