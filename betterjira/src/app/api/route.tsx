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

// // Creates a new item if it does not exist. Adds to quantity if it does
// export async function POST(request) {
// 	const data = await request.json();

// 	const name = data.name;
// 	const quantity = Number(data.quantity);

// 	if(!name) {
// 		return NextResponse.json({
// 			ok: false,
// 			error: "Item name is missing"
// 		});
// 	}

// 	if(!quantity || isNaN(quantity) || quantity % 1 !== 0) {
// 		return NextResponse.json({
// 			ok: false,
// 			error: "Quantity must be an nonzero integer"
// 		});
// 	}

// 	// Check if the item exists in Prisma
// 	let inventoryCategory = await prisma.inventoryCategory.findFirst({
// 		where: {
// 			name: name
// 		}
// 	});

// 	if(!inventoryCategory) {
// 		return NextResponse.json({
// 			ok: false,
// 			error: "Item/Category does not exist"
// 		});
// 	}

// 	if(inventoryCategory.count + quantity < 0) {
// 		return NextResponse.json({
// 			ok: false,
// 			error: `Inventory Item (${inventoryCategory.name}) cannot have negative quantity`
// 		});
// 	}

// 	await prisma.inventoryCategory.update({
// 		where: {
// 			id: inventoryCategory.id
// 		},
// 		data: {
// 			count: { increment: quantity }
// 		}
// 	});
// 	await prisma.actionLog.create({
// 		data: {
// 			timestamp: new Date(),
// 			targetId: inventoryCategory.id,
// 			category: inventoryCategory.name,
// 			action: "restock",
// 			delta: quantity
// 		}
// 	});

// 	return NextResponse.json({
// 		ok: true
// 	});
// }

// // Decrements item count
// export async function PATCH(request) {
// 	const itemId = Number(request.nextUrl.searchParams.get("id"));
// 	if(!itemId || isNaN(itemId)) {
// 		return NextResponse.json({
// 			ok: false,
// 			error: "Item Id is malformed"
// 		});
// 	}

// 	// Check if the item exists in Prisma
// 	const inventoryCategory = await prisma.inventoryCategory.findFirst({
// 		where: {
// 			id: itemId
// 		}
// 	});

// 	if(!inventoryCategory) {
// 		return NextResponse.json({
// 			ok: false,
// 			error: `Item with id ${itemId} does not exist`
// 		});
// 	}

// 	if(inventoryCategory.count <= 0) {
// 		return NextResponse.json({
// 			ok: false,
// 			error: `Inventory Item (${inventoryCategory.name}) out of stock`
// 		})
// 	}

// 	await prisma.inventoryCategory.update({
// 		where: {
// 			id: itemId
// 		},
// 		data: {
// 			count: { decrement: 1 }
// 		}
// 	});
// 	await prisma.actionLog.create({
// 		data: {
// 			timestamp: new Date(),
// 			targetId: inventoryCategory.id,
// 			category: inventoryCategory.name,
// 			action: "checkout",
// 			delta: -1
// 		}
// 	});

// 	return NextResponse.json({
// 		ok: true
// 	});
// }
