import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { KartuKeluargaTable } from "@/features/warga/KartuKeluargaTable";
import { kartuKeluarga } from "@/lib/data/dummy";

export default function DashboardKartuKeluargaPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Manajemen Kartu Keluarga"
        description="Kelola nomor KK, kepala keluarga, alamat, RT/RW, dusun, dan anggota keluarga."
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            Tambah KK
          </Button>
        }
      />
      <KartuKeluargaTable data={kartuKeluarga} />
    </div>
  );
}
