import { ArrowRight, Building2, ChevronDown, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroStats } from "@/lib/data/home";
import { MotionSection } from "./Motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-app-text text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(47,107,63,0.88), rgba(45,55,72,0.55) 48%, rgba(45,55,72,0.35)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85')",
        }}
        role="img"
        aria-label="Panorama alam pedesaan dengan sawah dan pegunungan"
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-app-background to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-3" aria-label="Beranda Desa Cihaur">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
              <Building2 className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold sm:text-base">Desa Cihaur</span>
              <span className="hidden text-xs text-white/75 sm:block">Kabupaten Kuningan</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/85 lg:flex" aria-label="Navigasi utama">
            <a href="#layanan" className="hover:text-white">Layanan</a>
            <a href="#pengumuman" className="hover:text-white">Pengumuman</a>
            <a href="#profil" className="hover:text-white">Profil</a>
            <a href="#kontak" className="hover:text-white">Kontak</a>
          </nav>
          <Button asChild className="bg-accent text-primary hover:bg-accent/90">
            <Link href="/login">Login</Link>
          </Button>
        </header>

        <div className="flex flex-1 items-center py-16">
          <MotionSection className="max-w-4xl" delay={0.05}>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Website Resmi Pemerintah Desa
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Selamat Datang di Website Resmi Desa Cihaur
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Pelayanan publik yang transparan, cepat, dan mudah diakses oleh seluruh masyarakat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90">
                <Link href="/warga/pengajuan-surat">
                  <FileText className="h-4 w-4" />
                  Ajukan Surat
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <a href="#profil">
                  Profil Desa
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </MotionSection>
        </div>

        <div className="grid gap-3 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/12 p-4 backdrop-blur-md">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
        <a href="#statistik" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur lg:block" aria-label="Lanjut ke statistik desa">
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
