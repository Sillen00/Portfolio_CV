// import prisma from "@/prisma/client";
// import { NextRequest, NextResponse } from "next/server";
// import { z } from "zod";
// // npm install bcrypt

// // ZOD VALIDATION SCHEMA -----------------------------------------------------------
// // ZOD VALIDATION SCHEMA -----------------------------------------------------------
// // ZOD VALIDATION SCHEMA -----------------------------------------------------------
// const passwordSchema = z
//   .string()
//   .min(8)
//   .max(255)
//   .refine(val => {
//     if (!val.match(/[a-z]/)) {
//       throw new Error("Password must contain at least one lowercase letter");
//     }
//     if (!val.match(/[A-Z]/)) {
//       throw new Error("Password must contain at least one uppercase letter");
//     }
//     if (!val.match(/[0-9]/)) {
//       throw new Error("Password must contain at least one number");
//     }
//     return true;
//   });

// const userSchema = z.object({
//   email: z.string().min(5).max(255).email(),
//   password: passwordSchema,
// });

// // CREATE USER ---------------------------------------------------------------------
// // CREATE USER ---------------------------------------------------------------------
// // CREATE USER ---------------------------------------------------------------------
// export async function POST(req: NextRequest): Promise<NextResponse> {
//   const body = await req.json();
//   const user = userSchema.safeParse(body);

//   if (!user.success) {
//     return NextResponse.json({ error: user.error.errors }, { status: 400 });
//   }

//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         email: user.data.email,
//         password: user.data.password, // Store hashed password in the database
//       },
//     });

//     return NextResponse.json({ user: newUser }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
//   }
// }
