import type {
  BantuanSosial,
  DashboardStats,
  JenisSurat,
  KartuKeluarga,
  Kegiatan,
  PenerimaBantuan,
  PengajuanSurat,
  PengaturanDesa,
  Pengumuman,
  Profile,
  Warga,
} from "@/types";

export const currentProfile: Profile = {
  id: "profile-admin",
  email: "admin@desa-cihaur.id",
  fullName: "Admin Desa Cihaur",
  role: "admin_desa",
};

export const warga: Warga[] = [
  {
    id: "warga-1",
    nik: "3201010101900001",
    nomorKk: "3201010101010001",
    namaLengkap: "Ahmad Hidayat",
    tempatLahir: "Bogor",
    tanggalLahir: "1990-01-01",
    jenisKelamin: "Laki-laki",
    agama: "Islam",
    statusPerkawinan: "Kawin",
    pekerjaan: "Petani",
    pendidikan: "SMA",
    alamat: "Kp. Cihurip",
    rt: "001",
    rw: "002",
    dusun: "Dusun Cihurip",
    status: "aktif",
  },
  {
    id: "warga-2",
    nik: "3201014505950002",
    nomorKk: "3201010101010001",
    namaLengkap: "Siti Aminah",
    tempatLahir: "Bogor",
    tanggalLahir: "1995-05-05",
    jenisKelamin: "Perempuan",
    agama: "Islam",
    statusPerkawinan: "Kawin",
    pekerjaan: "Wirausaha",
    pendidikan: "S1",
    alamat: "Kp. Cihurip",
    rt: "001",
    rw: "002",
    dusun: "Dusun Cihurip",
    status: "aktif",
  },
  {
    id: "warga-3",
    nik: "3201011208820003",
    nomorKk: "3201010101010002",
    namaLengkap: "Dede Kurnia",
    tempatLahir: "Bogor",
    tanggalLahir: "1982-08-12",
    jenisKelamin: "Laki-laki",
    agama: "Islam",
    statusPerkawinan: "Kawin",
    pekerjaan: "Guru",
    pendidikan: "S1",
    alamat: "Kp. Pasir Angin",
    rt: "003",
    rw: "001",
    dusun: "Dusun Pasir Angin",
    status: "aktif",
  },
  {
    id: "warga-4",
    nik: "3201012207000004",
    nomorKk: "3201010101010003",
    namaLengkap: "Neng Lestari",
    tempatLahir: "Bogor",
    tanggalLahir: "2000-07-22",
    jenisKelamin: "Perempuan",
    agama: "Islam",
    statusPerkawinan: "Belum Kawin",
    pekerjaan: "Mahasiswa",
    pendidikan: "SMA",
    alamat: "Kp. Babakan",
    rt: "002",
    rw: "003",
    dusun: "Dusun Babakan",
    status: "aktif",
  },
];

export const kartuKeluarga: KartuKeluarga[] = [
  {
    id: "kk-1",
    nomorKk: "3201010101010001",
    kepalaKeluarga: "Ahmad Hidayat",
    alamat: "Kp. Cihurip",
    rt: "001",
    rw: "002",
    dusun: "Dusun Cihurip",
    jumlahAnggota: 4,
  },
  {
    id: "kk-2",
    nomorKk: "3201010101010002",
    kepalaKeluarga: "Dede Kurnia",
    alamat: "Kp. Pasir Angin",
    rt: "003",
    rw: "001",
    dusun: "Dusun Pasir Angin",
    jumlahAnggota: 3,
  },
  {
    id: "kk-3",
    nomorKk: "3201010101010003",
    kepalaKeluarga: "Neng Lestari",
    alamat: "Kp. Babakan",
    rt: "002",
    rw: "003",
    dusun: "Dusun Babakan",
    jumlahAnggota: 2,
  },
];

export const jenisSurat: JenisSurat[] = [
  { id: "js-1", kode: "DOM", nama: "Surat Keterangan Domisili", deskripsi: "Keterangan alamat domisili warga." },
  { id: "js-2", kode: "SKU", nama: "Surat Keterangan Usaha", deskripsi: "Keterangan usaha warga." },
  { id: "js-3", kode: "SKCK", nama: "Surat Pengantar SKCK", deskripsi: "Pengantar administrasi SKCK." },
  { id: "js-4", kode: "SKTM", nama: "Surat Keterangan Tidak Mampu", deskripsi: "Keterangan kondisi sosial ekonomi." },
  { id: "js-5", kode: "KMT", nama: "Surat Keterangan Kematian", deskripsi: "Keterangan kematian warga." },
  { id: "js-6", kode: "LHR", nama: "Surat Keterangan Kelahiran", deskripsi: "Keterangan kelahiran anak." },
];

