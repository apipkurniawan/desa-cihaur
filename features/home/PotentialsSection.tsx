import { villagePotentials } from "@/lib/data/home";
import { MotionSection } from "./Motion";
import { PotentialCard } from "./PotentialCard";
import { SectionHeading } from "./SectionHeading";

export function PotentialsSection() {
  return (
    <MotionSection className="bg-primary py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="[&_*]:text-white">
          <SectionHeading
            eyebrow="Potensi Desa"
            title="Sumber daya lokal yang terus dikembangkan"
            description="Pertanian, peternakan, UMKM, dan wisata alam menjadi potensi utama untuk memperkuat ekonomi warga."
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {villagePotentials.map((potential) => (
            <PotentialCard key={potential.title} potential={potential} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
