import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string(),
});

export const signUpSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    password2: z.string().min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });
