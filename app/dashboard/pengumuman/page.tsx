import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { PengumumanTable } from "@/features/dashboard/SimpleTables";
import { pengumuman } from "@/lib/data/dummy";

export default function DashboardPengumumanPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Pengumuman Desa"
        description="Kelola pengumuman draft dan publish yang dapat dilihat warga."
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            Buat Pengumuman
          </Button>
        }
      />
      <PengumumanTable data={pengumuman} />
    </div>
  );
}
