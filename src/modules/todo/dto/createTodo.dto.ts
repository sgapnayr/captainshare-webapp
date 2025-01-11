import { z } from "zod";

export const CreateTodoDto = z.object({
  name: z.string().min(1, "Name is required"),
});
