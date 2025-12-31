// "use server";

// import { revalidatePath } from "next/cache";

// import { prisma } from "@/lib/prisma";

// export async function createUser(formData: any) {
//   const email = String(formData.get("email") ?? "").trim();
//   const nameValue = formData.get("name");
//   const name = typeof nameValue === "string" ? nameValue.trim() : "";

//   if (!email) {
//     return { ok: false, error: "Email is required." };
//   }
//   await prisma.user.create({
//     data: {
//       email,
//       name: name || null,
//     },
//   });

//   revalidatePath("/");
//   return { ok: true };
// }
