import { prisma } from "@/lib/prisma";
import { todo } from "@prisma/client";

export async function getAllTodo() {
  return prisma.todo.findMany();
}

export async function getTodoById(id: string) {
  return prisma.todo.findUnique({ where: { id } });
}

export async function createTodo(data: Omit<todo, 'id'>) {
  return prisma.todo.create({ data });
}

export async function updateTodo(id: string, data: Partial<todo>) {
  return prisma.todo.update({ where: { id }, data });
}

export async function deleteTodo(id: string) {
  return prisma.todo.delete({ where: { id } });
}
