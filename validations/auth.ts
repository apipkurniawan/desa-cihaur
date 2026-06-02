import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export const registerSchema = z
  .object({
    nik: z.string().regex(/^\d{16}$/, "NIK harus terdiri dari 16 digit angka"),
    nomorKk: z.string().regex(/^\d{16}$/, "Nomor KK harus terdiri dari 16 digit angka"),
    namaLengkap: z.string().min(3, "Nama lengkap minimal 3 karakter"),
    email: z.string().email("Email tidak valid"),
    nomorTelepon: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,10}$/, "Nomor telepon tidak valid"),
    password: z
      .string()
      .min(8, "Password minimal 8 karakter")
      .regex(/[A-Z]/, "Gunakan minimal 1 huruf besar")
      .regex(/[a-z]/, "Gunakan minimal 1 huruf kecil")
      .regex(/[0-9]/, "Gunakan minimal 1 angka"),
    confirmPassword: z.string().min(1, "Konfirmasi password wajib diisi"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi password tidak sama",
    path: ["confirmPassword"],
  });

export const legacyRegisterSchema = loginSchema.extend({
  namaLengkap: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  nik: z.string().length(16, "NIK harus 16 digit"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
