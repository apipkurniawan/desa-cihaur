import type { BudgetCategory, BudgetEvidence, BudgetProgram, BudgetSummary, BudgetTimeline } from "@/types/budget";

export const budgetYear = "2026";
export const villageBudgetTotal = 2485000000;
export const villageBudgetRealized = 1687000000;

export const budgetSummaries: BudgetSummary[] = [
  {
    label: "Pendapatan Desa",
    value: 2485000000,
    helper: "Dana desa, ADD, PADes, dan sumber sah lainnya",
    progress: 94,
  },
  {
    label: "Belanja Desa",
    value: 2260000000,
    helper: "Total pagu belanja APBDes tahun berjalan",
    progress: 88,
  },
  {
    label: "Realisasi Anggaran",
    value: 1687000000,
    helper: "Terserap sampai laporan Triwulan II",
    progress: 75,
  },
  {
    label: "Sisa Anggaran",
    value: 773000000,
    helper: "Akan direalisasikan sesuai jadwal kegiatan",
    progress: 31,
  },
];

export const budgetCategories: BudgetCategory[] = [
  {
    name: "Penyelenggaraan Pemerintahan",
    budget: 640000000,
    realized: 476000000,
    color: "#2F6B3F",
    description: "Operasional kantor, layanan administrasi, dan tata kelola desa.",
  },
  {
    name: "Pembangunan Desa",
    budget: 920000000,
    realized: 706000000,
    color: "#6BA368",
    description: "Jalan lingkungan, drainase, sarana air bersih, dan fasilitas umum.",
  },
  {
    name: "Pembinaan Kemasyarakatan",
    budget: 265000000,
    realized: 148000000,
    color: "#E0A72E",
    description: "Kegiatan kepemudaan, keamanan lingkungan, dan kelembagaan desa.",
  },
  {
    name: "Pemberdayaan Masyarakat",
    budget: 335000000,
    realized: 211000000,
    color: "#B97148",
    description: "Pelatihan UMKM, kelompok tani, kader kesehatan, dan ekonomi warga.",
  },
  {
    name: "Bantuan Sosial dan Darurat",
    budget: 100000000,
    realized: 60000000,
    color: "#7C8F5B",
    description: "BLT desa, dukungan warga rentan, dan kebutuhan tanggap darurat.",
  },
];

export const budgetPrograms: BudgetProgram[] = [
  {
    code: "2.1.01",
    name: "Perbaikan jalan lingkungan RT 03 dan RT 04",
    field: "Pembangunan Desa",
    budget: 275000000,
    realized: 248500000,
    beneficiaries: "430 warga",
    status: "Berjalan",
  },
  {
    code: "2.1.03",
    name: "Normalisasi drainase permukiman",
    field: "Pembangunan Desa",
    budget: 180000000,
    realized: 171000000,
    beneficiaries: "6 RT",
    status: "Selesai",
  },
  {
    code: "3.2.01",
    name: "Dukungan Posyandu balita, ibu hamil, dan lansia",
    field: "Pembinaan Kemasyarakatan",
    budget: 82000000,
    realized: 51000000,
    beneficiaries: "312 warga",
    status: "Berjalan",
  },
  {
    code: "4.1.02",
    name: "Pelatihan pencatatan keuangan UMKM",
    field: "Pemberdayaan Masyarakat",
    budget: 65000000,
    realized: 39000000,
    beneficiaries: "48 pelaku UMKM",
    status: "Berjalan",
  },
  {
    code: "5.1.01",
    name: "Bantuan langsung tunai desa",
    field: "Bantuan Sosial",
    budget: 100000000,
    realized: 60000000,
    beneficiaries: "50 KPM",
    status: "Berjalan",
  },
];

export const budgetEvidence: BudgetEvidence[] = [
  {
    title: "Papan informasi APBDes 2026",
    type: "Foto publikasi",
    date: "12 Januari 2026",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=80",
    description: "Ringkasan APBDes dipasang di area kantor desa agar mudah dibaca warga.",
    status: "Terpublikasi",
  },
  {
    title: "Dokumentasi perbaikan jalan lingkungan",
    type: "Foto kegiatan",
    date: "18 April 2026",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    description: "Bukti progres pekerjaan fisik dengan catatan volume dan lokasi kegiatan.",
    status: "Diverifikasi",
  },
  {
    title: "Berita acara musyawarah desa",
    type: "Dokumen",
    date: "25 Mei 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    description: "Dokumen kesepakatan prioritas program dan evaluasi realisasi anggaran.",
    status: "Tersedia",
  },
];

export const budgetTimeline: BudgetTimeline[] = [
  {
    period: "Januari",
    title: "Penetapan APBDes",
    description: "Dokumen APBDes disahkan dan ringkasannya dipublikasikan kepada warga.",
    status: "Selesai",
  },
  {
    period: "Maret - Juni",
    title: "Pelaksanaan tahap pertama",
    description: "Kegiatan prioritas infrastruktur, layanan kesehatan, dan bantuan sosial berjalan.",
    status: "Berjalan",
  },
  {
    period: "Juli",
    title: "Evaluasi semester",
    description: "Pemdes menyusun evaluasi capaian dan memperbarui dokumen transparansi.",
    status: "Menunggu",
  },
  {
    period: "Desember",
    title: "Laporan akhir tahun",
    description: "Realisasi akhir dan dokumen pertanggungjawaban dipublikasikan.",
    status: "Menunggu",
  },
];
