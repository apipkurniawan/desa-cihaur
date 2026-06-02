import { BookOpenCheck, Filter, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnnouncementEmptyState } from "@/features/announcements/AnnouncementEmptyState";
import { AnnouncementHero } from "@/features/announcements/AnnouncementHero";
import { AnnouncementPublicCard } from "@/features/announcements/AnnouncementPublicCard";
import { pengumuman } from "@/lib/data/dummy";

export default function PengumumanPublicPage() {
  const published = pengumuman
    .filter((item) => item.status === "published")
    .sort((a, b) => new Date(b.tanggalPublish).getTime() - new Date(a.tanggalPublish).getTime());
  const featured = published[0];
  const categories = Array.from(new Set(published.map((item) => item.kategori)));

  return (
    <main className="min-h-screen bg-app-background">
      <AnnouncementHero total={published.length} />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {published.length ? (
          <div className="space-y-10">
            {featured ? (
              <div>
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
                  <Sparkles className="h-4 w-4" />
                  Pengumuman Terbaru
                </div>
                <AnnouncementPublicCard item={featured} featured />
              </div>
            ) : null}

            <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <Card className="bg-white">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-bold text-app-text">
                    <Filter className="h-4 w-4 text-primary" />
                    Kategori Pengumuman
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <span key={category} className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
                        {category}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/10 bg-primary/5">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                    <BookOpenCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-app-text">Baca pengumuman sampai selesai</h2>
                    <p className="mt-1 text-sm leading-6 text-app-muted">
                      Setiap detail berisi poin penting, isi lengkap, dan kontak yang bisa dihubungi agar warga mudah memahami informasi.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-app-text">Semua Pengumuman</h2>
                <p className="mt-1 text-sm text-app-muted">Informasi resmi yang sudah dipublikasikan Pemerintah Desa Cihaur.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {published.map((item) => (
                  <AnnouncementPublicCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <AnnouncementEmptyState />
        )}
      </section>
    </main>
  );
}
