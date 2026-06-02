import { ArrowRight, BookOpen, FileText, Landmark, Megaphone, Network, UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";

export default function PortalWargaPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Portal Warga" description="Akses profil, pengajuan surat, status layanan, pengumuman, dan informasi desa." />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { href: "/warga/profil", title: "Profil Saya", desc: "Lihat data kependudukan Anda.", icon: UserRound },
          { href: "/warga/pengajuan-surat", title: "Ajukan Surat", desc: "Kirim pengajuan surat online.", icon: FileText },
          { href: "/pengumuman", title: "Pengumuman", desc: "Baca informasi resmi desa.", icon: Megaphone },
          { href: "/warga/transparansi", title: "Transparansi Anggaran", desc: "Lihat ringkasan anggaran desa.", icon: Landmark },
          { href: "/warga/struktur-desa", title: "Struktur Desa", desc: "Kenali perangkat dan struktur desa.", icon: Network },
          { href: "/warga/artikel", title: "Artikel Edukasi", desc: "Parenting, keuangan, kesehatan, dan lainnya.", icon: BookOpen },
        ].map((item) => (
          <Card key={item.href}>
            <CardContent className="p-5">
              <item.icon className="mb-4 h-7 w-7 text-emerald-700" />
              <h2 className="font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              <Button asChild variant="link" className="mt-4">
                <Link href={item.href}>
                  Buka
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
