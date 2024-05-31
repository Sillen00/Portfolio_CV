// import prisma from "@/prisma/client";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest, res: NextResponse) {
//   const { emoji } = await req.json();
//   try {
//     const newEmoji = await prisma.emoji.create({
//       data: {
//         emoji: emoji,
//       },
//     });

//     // return NextResponse.json({ emoji: newEmoji }, { status: 201 });
//     return NextResponse.json(
//       { emoji: newEmoji },
//       {
//         status: 201,
//         headers: {
//           "Content-Type": "application/json; charset=utf-8mb4",
//         },
//       }
//     );
//   } catch (error) {
//     return {
//       status: 500,
//       body: { error: "Failed to submit emoji 😮" },
//     };
//   }
// }
