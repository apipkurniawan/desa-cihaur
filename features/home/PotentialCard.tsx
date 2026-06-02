import Image from "next/image";
import type { VillagePotential } from "@/types/home";
import { MotionCard } from "./Motion";

export function PotentialCard({ potential }: { potential: VillagePotential }) {
  return (
    <MotionCard>
      <article className="group h-full overflow-hidden rounded-3xl border border-white/40 bg-white shadow-sm">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={potential.image}
            alt={`Potensi desa ${potential.title}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-app-text/70 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{potential.title}</h3>
        </div>
        <p className="p-5 text-sm leading-6 text-app-muted">{potential.description}</p>
      </article>
    </MotionCard>
  );
}
