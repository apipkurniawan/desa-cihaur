import { ArrowRight, Building2, FileText, Megaphone, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pengaturanDesa, pengumuman } from "@/lib/data/dummy";

const featureCards = [
  { title: "Data Warga", desc: "NIK, KK, RT/RW, dusun, dan status warga.", icon: Users },
  { title: "Surat Online", desc: "Pengajuan, proses, status, dan unduh PDF.", icon: FileText },
  { title: "Pengumuman", desc: "Informasi desa yang dapat dibaca warga.", icon: Megaphone },
  { title: "RBAC", desc: "Akses berbeda untuk admin, staff, dan warga.", icon: ShieldCheck },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-app-background">
      <section className="border-b border-primary/15 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-app-text">Sistem Informasi Desa</p>
                <p className="text-xs text-app-muted">{pengaturanDesa.namaDesa}</p>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost">
                <Link href="/pengumuman">Pengumuman</Link>
              </Button>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </nav>

          <div className="grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                Portal digital administrasi dan layanan warga
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-app-text sm:text-5xl">
                Sistem Informasi Desa
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-app-text/80">
                Kelola data warga, kartu keluarga, pengajuan surat, pengumuman, kegiatan, bantuan sosial, dan laporan
                administrasi desa dalam satu aplikasi yang bersih dan mudah digunakan.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Masuk Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/register">Daftar sebagai Warga</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featureCards.map(({ title, desc, icon: Icon }) => (
                <Card key={title}>
                  <CardContent className="p-5">
                    <Icon className="mb-4 h-7 w-7 text-primary" />
                    <h2 className="font-semibold text-app-text">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-app-muted">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-app-text">Pengumuman Terbaru</h2>
          <Button asChild variant="link">
            <Link href="/pengumuman">Lihat semua</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {pengumuman
            .filter((item) => item.status === "published")
            .map((item) => (
              <Card key={item.id}>
                <CardContent className="p-5">
                  <p className="text-xs font-medium uppercase text-primary">{item.kategori}</p>
                  <h3 className="mt-2 font-semibold text-app-text">{item.judul}</h3>
                  <p className="mt-2 text-sm leading-6 text-app-muted">{item.isi}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </main>
  );
}
