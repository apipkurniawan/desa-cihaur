import { z } from "zod";

export const kartuKeluargaSchema = z.object({
  nomorKk: z.string().length(16, "Nomor KK harus 16 digit"),
  kepalaKeluarga: z.string().min(3, "Nama kepala keluarga minimal 3 karakter"),
  alamat: z.string().min(5, "Alamat minimal 5 karakter"),
  rt: z.string().min(1, "RT wajib diisi").max(3, "RT maksimal 3 digit"),
  rw: z.string().min(1, "RW wajib diisi").max(3, "RW maksimal 3 digit"),
  dusun: z.string().min(2, "Dusun wajib diisi"),
  jumlahAnggota: z.number().int("Jumlah anggota harus angka bulat").min(1, "Minimal 1 anggota keluarga"),
});

export type KartuKeluargaFormValues = z.infer<typeof kartuKeluargaSchema>;
