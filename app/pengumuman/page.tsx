import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";
import { formatDate } from "@/lib/utils";
import { pengumuman } from "@/lib/data/dummy";

export default function PengumumanPublicPage() {
  const published = pengumuman.filter((item) => item.status === "published");
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href="/">Kembali</Link>
        </Button>
      </div>
      <PageHeader title="Pengumuman Desa" description="Informasi resmi dan terbaru untuk warga desa." />
      <div className="mt-6 grid gap-4">
        {published.length ? (
          published.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-app-muted">
                  <span className="font-medium text-primary">{item.kategori}</span>
                  <span>{formatDate(item.tanggalPublish)}</span>
                </div>
                <h2 className="mt-2 text-lg font-semibold text-app-text">{item.judul}</h2>
                <p className="mt-2 leading-7 text-app-text/80">{item.isi}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-8 text-center text-app-muted">Belum ada pengumuman yang dipublikasikan.</CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
