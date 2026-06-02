import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { WargaTable } from "@/features/warga/WargaTable";
import { WargaForm } from "@/features/warga/WargaForm";
import { warga } from "@/lib/data/dummy";

export default function DashboardWargaPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Manajemen Data Warga"
        description="Kelola NIK, KK, biodata, alamat, RT/RW, dusun, status warga, dan dokumen pendukung."
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            Tambah Warga
          </Button>
        }
      />
      <WargaForm />
      <WargaTable data={warga} />
    </div>
  );
}
