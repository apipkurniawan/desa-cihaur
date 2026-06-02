import { villagePotentials } from "@/lib/data/home";
import { MotionSection } from "./Motion";
import { PotentialCard } from "./PotentialCard";
import { SectionHeading } from "./SectionHeading";

export function PotentialsSection() {
  return (
    <MotionSection className="relative overflow-hidden bg-primary py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(245,238,220,0.16),transparent_26%),radial-gradient(circle_at_85%_10%,rgba(107,163,104,0.28),transparent_24%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="[&_*]:text-white">
          <SectionHeading
            eyebrow="Potensi Desa"
            title="Sumber daya lokal yang terus dikembangkan"
            description="Pertanian, peternakan, UMKM, dan wisata alam menjadi potensi utama untuk memperkuat ekonomi warga."
          />
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {villagePotentials.map((potential, index) => (
            <PotentialCard key={potential.title} potential={potential} index={index} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
