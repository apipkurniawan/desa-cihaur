import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { villageContact } from "@/lib/data/home";
import { MotionSection } from "./Motion";
import { SectionHeading } from "./SectionHeading";

const mapsQuery = encodeURIComponent(villageContact.address);

export function ContactSection() {
  return (
    <MotionSection id="kontak" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Peta dan Kontak"
          title="Hubungi Pemerintah Desa Cihaur"
          description="Datang ke kantor desa atau hubungi kanal resmi untuk mendapatkan informasi dan bantuan layanan."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-[360px] overflow-hidden rounded-3xl border border-app-border bg-accent shadow-sm">
            <iframe
              title="Peta Balai Desa Cihaur"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <Card className="bg-app-background">
            <CardContent className="space-y-5 p-6">
              <ContactItem icon={MapPin} label="Alamat Kantor Desa" value={villageContact.address} />
              <ContactItem icon={Phone} label="Nomor Telepon" value={villageContact.phone} />
              <ContactItem icon={Mail} label="Email" value={villageContact.email} />
              <ContactItem icon={MessageCircle} label="WhatsApp" value={villageContact.whatsapp} />
              <Button asChild className="w-full">
                <Link href={`https://wa.me/${villageContact.whatsapp.replace(/\D/g, "")}`}>Hubungi Kami</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-app-text">{label}</p>
        <p className="mt-1 text-sm leading-6 text-app-muted">{value}</p>
      </div>
    </div>
  );
}
