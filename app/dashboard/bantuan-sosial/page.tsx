import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { BantuanTable } from "@/features/dashboard/SimpleTables";
import { bantuanSosial, penerimaBantuan } from "@/lib/data/dummy";

export default function DashboardBantuanSosialPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Bantuan Sosial"
        description="Kelola program bantuan, penerima, status penerimaan, dan riwayat bantuan per warga."
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            Tambah Program
          </Button>
        }
      />
      <BantuanTable data={bantuanSosial} />
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Penerima Bantuan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {penerimaBantuan.map((item) => (
            <div key={item.id} className="flex flex-col gap-2 rounded-lg border border-app-border p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-app-text">{item.wargaNama}</p>
                <p className="text-sm text-app-muted">{item.programNama}</p>
              </div>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
