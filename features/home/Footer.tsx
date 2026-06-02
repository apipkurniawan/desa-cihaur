import { Building2, Globe2, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { villageContact } from "@/lib/data/home";

const quickMenus = [
  ["Profil Desa", "#profil"],
  ["Layanan", "#layanan"],
  ["Pengumuman", "#pengumuman"],
  ["Kontak", "#kontak"],
];

const services = [
  ["Ajukan Surat", "/warga/pengajuan-surat"],
  ["Status Surat", "/warga/status-surat"],
  ["Transparansi", "/warga/transparansi"],
  ["Portal Warga", "/warga"],
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold">Desa Cihaur</p>
              <p className="text-sm text-white/70">Kabupaten Kuningan, Jawa Barat</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
            Website resmi Desa Cihaur sebagai pusat informasi, layanan masyarakat, kegiatan desa, dan transparansi publik.
          </p>
          <div className="mt-5 flex gap-3">
            {[Globe2, MessageCircle, Send].map((Icon, index) => (
              <a key={index} href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Media sosial Desa Cihaur">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterColumn title="Menu Cepat" items={quickMenus} />
        <FooterColumn title="Layanan" items={services} />
        <div>
          <h3 className="font-bold">Kontak</h3>
          <div className="mt-4 space-y-2 text-sm leading-6 text-white/75">
            <p>{villageContact.address}</p>
            <p>{villageContact.phone}</p>
            <p>{villageContact.email}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/65">
        © 2026 Pemerintah Desa Cihaur. Semua hak dilindungi.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
