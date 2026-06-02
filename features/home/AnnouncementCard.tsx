import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { VillageAnnouncement } from "@/types/home";
import { MotionCard } from "./Motion";

export function AnnouncementCard({ announcement }: { announcement: VillageAnnouncement }) {
  return (
    <MotionCard>
      <Card className="h-full bg-white">
        <CardContent className="p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-primary">
              {announcement.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-app-muted">
              <CalendarDays className="h-3.5 w-3.5" />
              {announcement.date}
            </span>
          </div>
          <h3 className="text-lg font-bold leading-7 text-app-text">{announcement.title}</h3>
          <p className="mt-3 text-sm leading-6 text-app-muted">{announcement.excerpt}</p>
        </CardContent>
      </Card>
    </MotionCard>
  );
}
