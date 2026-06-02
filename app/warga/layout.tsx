import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WargaLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-app-background">
      <header className="border-b border-app-border bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/warga" className="font-semibold text-app-text">
            Portal Warga
          </Link>
          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="/warga/profil">Profil</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/warga/pengajuan-surat">Ajukan Surat</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/warga/status-surat">Status</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
