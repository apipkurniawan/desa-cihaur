import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { KegiatanTable } from "@/features/dashboard/SimpleTables";
import { kegiatan } from "@/lib/data/dummy";

export default function DashboardKegiatanPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Kegiatan Desa"
        description="Kelola jadwal kegiatan, lokasi, deskripsi, dan dokumentasi foto."
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            Tambah Kegiatan
          </Button>
        }
      />
      <KegiatanTable data={kegiatan} />
    </div>
  );
}
