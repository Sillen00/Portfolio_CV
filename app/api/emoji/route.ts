import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { emoji } = await req.json();
  console.log(emoji);
  try {
    const newEmoji = await prisma.emoji.create({
      data: {
        emoji: emoji,
      },
    });

    return NextResponse.json({ emoji: newEmoji }, { status: 201 });
  } catch (error) {
    return {
      status: 500,
      body: { error: "Failed to submit emoji 😮" },
    };
  }
}
