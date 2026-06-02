import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Download,
  Eye,
  FileBadge2,
  FileText,
  Landmark,
  PieChart,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BudgetCharts } from "@/features/budget/BudgetCharts";
import {
  budgetCategories,
  budgetEvidence,
  budgetPrograms,
  budgetSummaries,
  budgetTimeline,
  budgetYear,
  villageBudgetRealized,
  villageBudgetTotal,
} from "@/lib/data/budget";

export const metadata: Metadata = {
  title: "Transparansi Anggaran Desa Cihaur",
  description: "Informasi APBDes Desa Cihaur, realisasi anggaran, program prioritas, bukti kegiatan, dan dokumen publik.",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const compactCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 1,
    notation: "compact",
  }).format(value);

const formatPercent = (value: number) => `${Math.round(value)}%`;

const getProgress = (realized: number, budget: number) => Math.min(Math.round((realized / budget) * 100), 100);

const statusClass = {
  Selesai: "border-secondary/30 bg-secondary/10 text-primary",
  Berjalan: "border-[#E0A72E]/30 bg-[#FFF7DF] text-[#8A5B20]",
  Perencanaan: "border-app-border bg-app-background text-app-muted",
  Menunggu: "border-app-border bg-app-background text-app-muted",
};

export default function TransparansiPage() {
  const totalProgress = getProgress(villageBudgetRealized, villageBudgetTotal);

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[32px] border border-[#DCCFB7] bg-[#FFFDF7] shadow-[0_24px_80px_rgba(47,107,63,0.10)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(107,163,104,0.18),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(245,238,220,0.9),transparent_34%)]" />
        <div className="relative grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                <Landmark className="h-4 w-4" />
                Transparansi Publik
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DCCFB7] bg-white/80 px-4 py-2 text-xs font-bold text-primary">
                <CalendarDays className="h-4 w-4" />
                APBDes {budgetYear}
              </span>
            </div>
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-app-text sm:text-5xl">
              Transparansi Anggaran Desa Cihaur
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-app-muted sm:text-base">
              Halaman ini menyajikan ringkasan pendapatan, belanja, realisasi program, serta bukti dokumen dan
              dokumentasi kegiatan agar warga dapat memantau penggunaan anggaran desa secara jelas.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="#program-prioritas">
                  Lihat Program
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#bukti-dokumen">
                  Bukti dan Gambar
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#DCCFB7] bg-white/78 p-5 shadow-[0_18px_60px_rgba(47,107,63,0.10)] backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Realisasi Total</p>
                <p className="mt-2 text-3xl font-bold text-app-text">{formatPercent(totalProgress)}</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <PieChart className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#F5EEDC]">
              <div className="h-full rounded-full bg-primary" style={{ width: `${totalProgress}%` }} />
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#FAFAF7] p-4">
                <dt className="text-xs font-semibold text-app-muted">Total APBDes</dt>
                <dd className="mt-1 text-lg font-bold text-app-text">{compactCurrency(villageBudgetTotal)}</dd>
              </div>
              <div className="rounded-2xl bg-[#FAFAF7] p-4">
                <dt className="text-xs font-semibold text-app-muted">Terealisasi</dt>
                <dd className="mt-1 text-lg font-bold text-app-text">{compactCurrency(villageBudgetRealized)}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs leading-5 text-app-muted">Data contoh terakhir diperbarui 2 Juni 2026.</p>
          </div>
        </div>
      </section>

      <section aria-label="Ringkasan anggaran" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {budgetSummaries.map((item) => (
          <article key={item.label} className="rounded-[24px] border border-[#DCCFB7] bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-app-muted">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-app-text">{compactCurrency(item.value)}</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{item.progress}%</span>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#F5EEDC]">
              <div className="h-full rounded-full bg-primary" style={{ width: `${item.progress}%` }} />
            </div>
            <p className="mt-3 text-sm leading-6 text-app-muted">{item.helper}</p>
          </article>
        ))}
      </section>

      <BudgetCharts categories={budgetCategories} />

      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-[#DCCFB7] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ReceiptText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Bidang Belanja</p>
              <h2 className="text-xl font-bold text-app-text">Rincian realisasi per kategori</h2>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {budgetCategories.map((item) => {
              const progress = getProgress(item.realized, item.budget);

              return (
                <article key={item.name} className="rounded-[22px] border border-app-border bg-[#FAFAF7] p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-bold text-app-text">{item.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-app-muted">{item.description}</p>
                    </div>
                    <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-primary">{progress}%</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                    <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: item.color }} />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs font-semibold text-app-muted">
                    <span>Pagu: {formatCurrency(item.budget)}</span>
                    <span>Realisasi: {formatCurrency(item.realized)}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div id="program-prioritas" className="rounded-[28px] border border-[#DCCFB7] bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Program Prioritas</p>
              <h2 className="mt-2 text-xl font-bold text-app-text">Kegiatan yang sedang dipantau warga</h2>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
          <div className="mt-5 overflow-hidden rounded-[22px] border border-app-border">
            <div className="hidden grid-cols-[0.8fr_1.6fr_1fr_1fr_0.8fr] bg-[#F5EEDC] px-4 py-3 text-xs font-bold uppercase tracking-wide text-primary md:grid">
              <span>Kode</span>
              <span>Kegiatan</span>
              <span>Realisasi</span>
              <span>Penerima</span>
              <span>Status</span>
            </div>
            <div className="divide-y divide-app-border bg-white">
              {budgetPrograms.map((program) => {
                const progress = getProgress(program.realized, program.budget);

                return (
                  <article key={program.code} className="grid gap-3 px-4 py-4 text-sm md:grid-cols-[0.8fr_1.6fr_1fr_1fr_0.8fr] md:items-center">
                    <div className="font-bold text-primary">{program.code}</div>
                    <div>
                      <h3 className="font-bold text-app-text">{program.name}</h3>
                      <p className="mt-1 text-xs font-semibold text-app-muted">{program.field}</p>
                    </div>
                    <div>
                      <p className="font-bold text-app-text">{formatPercent(progress)}</p>
                      <p className="text-xs text-app-muted">{formatCurrency(program.realized)}</p>
                    </div>
                    <div className="text-sm font-semibold text-app-muted">{program.beneficiaries}</div>
                    <div>
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${statusClass[program.status]}`}>
                        {program.status}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-[#DCCFB7] bg-[#FFFDF7] p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Akuntabilitas</p>
            <h2 className="mt-2 text-2xl font-bold text-app-text">Alur publikasi dan pelaporan</h2>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCCFB7] bg-white px-4 py-2 text-xs font-bold text-primary">
            <ShieldCheck className="h-4 w-4" />
            Terbuka untuk warga
          </span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {budgetTimeline.map((item) => (
            <article key={item.period} className="rounded-[22px] border border-[#DCCFB7] bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{item.period}</span>
                <CheckCircle2 className={`h-5 w-5 ${item.status === "Selesai" ? "text-secondary" : "text-app-muted"}`} />
              </div>
              <h3 className="mt-4 font-bold text-app-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-app-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="bukti-dokumen" className="space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Output, Bukti, dan Gambar</p>
            <h2 className="mt-2 text-2xl font-bold text-app-text">Dokumentasi transparansi anggaran</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-app-muted">
              Contoh area untuk menampilkan papan informasi, dokumen pendukung, dan foto progres kegiatan. Saat Supabase
              Storage aktif, gambar dan file dapat diganti dengan dokumen resmi desa.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/pengumuman">
              Lihat Pengumuman
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {budgetEvidence.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[28px] border border-[#DCCFB7] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(47,107,63,0.14)]">
              <div className="relative h-52 overflow-hidden bg-[#F5EEDC]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary">
                  {item.type}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-app-muted">
                  <FileBadge2 className="h-4 w-4 text-primary" />
                  {item.date}
                </div>
                <h3 className="mt-3 text-lg font-bold text-app-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-app-muted">{item.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    <BadgeCheck className="h-4 w-4" />
                    {item.status}
                  </span>
                  <Button variant="link" size="sm">
                    <FileText className="h-4 w-4" />
                    Detail
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
