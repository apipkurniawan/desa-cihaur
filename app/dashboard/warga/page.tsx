import { FileSpreadsheet, MapPinned, Plus, ShieldCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WargaTable } from "@/features/warga/WargaTable";
import { WargaForm } from "@/features/warga/WargaForm";
import { warga } from "@/lib/data/dummy";

export default function DashboardWargaPage() {
  const totalWarga = warga.length;
  const totalAktif = warga.filter((item) => item.status === "aktif").length;
  const totalKk = new Set(warga.map((item) => item.nomorKk)).size;
  const totalDusun = new Set(warga.map((item) => item.dusun)).size;

  return (
    <div className="space-y-7">
      <section className="rounded-[32px] border border-[#DCCFB7] bg-[#FFFDF7] p-5 shadow-[0_24px_80px_rgba(47,107,63,0.08)] sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <UsersRound className="h-4 w-4" />
              Database Kependudukan
            </span>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-app-text sm:text-4xl">
              Manajemen Data Warga
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-app-muted sm:text-base">
              Kelola NIK, nomor KK, biodata, alamat, RT/RW, dusun, status warga, dan dokumen pendukung dalam satu
              alur kerja yang mudah dipindai.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <a href="#data-warga">
                <FileSpreadsheet className="h-4 w-4" />
                Lihat Data
              </a>
            </Button>
            <Button asChild>
              <a href="#form-warga">
                <Plus className="h-4 w-4" />
                Tambah Warga
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section aria-label="Ringkasan data warga" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={UsersRound} label="Total Warga" value={`${totalWarga}`} helper="Data contoh terdaftar" />
        <MetricCard icon={ShieldCheck} label="Warga Aktif" value={`${totalAktif}`} helper="Status administrasi aktif" />
        <MetricCard icon={FileSpreadsheet} label="Kartu Keluarga" value={`${totalKk}`} helper="Nomor KK unik" />
        <MetricCard icon={MapPinned} label="Dusun Terdata" value={`${totalDusun}`} helper="Sebaran wilayah warga" />
      </section>

      <WargaForm />
      <WargaTable data={warga} />
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  helper,
}: {
  icon: typeof UsersRound;
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#DCCFB7] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-app-muted">{label}</p>
          <p className="mt-2 text-3xl font-bold text-app-text">{value}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-sm text-app-muted">{helper}</p>
    </article>
  );
}
