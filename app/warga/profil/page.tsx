import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CreditCard,
  FileText,
  HeartHandshake,
  Home,
  IdCard,
  MapPin,
  Phone,
  School,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { warga } from "@/lib/data/dummy";
import { formatDate } from "@/lib/utils";

const quickActions = [
  {
    title: "Ajukan Surat",
    description: "Buat pengajuan surat secara online.",
    href: "/warga/pengajuan-surat",
    icon: FileText,
  },
  {
    title: "Status Surat",
    description: "Pantau proses layanan administrasi.",
    href: "/warga/status-surat",
    icon: ShieldCheck,
  },
  {
    title: "Hubungi Desa",
    description: "Minta bantuan perangkat desa.",
    href: "/#kontak",
    icon: Phone,
  },
];

export default function ProfilWargaPage() {
  const profile = warga[0];
  const age = new Date().getFullYear() - new Date(profile.tanggalLahir).getFullYear();

  const identityItems = [
    { label: "NIK", value: profile.nik, icon: IdCard },
    { label: "Nomor KK", value: profile.nomorKk, icon: CreditCard },
    { label: "Tempat/Tanggal Lahir", value: `${profile.tempatLahir}, ${formatDate(profile.tanggalLahir)}`, icon: CalendarDays },
    { label: "Jenis Kelamin", value: profile.jenisKelamin, icon: UserRound },
    { label: "Agama", value: profile.agama, icon: HeartHandshake },
    { label: "Status Perkawinan", value: profile.statusPerkawinan, icon: BadgeCheck },
    { label: "Pekerjaan", value: profile.pekerjaan, icon: BriefcaseBusiness },
    { label: "Pendidikan", value: profile.pendidikan, icon: School },
  ];

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[32px] border border-[#DCCFB7] bg-[#FFFDF7] shadow-[0_24px_80px_rgba(47,107,63,0.10)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(107,163,104,0.18),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(245,238,220,0.95),transparent_32%)]" />
        <div className="relative grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_320px] lg:items-end">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-primary text-3xl font-bold text-white shadow-lg shadow-primary/20">
                {profile.namaLengkap
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </div>
              <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#FFFDF7] bg-secondary text-white">
                <BadgeCheck className="h-4 w-4" />
              </div>
            </div>
            <div>
              <p className="mb-2 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                Wilujeng Sumping
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-[#2D3748] sm:text-4xl">{profile.namaLengkap}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667085]">
                Profil administrasi warga Desa Cihaur. Data ini digunakan untuk pelayanan surat, bantuan sosial, dan
                kebutuhan administrasi desa.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <StatusBadge status={profile.status} />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#DCCFB7] bg-white/70 px-3 py-1 text-xs font-semibold text-[#2D3748]">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {profile.dusun}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#DCCFB7] bg-white/70 px-3 py-1 text-xs font-semibold text-[#2D3748]">
                  <CalendarDays className="h-3.5 w-3.5 text-primary" />
                  {age} tahun
                </span>
              </div>
            </div>
          </div>

          <Card className="rounded-[24px] border-[#DCCFB7] bg-white/72 shadow-none backdrop-blur">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Ringkasan</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <SummaryItem label="RT/RW" value={`${profile.rt}/${profile.rw}`} />
                <SummaryItem label="Dusun" value={profile.dusun.replace("Dusun ", "")} />
                <SummaryItem label="Pendidikan" value={profile.pendidikan} />
                <SummaryItem label="Status" value={profile.status} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <Card className="overflow-hidden rounded-[28px] border-[#DCCFB7] bg-white">
            <CardContent className="p-0">
              <div className="border-b border-[#EFE6D6] bg-[#FBF8EF] px-5 py-4 sm:px-6">
                <h2 className="text-lg font-bold text-[#2D3748]">Identitas Warga</h2>
                <p className="mt-1 text-sm text-[#667085]">Data dasar sesuai administrasi kependudukan desa.</p>
              </div>
              <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
                {identityItems.map((item) => (
                  <InfoTile key={item.label} label={item.label} value={item.value} icon={item.icon} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[28px] border-[#DCCFB7] bg-white">
            <CardContent className="p-5 sm:p-6">
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#2D3748]">Alamat Domisili</h2>
                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Lokasi tempat tinggal untuk keperluan layanan wilayah, surat, dan pendataan.
                  </p>
                </div>
              </div>
              <div className="rounded-[22px] border border-[#EFE6D6] bg-[#FBF8EF] p-5">
                <p className="text-base font-semibold text-[#2D3748]">{profile.alamat}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniInfo label="RT" value={profile.rt} />
                  <MiniInfo label="RW" value={profile.rw} />
                  <MiniInfo label="Dusun" value={profile.dusun} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card className="overflow-hidden rounded-[28px] border-[#DCCFB7] bg-primary text-white">
            <CardContent className="relative p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,238,220,0.18),transparent_30%)]" />
              <div className="relative">
                <BookOpen className="mb-4 h-8 w-8 text-accent" />
                <h2 className="text-xl font-bold">Catatan Desa</h2>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  “Someah hade ka semah” menjadi semangat pelayanan warga: ramah, tertib, dan saling membantu.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[28px] border-[#DCCFB7] bg-white">
            <CardContent className="p-5">
              <h2 className="text-lg font-bold text-[#2D3748]">Layanan Cepat</h2>
              <div className="mt-4 space-y-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group flex items-center gap-3 rounded-2xl border border-[#EFE6D6] bg-[#FFFDF7] p-3 transition-colors hover:border-primary/25 hover:bg-primary/5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <action.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D3748]">{action.title}</p>
                      <p className="mt-0.5 text-xs leading-5 text-[#667085]">{action.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[28px] border-[#DCCFB7] bg-white">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <UsersRound className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-bold text-[#2D3748]">Kartu Keluarga</h2>
                  <p className="text-sm text-[#667085]">Terhubung dengan data keluarga</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-[#FBF8EF] p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[#667085]">Nomor KK</p>
                <p className="mt-1 font-semibold text-[#2D3748]">{profile.nomorKk}</p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#FBF8EF] p-3">
      <p className="text-[11px] font-bold uppercase tracking-wide text-[#667085]">{label}</p>
      <p className="mt-1 truncate text-sm font-bold capitalize text-[#2D3748]">{value}</p>
    </div>
  );
}

function InfoTile({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof IdCard;
}) {
  return (
    <div className="group rounded-[22px] border border-[#EFE6D6] bg-[#FFFDF7] p-4 transition-colors hover:border-primary/25 hover:bg-primary/5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-[#667085]">{label}</p>
          <p className="mt-1 break-words text-sm font-semibold leading-6 text-[#2D3748]">{value}</p>
        </div>
      </div>
    </div>
  );
}

function MiniInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-3">
      <p className="text-[11px] font-bold uppercase tracking-wide text-[#667085]">{label}</p>
      <p className="mt-1 text-sm font-bold text-[#2D3748]">{value}</p>
    </div>
  );
}
