import { PageHeader } from "@/components/shared/PageHeader";
import { PengajuanSuratForm } from "@/features/surat/PengajuanSuratForm";

export default function PengajuanSuratWargaPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pengajuan Surat" description="Ajukan surat online dan unggah dokumen pendukung bila diperlukan." />
      <PengajuanSuratForm />
    </div>
  );
}
