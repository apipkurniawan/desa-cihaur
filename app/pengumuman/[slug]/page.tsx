import { ArrowLeft, CalendarDays, Clock, ContactRound, Megaphone, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnnouncementPublicCard } from "@/features/announcements/AnnouncementPublicCard";
import { pengumuman } from "@/lib/data/dummy";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getAnnouncement(slug: string) {
  return pengumuman.find((item) => item.status === "published" && (item.slug === slug || item.id === slug));
}

export async function generateStaticParams() {
  return pengumuman
    .filter((item) => item.status === "published")
    .map((item) => ({ slug: item.slug ?? item.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getAnnouncement(slug);

  if (!item) {
    return {
      title: "Pengumuman Tidak Ditemukan - Desa Cihaur",
    };
  }

  return {
    title: `${item.judul} - Desa Cihaur`,
    description: item.ringkasan ?? item.isi,
    openGraph: {
      title: `${item.judul} - Desa Cihaur`,
      description: item.ringkasan ?? item.isi,
      images: item.imageUrl ? [{ url: item.imageUrl }] : undefined,
      type: "article",
    },
  };
}

export default async function PengumumanDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getAnnouncement(slug);

  if (!item) notFound();

  const related = pengumuman
    .filter((announcement) => announcement.status === "published" && announcement.id !== item.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-app-background">
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <Image
            src={item.imageUrl ?? "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"}
            alt={item.judul}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/78 to-primary/40" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Button asChild variant="outline" className="mb-8 border-white/25 bg-white/10 text-white hover:bg-white/20">
            <Link href="/pengumuman">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Pengumuman
            </Link>
          </Button>
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/80">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-primary">
                {item.kategori}
              </span>
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {formatDate(item.tanggalPublish)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {item.estimasiBaca ?? "2 menit"}
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{item.judul}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">{item.ringkasan ?? item.isi}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <article className="space-y-6">
          {item.poinPenting?.length ? (
            <Card className="border-primary/10 bg-primary/5">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-bold text-app-text">Poin Penting</h2>
                </div>
                <ul className="space-y-3">
                  {item.poinPenting.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-app-text/82">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}

          <Card className="bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="prose prose-slate max-w-none">
                {(item.detail?.length ? item.detail : [item.isi]).map((paragraph) => (
                  <p key={paragraph} className="mb-5 text-base leading-8 text-app-text/82">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <Card className="bg-white">
            <CardContent className="p-5">
              <h2 className="font-bold text-app-text">Informasi Pengumuman</h2>
              <div className="mt-4 space-y-4 text-sm">
                <InfoRow label="Kategori" value={item.kategori} />
                <InfoRow label="Tanggal" value={formatDate(item.tanggalPublish)} />
                <InfoRow label="Penulis" value={item.penulis ?? "Pemerintah Desa Cihaur"} />
                <InfoRow label="Kontak" value={item.kontak ?? "Kantor Desa Cihaur"} />
              </div>
              <Button className="mt-5 w-full rounded-xl" variant="secondary">
                <Share2 className="h-4 w-4" />
                Bagikan
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-accent/70">
            <CardContent className="p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                <ContactRound className="h-5 w-5" />
              </div>
              <h2 className="font-bold text-app-text">Butuh bantuan?</h2>
              <p className="mt-2 text-sm leading-6 text-app-muted">
                Hubungi perangkat desa atau RT/RW setempat jika membutuhkan penjelasan lebih lanjut.
              </p>
            </CardContent>
          </Card>
        </aside>
      </section>

      {related.length ? (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-app-text">Pengumuman Lainnya</h2>
            <p className="mt-1 text-sm text-app-muted">Informasi lain yang mungkin perlu dibaca warga.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((announcement) => (
              <AnnouncementPublicCard key={announcement.id} item={announcement} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-app-muted">{label}</p>
      <p className="mt-1 font-medium leading-6 text-app-text">{value}</p>
    </div>
  );
}
