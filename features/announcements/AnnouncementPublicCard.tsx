import { ArrowUpRight, CalendarDays, Clock, Megaphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import type { Pengumuman } from "@/types";

const priorityStyles: Record<string, string> = {
  mendesak: "bg-[#B42318] text-white",
  penting: "bg-accent text-primary",
  normal: "bg-white/85 text-primary",
};

export function AnnouncementPublicCard({
  item,
  featured = false,
}: {
  item: Pengumuman;
  featured?: boolean;
}) {
  return (
    <article className="group h-full overflow-hidden rounded-[28px] border border-app-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(47,107,63,0.16)]">
      <div className={featured ? "grid h-full lg:grid-cols-[1.05fr_0.95fr]" : "flex h-full flex-col"}>
        <Link
          href={`/pengumuman/${item.slug ?? item.id}`}
          className={featured ? "relative min-h-[320px] overflow-hidden lg:min-h-full" : "relative h-56 overflow-hidden"}
          aria-label={`Baca detail ${item.judul}`}
        >
          <Image
            src={item.imageUrl ?? "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"}
            alt={item.judul}
            fill
            sizes={featured ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-app-text/65 via-app-text/18 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
            {item.kategori}
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-app-muted">
            <span className={`rounded-full px-3 py-1 font-bold capitalize ${priorityStyles[item.prioritas ?? "normal"]}`}>
              {item.prioritas ?? "normal"}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatDate(item.tanggalPublish)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {item.estimasiBaca ?? "2 menit"}
            </span>
          </div>
          <Link href={`/pengumuman/${item.slug ?? item.id}`}>
            <h2 className={featured ? "text-2xl font-bold leading-tight text-app-text sm:text-3xl" : "text-lg font-bold leading-7 text-app-text"}>
              {item.judul}
            </h2>
          </Link>
          <p className="mt-3 flex-1 text-sm leading-7 text-app-muted">{item.ringkasan ?? item.isi}</p>
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-app-border pt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-app-muted">
              <Megaphone className="h-4 w-4 text-secondary" />
              {item.penulis ?? "Pemerintah Desa Cihaur"}
            </div>
            <Button asChild variant="secondary" className="rounded-full">
              <Link href={`/pengumuman/${item.slug ?? item.id}`}>
                Baca
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
