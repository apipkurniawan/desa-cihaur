import { Bell, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AnnouncementHero({ total }: { total: number }) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,238,220,0.18),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(107,163,104,0.35),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Button asChild variant="outline" className="mb-8 border-white/25 bg-white/10 text-white hover:bg-white/20">
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              <Bell className="h-4 w-4" />
              Pusat Informasi Warga
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Pengumuman Desa Cihaur
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
              Baca informasi resmi desa dengan tampilan yang ringan, jelas, dan nyaman untuk seluruh warga.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/15 bg-white/12 p-5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <p className="text-3xl font-bold">{total}</p>
                <p className="text-sm text-white/72">Pengumuman aktif untuk warga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
