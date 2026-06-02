import type { ReactNode } from "react";
import { AppSidebar } from "@/components/shared/AppSidebar";
import { currentProfile } from "@/lib/data/dummy";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-app-background lg:grid lg:grid-cols-[18rem_1fr]">
      <div className="hidden lg:block">
        <AppSidebar />
      </div>
      <div className="min-w-0">
        <header className="sticky top-0 z-30 border-b border-app-border bg-white/90 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-sm text-app-muted">Selamat datang,</p>
              <p className="font-semibold text-app-text">{currentProfile.fullName}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              AD
            </div>
          </div>
        </header>
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}
