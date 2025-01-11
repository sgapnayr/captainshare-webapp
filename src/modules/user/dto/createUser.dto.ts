import { z } from "zod";

export const CreateUserDto = z.object({
  name: z.string().min(1, "Name is required"),
});
