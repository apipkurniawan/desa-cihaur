import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  FileBarChart,
  FileText,
  HandHeart,
  Home,
  Megaphone,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { EmptyNote, MetricCard, MiniStat, Panel, QuickAction } from "@/features/dashboard/DashboardParts";
import { StatusDonutChart } from "@/features/dashboard/StatusDonutChart";
import { WargaChart } from "@/features/dashboard/WargaChart";
import {
  bantuanSosial,
  dashboardStats,
  kegiatan,
  pengajuanSurat,
  pengumuman,
  recentActivities,
  warga,
  wargaByDusun,
} from "@/lib/data/dummy";
import { formatDate } from "@/lib/utils";

const statusChartData = [
  { name: "Diajukan", value: pengajuanSurat.filter((item) => item.status === "diajukan").length, color: "#E0A72E" },
  { name: "Diproses", value: pengajuanSurat.filter((item) => item.status === "diproses").length, color: "#6BA368" },
  { name: "Selesai", value: pengajuanSurat.filter((item) => item.status === "selesai").length, color: "#2F6B3F" },
  { name: "Ditolak", value: pengajuanSurat.filter((item) => item.status === "ditolak").length, color: "#B97148" },
].filter((item) => item.value > 0);

const publishedAnnouncements = pengumuman
  .filter((item) => item.status === "published")
  .sort((a, b) => new Date(b.tanggalPublish).getTime() - new Date(a.tanggalPublish).getTime())
  .slice(0, 3);

