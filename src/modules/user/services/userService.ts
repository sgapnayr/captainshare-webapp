import { prisma } from "@/lib/prisma";
import { user } from "@prisma/client";

export async function getAllUser() {
  return prisma.user.findMany();
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}

export async function createUser(data: Omit<user, 'id'>) {
  return prisma.user.create({ data });
}

export async function updateUser(id: string, data: Partial<user>) {
  return prisma.user.update({ where: { id }, data });
}

export async function deleteUser(id: string) {
  return prisma.user.delete({ where: { id } });
}
