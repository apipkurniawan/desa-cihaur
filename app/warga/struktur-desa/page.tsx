import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";
import { pengaturanDesa } from "@/lib/data/dummy";

const struktur = [
  ["Kepala Desa", pengaturanDesa.namaKepalaDesa],
  ["Sekretaris Desa", "Ibu Rina Marlina"],
  ["Kaur Keuangan", "Bapak Dadan Ramdani"],
  ["Kasi Pelayanan", "Ibu Tuti Herawati"],
  ["Kepala Dusun Cihurip", "Bapak Asep Saepudin"],
  ["Kepala Dusun Babakan", "Bapak Ujang Sujana"],
];

export default function StrukturDesaPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Struktur Desa" description="Struktur perangkat desa dan penanggung jawab wilayah." />
      <div className="grid gap-4 md:grid-cols-2">
        {struktur.map(([jabatan, nama]) => (
          <Card key={jabatan}>
            <CardContent className="p-5">
              <p className="text-sm text-slate-500">{jabatan}</p>
              <p className="mt-1 text-lg font-semibold text-slate-950">{nama}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
