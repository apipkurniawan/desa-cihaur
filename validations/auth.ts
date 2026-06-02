import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export const registerSchema = loginSchema.extend({
  namaLengkap: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  nik: z.string().length(16, "NIK harus 16 digit"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
