import { ArrowDown, FileText, Home, Plus, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KartuKeluargaTable } from "@/features/warga/KartuKeluargaTable";
import { kartuKeluarga } from "@/lib/data/dummy";

export default function DashboardKartuKeluargaPage() {
  return (
    <div className="space-y-7">
      <section className="rounded-[32px] border border-[#DCCFB7] bg-[#FFFDF7] p-5 shadow-[0_24px_80px_rgba(47,107,63,0.08)] sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <Home className="h-4 w-4" />
              Administrasi Keluarga
            </span>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-app-text sm:text-4xl">
              Manajemen Kartu Keluarga
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-app-muted sm:text-base">
              Kelola nomor KK, kepala keluarga, alamat, RT/RW, dusun, dan jumlah anggota keluarga dengan alur CRUD yang
              mudah dipahami staff desa.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <a href="#data-kartu-keluarga">
                <ArrowDown className="h-4 w-4" />
                Lihat Data
              </a>
            </Button>
            <Button asChild>
              <a href="#data-kartu-keluarga">
                <Plus className="h-4 w-4" />
                Tambah KK
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <WorkflowCard icon={FileText} title="Validasi Nomor KK" description="Nomor KK divalidasi 16 digit sebelum disimpan." />
          <WorkflowCard icon={UsersRound} title="Pantau Anggota" description="Jumlah anggota keluarga terlihat di tabel dan mobile card." />
          <WorkflowCard icon={Home} title="Filter Wilayah" description="Staff dapat menyaring data berdasarkan dusun." />
        </div>
      </section>

      <KartuKeluargaTable data={kartuKeluarga} />
    </div>
  );
}

function WorkflowCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof FileText;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[22px] border border-[#DCCFB7] bg-white/78 p-4">
      <Icon className="h-5 w-5 text-primary" />
      <h2 className="mt-3 font-bold text-app-text">{title}</h2>
      <p className="mt-1 text-sm leading-6 text-app-muted">{description}</p>
    </article>
  );
}
