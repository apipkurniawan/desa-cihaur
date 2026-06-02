import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Struktur Desa Cihaur",
  description: "Struktur perangkat Desa Cihaur, jabatan, masa jabatan, dan unit pelayanan pemerintah desa.",
};

type Official = {
  name: string;
  role: string;
  unit: string;
  tenure: string;
  image: string;
  description: string;
};

const villageOfficials: Official[] = [
  {
    name: "H. Maman Suherman",
    role: "Kepala Desa",
    unit: "Pemerintah Desa Cihaur",
    tenure: "2021 - 2027",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
    description: "Memimpin penyelenggaraan pemerintahan desa, pembangunan, pembinaan, dan pemberdayaan masyarakat.",
  },
  {
    name: "Rina Marlina",
    role: "Sekretaris Desa",
    unit: "Sekretariat Desa",
    tenure: "2022 - Sekarang",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    description: "Mengelola administrasi umum, persuratan, arsip, dan koordinasi pelayanan kantor desa.",
  },
  {
    name: "Dadan Ramdani",
    role: "Kasi Pemerintahan",
    unit: "Seksi Pemerintahan",
    tenure: "2020 - Sekarang",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
    description: "Menangani data kependudukan, ketertiban wilayah, dan koordinasi administrasi pemerintahan.",
  },
  {
    name: "Tuti Herawati",
    role: "Kasi Pelayanan",
    unit: "Seksi Pelayanan",
    tenure: "2020 - Sekarang",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
    description: "Mendampingi pelayanan surat, pengajuan warga, dan kebutuhan administrasi masyarakat.",
  },
  {
    name: "Asep Saepudin",
    role: "Kaur Keuangan",
    unit: "Urusan Keuangan",
    tenure: "2023 - Sekarang",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=700&q=80",
    description: "Membantu pengelolaan keuangan desa, penatausahaan, dan laporan realisasi anggaran.",
  },
  {
    name: "Ujang Sujana",
    role: "Kaur Perencanaan",
    unit: "Urusan Perencanaan",
    tenure: "2022 - Sekarang",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
    description: "Menyusun rencana kerja desa, data program, dan pelaporan pembangunan desa.",
  },
  {
    name: "Neni Nurhayati",
    role: "Kasi Kesejahteraan",
    unit: "Seksi Kesejahteraan",
    tenure: "2021 - Sekarang",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=700&q=80",
    description: "Mengawal program sosial, kesehatan, pemberdayaan, dan kegiatan kemasyarakatan.",
  },
];

const wilayah = [
  { name: "Dusun Cihurip", lead: "Asep Saepudin", area: "RW 01 - RW 02" },
  { name: "Dusun Babakan", lead: "Ujang Sujana", area: "RW 03" },
  { name: "Dusun Pasir", lead: "Neni Nurhayati", area: "RW 04" },
];

export default function StrukturDesaPage() {
  const [headOfficial, ...officials] = villageOfficials;

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-[#DCCFB7] bg-[#FFFDF7] p-5 shadow-[0_24px_80px_rgba(47,107,63,0.09)] sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <Landmark className="h-4 w-4" />
              Struktur Pemerintahan
            </span>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-app-text sm:text-5xl">
              Perangkat Desa Cihaur
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-app-muted sm:text-base">
              Kenali aparatur Desa Cihaur yang menjalankan pelayanan publik, administrasi kependudukan, pembangunan,
              dan pendampingan masyarakat secara terbuka.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <SummaryCard icon={UsersRound} label="Perangkat" value="7 Orang" />
              <SummaryCard icon={MapPin} label="Wilayah" value="3 Dusun" />
              <SummaryCard icon={ShieldCheck} label="Layanan" value="Aktif" />
            </div>
          </div>

          <article className="overflow-hidden rounded-[28px] border border-[#DCCFB7] bg-white shadow-sm">
            <div className="relative h-72 bg-[#F5EEDC]">
              <Image
                src={headOfficial.image}
                alt={headOfficial.name}
                fill
                priority
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-primary">
                  <BadgeCheck className="h-4 w-4" />
                  {headOfficial.role}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white">{headOfficial.name}</h2>
              </div>
            </div>
            <div className="p-5">
              <InfoLine icon={CalendarDays} label="Masa Jabatan" value={headOfficial.tenure} />
              <InfoLine icon={BriefcaseBusiness} label="Unit" value={headOfficial.unit} />
              <p className="mt-4 text-sm leading-6 text-app-muted">{headOfficial.description}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Aparatur Desa</p>
            <h2 className="mt-2 text-2xl font-bold text-app-text">Pejabat struktural dan pelaksana layanan</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-app-muted">
            Data contoh dapat dihubungkan ke Supabase untuk pembaruan foto, jabatan, dan periode aktif.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {officials.map((official) => (
            <article
              key={`${official.role}-${official.name}`}
              className="group overflow-hidden rounded-[28px] border border-[#DCCFB7] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(47,107,63,0.13)]"
            >
              <div className="relative h-64 bg-[#F5EEDC]">
                <Image
                  src={official.image}
                  alt={official.name}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-primary">
                  {official.unit}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-app-text">{official.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{official.role}</p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-[#FAFAF7] p-4">
                  <InfoLine icon={CalendarDays} label="Masa Jabatan" value={official.tenure} compact />
                </div>
                <p className="mt-4 text-sm leading-6 text-app-muted">{official.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[28px] border border-[#DCCFB7] bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Wilayah Kerja</p>
          <h2 className="mt-2 text-2xl font-bold text-app-text">Koordinasi dusun dan layanan warga</h2>
          <div className="mt-5 grid gap-3">
            {wilayah.map((item) => (
              <div key={item.name} className="flex flex-col gap-3 rounded-[22px] border border-app-border bg-[#FAFAF7] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-bold text-app-text">{item.name}</h3>
                  <p className="mt-1 text-sm text-app-muted">Koordinator: {item.lead}</p>
                </div>
                <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-primary">{item.area}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[28px] border border-[#DCCFB7] bg-[#FFFDF7] p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Kontak Pelayanan</p>
          <h2 className="mt-2 text-2xl font-bold text-app-text">Kantor Desa Cihaur</h2>
          <p className="mt-3 text-sm leading-6 text-app-muted">
            Hubungi perangkat desa pada jam pelayanan untuk kebutuhan administrasi, surat, dan informasi kegiatan.
          </p>
          <div className="mt-5 space-y-3">
            <InfoLine icon={Phone} label="Telepon" value="(0232) 123456" />
            <InfoLine icon={Mail} label="Email" value="pemdes@cihaur-kuningan.desa.id" />
            <InfoLine icon={MapPin} label="Alamat" value="Balai Desa Cihaur, Ciawigebang, Kuningan" />
          </div>
        </aside>
      </section>
    </div>
  );
}

function SummaryCard({ icon: Icon, label, value }: { icon: typeof UsersRound; label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-[#DCCFB7] bg-white/78 p-4">
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-3 text-xs font-semibold text-app-muted">{label}</p>
      <p className="mt-1 text-lg font-bold text-app-text">{value}</p>
    </div>
  );
}

function InfoLine({
  icon: Icon,
  label,
  value,
  compact,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3 ${compact ? "" : "rounded-2xl bg-[#FAFAF7] p-3"}`}>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-semibold text-app-muted">{label}</p>
        <p className="mt-0.5 text-sm font-bold text-app-text">{value}</p>
      </div>
    </div>
  );
}
