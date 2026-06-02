import { z } from "zod";

export const wargaSchema = z.object({
  nik: z.string().length(16, "NIK harus 16 digit"),
  nomorKk: z.string().length(16, "Nomor KK harus 16 digit"),
  namaLengkap: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  tempatLahir: z.string().min(2, "Tempat lahir wajib diisi"),
  tanggalLahir: z.string().min(1, "Tanggal lahir wajib diisi"),
  jenisKelamin: z.enum(["Laki-laki", "Perempuan"]),
  agama: z.string().min(2, "Agama wajib diisi"),
  statusPerkawinan: z.string().min(2, "Status perkawinan wajib diisi"),
  pekerjaan: z.string().min(2, "Pekerjaan wajib diisi"),
  pendidikan: z.string().min(2, "Pendidikan wajib diisi"),
  alamat: z.string().min(5, "Alamat minimal 5 karakter"),
  rt: z.string().min(1, "RT wajib diisi"),
  rw: z.string().min(1, "RW wajib diisi"),
  dusun: z.string().min(2, "Dusun wajib diisi"),
  status: z.enum(["aktif", "pindah", "meninggal"]),
});

export type WargaFormValues = z.infer<typeof wargaSchema>;
