import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";

const anggaran = [
  { kategori: "Pembangunan Infrastruktur", realisasi: 185000000, persentase: 42 },
  { kategori: "Pemberdayaan Masyarakat", realisasi: 95000000, persentase: 22 },
  { kategori: "Bantuan Sosial", realisasi: 75000000, persentase: 17 },
  { kategori: "Operasional Desa", realisasi: 82000000, persentase: 19 },
];

export default function TransparansiPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Transparansi Anggaran Desa" description="Ringkasan realisasi anggaran desa untuk publik." />
      <div className="grid gap-4 md:grid-cols-2">
        {anggaran.map((item) => (
          <Card key={item.kategori}>
            <CardHeader>
              <CardTitle>{item.kategori}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-app-text">
                {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(item.realisasi)}
              </p>
              <div className="mt-4 h-2 rounded-full bg-primary/10">
                <div className="h-2 rounded-full bg-primary" style={{ width: `${item.persentase}%` }} />
              </div>
              <p className="mt-2 text-sm text-app-muted">{item.persentase}% dari total realisasi contoh.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
