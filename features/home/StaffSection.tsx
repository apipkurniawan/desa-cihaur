import { villageStaff } from "@/lib/data/home";
import { MotionSection } from "./Motion";
import { SectionHeading } from "./SectionHeading";
import { StaffCard } from "./StaffCard";

export function StaffSection() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Aparatur Desa"
        title="Perangkat Desa Cihaur"
        description="Aparatur desa yang menjalankan pelayanan pemerintahan, pembangunan, dan pemberdayaan masyarakat."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {villageStaff.map((staff) => (
          <StaffCard key={staff.name} staff={staff} />
        ))}
      </div>
    </MotionSection>
  );
}
