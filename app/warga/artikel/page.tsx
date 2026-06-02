import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";

const articles = [
  {
    title: "Pola Asuh Positif untuk Anak Usia Dini",
    category: "Parenting",
    excerpt: "Membangun komunikasi hangat, rutinitas sehat, dan disiplin tanpa kekerasan di rumah.",
  },
  {
    title: "Mencatat Keuangan Rumah Tangga Secara Sederhana",
    category: "Keuangan",
    excerpt: "Pisahkan kebutuhan pokok, tabungan, cicilan, dan dana darurat agar pengeluaran lebih terkendali.",
  },
  {
    title: "Menjaga Kebersihan Lingkungan Saat Musim Hujan",
    category: "Kesehatan",
    excerpt: "Bersihkan selokan, tutup penampungan air, dan laporkan genangan yang berisiko menjadi sarang nyamuk.",
  },
];

export default function ArtikelPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Artikel Edukasi" description="Artikel singkat untuk parenting, keuangan keluarga, kesehatan, dan literasi warga." />
      <div className="grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.title}>
            <CardContent className="p-5">
              <p className="text-xs font-medium uppercase text-emerald-700">{article.category}</p>
              <h2 className="mt-2 font-semibold text-slate-950">{article.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{article.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
