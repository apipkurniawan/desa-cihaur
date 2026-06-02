import { z } from "zod";

export const pengumumanSchema = z.object({
  judul: z.string().min(5, "Judul minimal 5 karakter"),
  isi: z.string().min(20, "Isi pengumuman minimal 20 karakter"),
  kategori: z.string().min(2, "Kategori wajib diisi"),
  status: z.enum(["draft", "published"]),
});

export const kegiatanSchema = z.object({
  nama: z.string().min(5, "Nama kegiatan minimal 5 karakter"),
  deskripsi: z.string().min(20, "Deskripsi minimal 20 karakter"),
  tanggal: z.string().min(1, "Tanggal wajib diisi"),
  lokasi: z.string().min(3, "Lokasi wajib diisi"),
});
