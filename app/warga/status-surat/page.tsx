import { PageHeader } from "@/components/shared/PageHeader";
import { SuratTable } from "@/features/surat/SuratTable";
import { pengajuanSurat } from "@/lib/data/dummy";

export default function StatusSuratWargaPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Status Pengajuan Surat" description="Pantau status surat yang sudah diajukan." />
      <SuratTable data={pengajuanSurat} />
    </div>
  );
}
