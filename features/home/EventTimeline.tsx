import { MapPin } from "lucide-react";
import { upcomingEvents } from "@/lib/data/home";
import { MotionSection } from "./Motion";
import { SectionHeading } from "./SectionHeading";

export function EventTimeline() {
  return (
    <MotionSection className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Agenda Kegiatan"
          title="Kegiatan mendatang Desa Cihaur"
          description="Agenda desa yang dapat diikuti warga untuk pelayanan, musyawarah, dan pemberdayaan masyarakat."
        />
        <div className="relative space-y-5 before:absolute before:left-4 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-secondary/30 sm:before:left-1/2">
          {upcomingEvents.map((event, index) => (
            <div key={event.title} className="relative grid gap-4 sm:grid-cols-2 sm:gap-8">
              <div className={index % 2 === 0 ? "sm:text-right" : "sm:col-start-2"}>
                <div className="rounded-2xl border border-app-border bg-app-background p-5 shadow-sm">
                  <p className="text-sm font-bold text-primary">{event.date}</p>
                  <h3 className="mt-2 text-lg font-bold text-app-text">{event.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-app-muted">{event.description}</p>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-app-text">
                    <MapPin className="h-4 w-4 text-secondary" />
                    {event.location}
                  </p>
                </div>
              </div>
              <span className="absolute left-4 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-accent sm:left-1/2" />
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
