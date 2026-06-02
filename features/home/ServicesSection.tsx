import { villageServices } from "@/lib/data/home";
import { MotionSection } from "./Motion";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <MotionSection id="layanan" className="bg-accent/55 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Layanan Desa"
          title="Layanan publik yang mudah diakses"
          description="Pilih layanan administrasi desa sesuai kebutuhan. Warga dapat mengajukan surat dan memantau prosesnya secara digital."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {villageServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
