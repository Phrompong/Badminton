"use server";

import { prisma } from "@/lib/prisma";
import { CreateSessionInput, ResponseSession } from "./models/session.model";

const SYSTEM_USER_ID =
  process.env.SYSTEM_USER_ID ?? "00000000-0000-0000-0000-000000000000";

export async function createSession(params: CreateSessionInput) {
  try {
    const actorId = params.createdBy ?? SYSTEM_USER_ID;
    const startAt = new Date(params.startAt);

    const result = await prisma.session.create({
      data: {
        name: params.name,
        startAt,
        location: params.location,
        playerCount: params.playerCount ?? 0,
        courtCount: params.courtCount,
        roomCode: params.roomCode,
        createdBy: actorId,
        updatedBy: actorId,
      },
    });

    return result;
  } catch (error) {
    console.error("Error creating session:", error);
    throw error;
  }
}

export async function getSessionByRoomCode(
  roomCode: string
): Promise<ResponseSession | null> {
  return await prisma.session.findUnique({
    where: {
      roomCode,
      isActive: true,
    },
  });
}
