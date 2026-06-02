import { Card, CardContent } from "@/components/ui/card";
import { villageStatistics } from "@/lib/data/home";
import { HomeIcon } from "./HomeIcons";
import { MotionCard, MotionSection } from "./Motion";
import { SectionHeading } from "./SectionHeading";

export function StatisticsSection() {
  return (
    <MotionSection id="statistik" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Statistik Desa"
        title="Data utama Desa Cihaur"
        description="Ringkasan data kependudukan, wilayah, dan ekonomi lokal sebagai dasar pelayanan masyarakat."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {villageStatistics.map((item) => (
          <MotionCard key={item.label}>
            <Card className="h-full border-app-border bg-white/85">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="rounded-2xl bg-accent p-3 text-primary">
                  <HomeIcon name={item.icon} className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-app-muted">{item.label}</p>
                  <p className="mt-1 text-2xl font-bold text-app-text">{item.value}</p>
                  <p className="mt-1 text-sm text-app-muted">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </MotionCard>
        ))}
      </div>
    </MotionSection>
  );
}
