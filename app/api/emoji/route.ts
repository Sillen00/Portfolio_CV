import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { emoji } = await req.json();
  try {
    const newEmoji = await prisma.emoji.create({
      data: {
        emoji: emoji,
      },
    });

    return NextResponse.json(
      { emoji: newEmoji },
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit emoji" },
      { status: 500 }
    );
  }
}