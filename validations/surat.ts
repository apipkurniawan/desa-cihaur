import { z } from "zod";

export const pengajuanSuratSchema = z.object({
  jenisSuratId: z.string().min(1, "Jenis surat wajib dipilih"),
  keperluan: z.string().min(10, "Jelaskan keperluan minimal 10 karakter"),
  dokumenPendukung: z.string().optional(),
});

export const prosesSuratSchema = z.object({
  status: z.enum(["diproses", "selesai", "ditolak"]),
  catatanStaff: z.string().optional(),
});

export type PengajuanSuratFormValues = z.infer<typeof pengajuanSuratSchema>;
