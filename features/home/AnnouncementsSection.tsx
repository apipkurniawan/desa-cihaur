import Link from "next/link";
import { Button } from "@/components/ui/button";
import { latestAnnouncements } from "@/lib/data/home";
import { AnnouncementCard } from "./AnnouncementCard";
import { MotionSection } from "./Motion";
import { SectionHeading } from "./SectionHeading";

export function AnnouncementsSection() {
  return (
    <MotionSection id="pengumuman" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Pengumuman"
          title="Informasi terbaru untuk warga"
          description="Ikuti pengumuman resmi terkait layanan, kesehatan, pembangunan, dan kegiatan desa."
        />
        <Button asChild variant="outline" className="mb-8 self-center sm:self-auto">
          <Link href="/pengumuman">Lihat Semua Pengumuman</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {latestAnnouncements.map((announcement) => (
          <AnnouncementCard key={announcement.title} announcement={announcement} />
        ))}
      </div>
    </MotionSection>
  );
}
