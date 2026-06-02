import { latestNews } from "@/lib/data/home";
import { MotionSection } from "./Motion";
import { NewsCard } from "./NewsCard";
import { SectionHeading } from "./SectionHeading";

export function NewsSection() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Berita Desa"
        title="Artikel dan kabar terbaru"
        description="Informasi kegiatan, potensi, dan perkembangan Desa Cihaur untuk masyarakat luas."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {latestNews.map((news) => (
          <NewsCard key={news.title} news={news} />
        ))}
      </div>
    </MotionSection>
  );
}
