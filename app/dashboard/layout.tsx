import type { ReactNode } from "react";
import { AppSidebar } from "@/components/shared/AppSidebar";
import { currentProfile } from "@/lib/data/dummy";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-[18rem_1fr]">
      <div className="hidden lg:block">
        <AppSidebar />
      </div>
      <div className="min-w-0">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-sm text-slate-500">Selamat datang,</p>
              <p className="font-semibold text-slate-950">{currentProfile.fullName}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
              AD
            </div>
          </div>
        </header>
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}