const pendingLetters = pengajuanSurat.filter((item) => item.status === "diajukan" || item.status === "diproses");
const activeCitizens = warga.filter((item) => item.status === "aktif").length;
const serviceCompletion = Math.round((pengajuanSurat.filter((item) => item.status === "selesai").length / Math.max(pengajuanSurat.length, 1)) * 100);
const totalBansosRecipients = bantuanSosial.reduce((total, item) => total + item.jumlahPenerima, 0);

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <section className="rounded-[32px] border border-[#DCCFB7] bg-[#FFFDF7] p-5 shadow-[0_24px_80px_rgba(47,107,63,0.08)] sm:p-7">
        <div className="grid gap-6 xl:grid-cols-[1fr_360px] xl:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <ShieldCheck className="h-4 w-4" />
              Pusat Kendali Desa
            </span>
            <h1 className="mt-5 max-w-4xl text-3xl font-bold tracking-tight text-app-text sm:text-5xl">
              Dashboard Operasional Desa Cihaur
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-app-muted sm:text-base">
              Pantau data kependudukan, layanan surat, bantuan sosial, pengumuman, dan agenda desa dalam satu tampilan
              yang mudah dipindai oleh admin dan staff desa.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/dashboard/surat">
                  Proses Surat
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard/laporan">
                  Lihat Laporan
                  <FileBarChart className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#DCCFB7] bg-white/78 p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Status Hari Ini</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <MiniStat label="Surat menunggu" value={dashboardStats.pengajuanMenunggu} />
              <MiniStat label="Warga aktif" value={activeCitizens} />
              <MiniStat label="Agenda dekat" value={kegiatan.length} />
              <MiniStat label="Pengumuman" value={publishedAnnouncements.length} />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Ringkasan dashboard" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <MetricCard icon={Users} title="Total Warga" value={dashboardStats.totalWarga} helper="Warga terdata" trend="+12% akurasi data" />
        <MetricCard icon={Home} title="Total KK" value={dashboardStats.totalKk} helper="Kartu keluarga aktif" trend="3 dusun terdata" />
        <MetricCard icon={FileText} title="Pengajuan Surat" value={dashboardStats.totalPengajuanSurat} helper="Total pengajuan" trend={`${serviceCompletion}% selesai`} />
        <MetricCard icon={Clock3} title="Menunggu Proses" value={dashboardStats.pengajuanMenunggu} helper="Butuh tindak lanjut" trend="Prioritas layanan" warning />
        <MetricCard icon={HandHeart} title="Bantuan Sosial" value={dashboardStats.totalBantuanSosial} helper={`${totalBansosRecipients} penerima`} trend="Program aktif" />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <QuickAction href="/dashboard/warga#form-warga" icon={Plus} title="Tambah Warga" description="Input data kependudukan baru." />
        <QuickAction href="/dashboard/kartu-keluarga" icon={Home} title="Kelola KK" description="Tambah dan validasi kartu keluarga." />
        <QuickAction href="/dashboard/surat" icon={FileText} title="Proses Surat" description="Periksa antrean layanan warga." />
        <QuickAction href="/dashboard/pengumuman" icon={Megaphone} title="Publikasi Info" description="Kelola pengumuman desa." />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.35fr_0.95fr]">
        <Panel
          eyebrow="Sebaran Warga"
          title="Jumlah warga berdasarkan dusun"
          description="Gunakan data sebaran untuk melihat wilayah yang membutuhkan prioritas layanan."
        >
          <WargaChart data={wargaByDusun} />
        </Panel>

        <Panel
          eyebrow="Layanan Surat"
          title="Status pengajuan surat"
          description="Pantau progres dari pengajuan sampai selesai."
        >
          <StatusDonutChart data={statusChartData.length ? statusChartData : [{ name: "Belum ada", value: 1, color: "#DCCFB7" }]} />
          <div className="grid gap-2 sm:grid-cols-2">
            {statusChartData.map((item) => (
              <div key={item.name} className="flex items-center gap-2 rounded-2xl bg-[#FAFAF7] px-3 py-2 text-sm font-semibold text-app-muted">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                {item.name}: {item.value}
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.9fr_0.9fr]">
        <Panel eyebrow="Antrean" title="Pengajuan perlu diproses">
          <div className="space-y-3">
            {pendingLetters.length ? (
              pendingLetters.map((item) => (
                <article key={item.id} className="rounded-[20px] border border-app-border bg-[#FAFAF7] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-app-text">{item.wargaNama}</h3>
                      <p className="mt-1 text-sm text-app-muted">{item.jenisSurat}</p>
                    </div>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-app-muted">Masuk {formatDate(item.tanggalPengajuan)}</p>
                </article>
              ))
            ) : (
              <EmptyNote title="Tidak ada antrean" description="Semua pengajuan surat sudah selesai diproses." />
            )}
          </div>
        </Panel>

        <Panel eyebrow="Agenda" title="Kegiatan mendatang">
          <div className="space-y-3">
            {kegiatan.map((item) => (
              <article key={item.id} className="rounded-[20px] border border-app-border bg-white p-4">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-app-text">{item.nama}</h3>
                    <p className="mt-1 text-sm text-app-muted">{item.lokasi}</p>
                    <p className="mt-2 text-xs font-semibold text-primary">{formatDate(item.tanggal)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="Aktivitas" title="Aktivitas terbaru">
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={activity} className="flex gap-3 rounded-[20px] bg-[#FAFAF7] p-4">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-app-text/85">{activity}</p>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_1fr]">
        <Panel eyebrow="Pengumuman" title="Informasi publik terbaru">
          <div className="space-y-3">
            {publishedAnnouncements.map((item) => (
              <article key={item.id} className="rounded-[20px] border border-app-border bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">{item.kategori}</p>
                    <h3 className="mt-2 font-bold text-app-text">{item.judul}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-app-muted">{item.ringkasan ?? item.isi}</p>
                  </div>
                  <Megaphone className="h-5 w-5 shrink-0 text-primary" />
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="Bantuan Sosial" title="Program bantuan aktif">
          <div className="space-y-3">
            {bantuanSosial.map((item) => (
              <article key={item.id} className="rounded-[20px] border border-app-border bg-white p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-bold text-app-text">{item.namaProgram}</h3>
                    <p className="mt-1 text-sm text-app-muted">{item.sumberDana} - {item.tahun}</p>
                  </div>
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {item.jumlahPenerima} penerima
                  </span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#F5EEDC]">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(item.jumlahPenerima, 100)}%` }} />
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </section>
    </div>
  );
}
