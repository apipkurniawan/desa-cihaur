import type {
  BudgetItem,
  VillageAnnouncement,
  VillageEvent,
  VillageNews,
  VillagePotential,
  VillageService,
  VillageStaff,
  VillageStatistic,
} from "@/types/home";

export const heroStats = [
  { label: "Penduduk", value: "4.500+" },
  { label: "Kartu Keluarga", value: "1.200+" },
  { label: "RW", value: "4" },
  { label: "RT", value: "12" },
];

export const villageStatistics: VillageStatistic[] = [
  { label: "Jumlah Penduduk", value: "4.500+", description: "Warga terdata aktif", icon: "users" },
  { label: "Jumlah KK", value: "1.200+", description: "Kartu keluarga", icon: "family" },
  { label: "Luas Wilayah", value: "320 Ha", description: "Permukiman dan lahan produktif", icon: "map" },
  { label: "Jumlah UMKM", value: "86", description: "Usaha warga aktif", icon: "store" },
  { label: "Jumlah RT/RW", value: "12/4", description: "Wilayah administratif", icon: "network" },
  { label: "Jumlah Dusun", value: "3", description: "Dusun utama desa", icon: "home" },
];

export const villageServices: VillageService[] = [
  {
    title: "Surat Domisili",
    description: "Pengajuan keterangan domisili untuk kebutuhan administrasi warga.",
    href: "/warga/pengajuan-surat",
    icon: "home",
  },
  {
    title: "Surat Keterangan Usaha",
    description: "Layanan surat keterangan usaha untuk pelaku UMKM dan perdagangan.",
    href: "/warga/pengajuan-surat",
    icon: "briefcase",
  },
  {
    title: "Surat Pengantar SKCK",
    description: "Pengantar resmi desa untuk pengurusan SKCK di kepolisian.",
    href: "/warga/pengajuan-surat",
    icon: "shield",
  },
  {
    title: "Surat Tidak Mampu",
    description: "Keterangan kondisi ekonomi untuk akses bantuan dan layanan sosial.",
    href: "/warga/pengajuan-surat",
    icon: "file",
  },
  {
    title: "Bantuan Sosial",
    description: "Informasi program bantuan sosial dan status penerimaan warga.",
    href: "/warga/transparansi",
    icon: "heart",
  },
  {
    title: "Pengaduan Warga",
    description: "Sampaikan masukan dan laporan terkait layanan atau lingkungan desa.",
    href: "#kontak",
    icon: "message",
  },
];

export const latestAnnouncements: VillageAnnouncement[] = [
  {
    category: "Kesehatan",
    title: "Jadwal Posyandu Balita dan Lansia Bulan Juni",
    excerpt: "Pelayanan Posyandu dilaksanakan di balai desa dan setiap dusun sesuai jadwal kader.",
    date: "2 Juni 2026",
  },
  {
    category: "Administrasi",
    title: "Pemutakhiran Data Penduduk dan Kartu Keluarga",
    excerpt: "Warga diminta memeriksa kembali data keluarga untuk meningkatkan akurasi layanan desa.",
    date: "30 Mei 2026",
  },
  {
    category: "Pembangunan",
    title: "Informasi Perbaikan Jalan Lingkungan",
    excerpt: "Pekerjaan perbaikan jalan lingkungan dimulai pekan depan dengan pengaturan akses sementara.",
    date: "26 Mei 2026",
  },
];

export const upcomingEvents: VillageEvent[] = [
  {
    title: "Posyandu",
    date: "7 Juni 2026",
    location: "Balai Desa Cihaur",
    description: "Pemeriksaan kesehatan balita, ibu hamil, dan lansia.",
  },
  {
    title: "Kerja Bakti",
    date: "9 Juni 2026",
    location: "Lingkungan RT 03",
    description: "Pembersihan saluran air dan area fasilitas umum.",
  },
  {
    title: "Musyawarah Desa",
    date: "14 Juni 2026",
    location: "Aula Kantor Desa",
    description: "Pembahasan prioritas pembangunan dan pelayanan publik.",
  },
  {
    title: "Pelatihan UMKM",
    date: "21 Juni 2026",
    location: "Gedung Serbaguna",
    description: "Pelatihan pencatatan keuangan dan pemasaran digital.",
  },
];

export const villagePotentials: VillagePotential[] = [
  {
    title: "Pertanian",
    description: "Hamparan sawah dan kebun warga menjadi sumber pangan dan ekonomi utama desa.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    label: "Komoditas Unggulan",
    metric: "180 Ha lahan produktif",
    icon: "sprout",
  },
  {
    title: "Peternakan",
    description: "Peternakan rakyat mendukung ketahanan ekonomi keluarga dan kebutuhan lokal.",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=900&q=80",
    label: "Ekonomi Keluarga",
    metric: "Puluhan kandang rakyat",
    icon: "cow",
  },
  {
    title: "UMKM",
    description: "Produk olahan, kuliner, dan perdagangan kecil terus tumbuh di masyarakat.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80",
    label: "Produk Lokal",
    metric: "86 pelaku usaha",
    icon: "store",
  },
  {
    title: "Wisata Alam",
    description: "Lingkungan asri Kuningan membuka peluang wisata edukatif dan alam pedesaan.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    label: "Alam Asri",
    metric: "Panorama desa",
    icon: "mountain",
  },
];

export const villageStaff: VillageStaff[] = [
  {
    name: "H. Maman Suherman",
    role: "Kepala Desa",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Rina Marlina",
    role: "Sekretaris Desa",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dadan Ramdani",
    role: "Kasi Pemerintahan",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Tuti Herawati",
    role: "Kasi Pelayanan",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
];

export const budgetItems: BudgetItem[] = [
  { label: "Pendapatan Desa", value: "Rp 2,4 M", percentage: 92 },
  { label: "Belanja Desa", value: "Rp 2,1 M", percentage: 78 },
  { label: "Realisasi Anggaran", value: "82%", percentage: 82 },
];

export const latestNews: VillageNews[] = [
  {
    title: "Warga Cihaur Mengembangkan Produk Olahan Hasil Pertanian",
    excerpt: "Kelompok UMKM desa mulai memperluas pasar melalui pelatihan kemasan dan pemasaran digital.",
    date: "1 Juni 2026",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Kegiatan Kerja Bakti Meningkatkan Kebersihan Lingkungan",
    excerpt: "Warga bersama aparatur desa membersihkan drainase untuk mengantisipasi genangan saat hujan.",
    date: "28 Mei 2026",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pelayanan Administrasi Desa Kini Lebih Mudah Diakses",
    excerpt: "Digitalisasi pengajuan surat membantu warga memantau status layanan secara transparan.",
    date: "24 Mei 2026",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
];

export const villageContact = {
  address: "Balai Desa Cihaur, Desa Cihaur, Kecamatan Ciawigebang, Kabupaten Kuningan, Provinsi Jawa Barat",
  phone: "(0232) 123456",
  email: "pemdes@cihaur-kuningan.desa.id",
  whatsapp: "0812-3456-7890",
};
