import {
  Bell,
  CalendarDays,
  FileBarChart,
  FileText,
  HandHeart,
  Home,
  LogOut,
  Megaphone,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { logoutAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { currentProfile, pengaturanDesa } from "@/lib/data/dummy";
import { roleLabels } from "@/lib/roles";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/warga", label: "Data Warga", icon: Users },
  { href: "/dashboard/kartu-keluarga", label: "Kartu Keluarga", icon: Users },
  { href: "/dashboard/surat", label: "Pengajuan Surat", icon: FileText },
  { href: "/dashboard/pengumuman", label: "Pengumuman", icon: Megaphone },
  { href: "/dashboard/kegiatan", label: "Kegiatan", icon: CalendarDays },
  { href: "/dashboard/bantuan-sosial", label: "Bantuan Sosial", icon: HandHeart },
  { href: "/dashboard/laporan", label: "Laporan", icon: FileBarChart },
  { href: "/dashboard/pengaturan", label: "Pengaturan", icon: Settings },
];

export function AppSidebar() {
  return (
    <aside className="flex min-h-screen w-full flex-col border-r border-slate-200 bg-white lg:w-72">
      <div className="border-b border-slate-200 p-5">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Home className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-slate-950">Sistem Informasi Desa</p>
            <p className="text-xs text-slate-500">{pengaturanDesa.namaDesa}</p>
          </div>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-slate-200 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-lg bg-slate-50 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
            AD
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-slate-950">{currentProfile.fullName}</p>
            <p className="text-xs text-slate-500">{roleLabels[currentProfile.role]}</p>
          </div>
          <Bell className="h-4 w-4 text-slate-400" />
        </div>
        <form action={logoutAction}>
          <Button variant="ghost" className="w-full justify-start text-slate-600">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </form>
      </div>
    </aside>
  );
}
