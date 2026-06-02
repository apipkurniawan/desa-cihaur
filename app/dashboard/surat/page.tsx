import { PageHeader } from "@/components/shared/PageHeader";
import { SuratTable } from "@/features/surat/SuratTable";
import { pengajuanSurat } from "@/lib/data/dummy";

export default function DashboardSuratPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Pengajuan Surat Online"
        description="Proses pengajuan, ubah status, beri catatan staff, dan sediakan unduhan PDF untuk warga."
      />
      <SuratTable data={pengajuanSurat} />
    </div>
  );
}
