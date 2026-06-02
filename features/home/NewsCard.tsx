import { CalendarDays } from "lucide-react";
import Image from "next/image";
import type { VillageNews } from "@/types/home";
import { MotionCard } from "./Motion";

export function NewsCard({ news }: { news: VillageNews }) {
  return (
    <MotionCard>
      <article className="h-full overflow-hidden rounded-3xl border border-app-border bg-white shadow-sm">
        <div className="relative h-52 w-full">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <p className="inline-flex items-center gap-1 text-xs font-medium text-app-muted">
            <CalendarDays className="h-3.5 w-3.5" />
            {news.date}
          </p>
          <h3 className="mt-3 text-lg font-bold leading-7 text-app-text">{news.title}</h3>
          <p className="mt-3 text-sm leading-6 text-app-muted">{news.excerpt}</p>
        </div>
      </article>
    </MotionCard>
  );
}
