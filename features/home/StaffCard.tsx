import Image from "next/image";
import type { VillageStaff } from "@/types/home";
import { MotionCard } from "./Motion";

export function StaffCard({ staff }: { staff: VillageStaff }) {
  return (
    <MotionCard>
      <article className="overflow-hidden rounded-3xl border border-app-border bg-white shadow-sm">
        <div className="relative h-64 w-full">
          <Image
            src={staff.image}
            alt={`Foto ${staff.name}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-5 text-center">
          <h3 className="font-bold text-app-text">{staff.name}</h3>
          <p className="mt-1 text-sm text-primary">{staff.role}</p>
        </div>
      </article>
    </MotionCard>
  );
}
