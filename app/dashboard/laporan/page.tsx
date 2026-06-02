import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PDFDownloadButton } from "@/components/shared/PDFDownloadButton";
import { PageHeader } from "@/components/shared/PageHeader";
import { warga } from "@/lib/data/dummy";

export default function DashboardLaporanPage() {
  const reportRows = warga.map((item) => ({
    NIK: item.nik,
    Nama: item.namaLengkap,
    Dusun: item.dusun,
    RT: item.rt,
    RW: item.rw,
    Status: item.status,
  }));

  return (
    <div className="space-y-6">
      <PageHeader title="Laporan" description="Filter laporan administrasi dan export CSV atau PDF." />
      <Card>
        <CardHeader>
          <CardTitle>Filter Laporan</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <Label>Tanggal Awal</Label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <Label>Tanggal Akhir</Label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <Label>Dusun</Label>
            <Input placeholder="Semua dusun" />
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Input placeholder="Semua status" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Export Laporan Data Warga</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4" />
            CSV
          </Button>
          <PDFDownloadButton title="Laporan Data Warga" rows={reportRows} />
        </CardContent>
      </Card>
    </div>
  );
}
