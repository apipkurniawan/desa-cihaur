import { FileText, HandHeart, Home, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "@/components/shared/DashboardCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { dashboardStats, recentActivities, wargaByDusun } from "@/lib/data/dummy";
import { WargaChart } from "@/features/dashboard/WargaChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard Admin" description="Ringkasan administrasi desa, layanan surat, dan aktivitas terbaru." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <DashboardCard title="Total Warga" value={dashboardStats.totalWarga} description="Warga terdaftar" icon={Users} />
        <DashboardCard title="Total KK" value={dashboardStats.totalKk} description="Kartu keluarga" icon={Home} />
        <DashboardCard title="Pengajuan Surat" value={dashboardStats.totalPengajuanSurat} description="Total pengajuan" icon={FileText} />
        <DashboardCard title="Menunggu Proses" value={dashboardStats.pengajuanMenunggu} description="Perlu ditindaklanjuti" icon={FileText} />
        <DashboardCard title="Bantuan Sosial" value={dashboardStats.totalBantuanSosial} description="Program aktif" icon={HandHeart} />
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Jumlah Warga Berdasarkan Dusun</CardTitle>
          </CardHeader>
          <CardContent>
            <WargaChart data={wargaByDusun} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recentActivities.map((activity) => (
                <li key={activity} className="rounded-md bg-slate-50 p-3 text-sm text-slate-600">
                  {activity}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
