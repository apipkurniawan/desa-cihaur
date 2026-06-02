import Link from "next/link";
import { ArrowRight, Compass, Flag, History, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MotionSection } from "./Motion";

const profileItems = [
  {
    title: "Sejarah Singkat",
    icon: History,
    text: "Desa Cihaur tumbuh sebagai desa agraris dengan budaya gotong royong yang kuat dan masyarakat yang menjaga nilai kebersamaan.",
  },
  {
    title: "Letak Geografis",
    icon: Compass,
    text: "Berada di Kabupaten Kuningan, Jawa Barat, Desa Cihaur memiliki lingkungan asri dengan lahan pertanian, permukiman, dan potensi alam pedesaan.",
  },
  {
    title: "Visi Desa",
    icon: Target,
    text: "Mewujudkan Desa Cihaur yang maju, transparan, sejahtera, religius, dan berdaya melalui pelayanan publik yang inklusif.",
  },
  {
    title: "Misi Desa",
    icon: Flag,
    text: "Meningkatkan kualitas layanan administrasi, memperkuat ekonomi warga, menjaga lingkungan, dan membuka akses informasi publik.",
  },
];

export function ProfileSection() {
  return (
    <MotionSection id="profil" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Profil Desa</p>
          <h2 className="text-3xl font-bold tracking-tight text-app-text">Desa agraris yang asri, produktif, dan terbuka</h2>
          <p className="mt-4 text-base leading-8 text-app-muted">
            Website ini menjadi pusat informasi desa dan kanal layanan masyarakat. Warga dapat mengetahui program desa,
            mengakses layanan surat, mengikuti agenda kegiatan, dan melihat transparansi anggaran.
          </p>
          <Button asChild className="mt-6">
            <Link href="/warga/struktur-desa">
              Baca Selengkapnya
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profileItems.map((item) => (
            <Card key={item.title} className="bg-white">
              <CardContent className="p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-app-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-app-muted">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
