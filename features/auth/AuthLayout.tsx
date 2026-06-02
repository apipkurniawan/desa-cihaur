import { Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const highlights = [
  "Pengajuan Surat Online",
  "Informasi dan Pengumuman Desa",
  "Transparansi Anggaran",
  "Layanan Masyarakat Digital",
];

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-app-background text-app-text lg:grid lg:grid-cols-[0.95fr_1.05fr]">
      <section className="relative min-h-[360px] overflow-hidden lg:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(47,107,63,0.9), rgba(45,55,72,0.56)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85')",
          }}
          role="img"
          aria-label="Pemandangan sawah dan pegunungan pedesaan"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(245,238,220,0.28),transparent_28%),linear-gradient(to_top,rgba(45,55,72,0.48),transparent_58%)]" />
        <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-5 text-white sm:p-8 lg:min-h-screen lg:p-10">
          <Link
            href="/"
            className="flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
              <Building2 className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold">Desa Cihaur</span>
              <span className="block text-xs text-white/75">
                Kabupaten Kuningan
              </span>
            </span>
          </Link>

          <div className="max-w-xl rounded-[24px] border border-white/15 bg-white/12 p-5 shadow-2xl backdrop-blur-md sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Portal Resmi Desa
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Desa Cihaur
            </h1>
            <p className="mt-2 text-lg font-medium text-white/88">
              Sistem Informasi dan Pelayanan Masyarakat
            </p>
            <p className="mt-4 text-sm leading-7 text-white/78">
              Mewujudkan pelayanan desa yang cepat, transparan, dan mudah
              diakses oleh seluruh masyarakat.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/88"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex min-h-[calc(100vh-360px)] items-center justify-center bg-accent/55 px-4 py-8 sm:px-6 lg:min-h-screen lg:px-10">
        {children}
      </section>
    </main>
  );
}
