import { Inbox } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AnnouncementEmptyState() {
  return (
    <Card className="border-dashed bg-white">
      <CardContent className="flex flex-col items-center justify-center p-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
          <Inbox className="h-7 w-7" />
        </div>
        <h2 className="text-lg font-bold text-app-text">Belum ada pengumuman</h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-app-muted">
          Pengumuman resmi desa akan tampil di halaman ini setelah dipublikasikan.
        </p>
      </CardContent>
    </Card>
  );
}