export const pengajuanSurat: PengajuanSurat[] = [
  {
    id: "surat-1",
    nomorSurat: "001/DOM/DS-CIH/06/2026",
    jenisSurat: "Surat Keterangan Domisili",
    wargaNama: "Ahmad Hidayat",
    wargaId: "warga-1",
    status: "diajukan",
    tanggalPengajuan: "2026-06-01",
  },
  {
    id: "surat-2",
    nomorSurat: "002/SKU/DS-CIH/06/2026",
    jenisSurat: "Surat Keterangan Usaha",
    wargaNama: "Siti Aminah",
    wargaId: "warga-2",
    status: "diproses",
    tanggalPengajuan: "2026-05-30",
    catatanStaff: "Menunggu verifikasi lokasi usaha.",
  },
  {
    id: "surat-3",
    nomorSurat: "003/SKTM/DS-CIH/06/2026",
    jenisSurat: "Surat Keterangan Tidak Mampu",
    wargaNama: "Dede Kurnia",
    wargaId: "warga-3",
    status: "selesai",
    tanggalPengajuan: "2026-05-28",
    tanggalSelesai: "2026-05-29",
  },
];

export const pengumuman: Pengumuman[] = [
  {
    id: "peng-1",
    judul: "Jadwal Posyandu Bulan Juni",
    isi: "Posyandu balita dan lansia dilaksanakan setiap hari Jumat minggu kedua di aula desa.",
    kategori: "Kesehatan",
    tanggalPublish: "2026-06-01",
    status: "published",
  },
  {
    id: "peng-2",
    judul: "Musyawarah Perencanaan Pembangunan Desa",
    isi: "Warga diundang menghadiri musyawarah rencana pembangunan desa tahun berjalan.",
    kategori: "Administrasi",
    tanggalPublish: "2026-06-03",
    status: "draft",
  },
];

export const kegiatan: Kegiatan[] = [
  {
    id: "keg-1",
    nama: "Kerja Bakti Lingkungan",
    deskripsi: "Membersihkan saluran air dan fasilitas umum desa.",
    tanggal: "2026-06-07",
    lokasi: "Dusun Cihurip",
  },
  {
    id: "keg-2",
    nama: "Pelatihan UMKM",
    deskripsi: "Pelatihan pencatatan keuangan sederhana untuk pelaku usaha desa.",
    tanggal: "2026-06-14",
    lokasi: "Aula Desa",
  },
];

export const bantuanSosial: BantuanSosial[] = [
  {
    id: "bansos-1",
    namaProgram: "BLT Dana Desa",
    deskripsi: "Bantuan langsung tunai untuk keluarga prioritas.",
    sumberDana: "Dana Desa",
    tahun: 2026,
    jumlahPenerima: 45,
  },
  {
    id: "bansos-2",
    namaProgram: "Bantuan Sembako",
    deskripsi: "Paket bahan pokok untuk warga rentan.",
    sumberDana: "APBD Kabupaten",
    tahun: 2026,
    jumlahPenerima: 80,
  },
];

export const penerimaBantuan: PenerimaBantuan[] = [
  {
    id: "pb-1",
    programId: "bansos-1",
    programNama: "BLT Dana Desa",
    wargaId: "warga-1",
    wargaNama: "Ahmad Hidayat",
    status: "diterima",
    tanggalTerima: "2026-05-20",
  },
  {
    id: "pb-2",
    programId: "bansos-2",
    programNama: "Bantuan Sembako",
    wargaId: "warga-4",
    wargaNama: "Neng Lestari",
    status: "terdaftar",
  },
];

export const pengaturanDesa: PengaturanDesa = {
  namaDesa: "Desa Cihaur",
  kecamatan: "Cibeureum",
  kabupaten: "Kabupaten Bogor",
  provinsi: "Jawa Barat",
  namaKepalaDesa: "H. Maman Suherman",
  nomorKontak: "0812-3456-7890",
  alamatKantor: "Jl. Raya Cihaur No. 1",
};

export const dashboardStats: DashboardStats = {
  totalWarga: warga.length,
  totalKk: kartuKeluarga.length,
  totalPengajuanSurat: pengajuanSurat.length,
  pengajuanMenunggu: pengajuanSurat.filter((item) => item.status === "diajukan" || item.status === "diproses").length,
  totalBantuanSosial: bantuanSosial.length,
};

export const wargaByDusun = Object.values(
  warga.reduce<Record<string, { dusun: string; total: number }>>((acc, item) => {
    acc[item.dusun] = acc[item.dusun] ?? { dusun: item.dusun, total: 0 };
    acc[item.dusun].total += 1;
    return acc;
  }, {}),
);

export const recentActivities = [
  "Pengajuan Surat Domisili dari Ahmad Hidayat masuk.",
  "Data penerima BLT Dana Desa diperbarui.",
  "Pengumuman Posyandu bulan Juni dipublikasikan.",
  "Kegiatan Pelatihan UMKM dijadwalkan.",
];
