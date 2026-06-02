export type UserRole = "admin_desa" | "staff_desa" | "warga";

export type StatusWarga = "aktif" | "pindah" | "meninggal";
export type StatusSurat = "diajukan" | "diproses" | "selesai" | "ditolak";
export type StatusPublish = "draft" | "published";
export type StatusBantuan = "terdaftar" | "diterima" | "ditolak";

export type Profile = {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  wargaId?: string;
  avatarUrl?: string;
};

export type Warga = {
  id: string;
  nik: string;
  nomorKk: string;
  namaLengkap: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: "Laki-laki" | "Perempuan";
  agama: string;
  statusPerkawinan: string;
  pekerjaan: string;
  pendidikan: string;
  alamat: string;
  rt: string;
  rw: string;
  dusun: string;
  status: StatusWarga;
  fotoKtpUrl?: string;
  fotoKkUrl?: string;
};

export type KartuKeluarga = {
  id: string;
  nomorKk: string;
  kepalaKeluarga: string;
  alamat: string;
  rt: string;
  rw: string;
  dusun: string;
  jumlahAnggota: number;
};

export type JenisSurat = {
  id: string;
  nama: string;
  kode: string;
  deskripsi: string;
};

export type PengajuanSurat = {
  id: string;
  nomorSurat: string;
  jenisSurat: string;
  wargaNama: string;
  wargaId: string;
  status: StatusSurat;
  tanggalPengajuan: string;
  tanggalSelesai?: string;
  catatanStaff?: string;
  dokumenUrl?: string;
};

export type Pengumuman = {
  id: string;
  judul: string;
  isi: string;
  kategori: string;
  tanggalPublish: string;
  status: StatusPublish;
};

export type Kegiatan = {
  id: string;
  nama: string;
  deskripsi: string;
  tanggal: string;
  lokasi: string;
  dokumentasiUrl?: string;
};

export type BantuanSosial = {
  id: string;
  namaProgram: string;
  deskripsi: string;
  sumberDana: string;
  tahun: number;
  jumlahPenerima: number;
};

export type PenerimaBantuan = {
  id: string;
  programId: string;
  programNama: string;
  wargaId: string;
  wargaNama: string;
  status: StatusBantuan;
  tanggalTerima?: string;
};

export type PengaturanDesa = {
  namaDesa: string;
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  logoUrl?: string;
  namaKepalaDesa: string;
  nomorKontak: string;
  alamatKantor: string;
};

export type DashboardStats = {
  totalWarga: number;
  totalKk: number;
  totalPengajuanSurat: number;
  pengajuanMenunggu: number;
  totalBantuanSosial: number;
};
