import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  aktif: "border-primary/20 bg-primary/5 text-primary",
  pindah: "border-accent/30 bg-accent/10 text-accent",
  meninggal: "border-app-border bg-primary/10 text-app-text/90",
  diajukan: "border-secondary/25 bg-secondary/10 text-secondary",
  diproses: "border-accent/30 bg-accent/10 text-accent",
  selesai: "border-primary/20 bg-primary/5 text-primary",
  ditolak: "border-accent/30 bg-accent/10 text-accent",
  published: "border-primary/20 bg-primary/5 text-primary",
  draft: "border-app-border bg-primary/10 text-app-text/90",
  diterima: "border-primary/20 bg-primary/5 text-primary",
  terdaftar: "border-secondary/25 bg-secondary/10 text-secondary",
};

export function StatusBadge({ status }: { status: string }) {
  return <Badge className={cn("capitalize", styles[status] ?? "border-app-border bg-app-background text-app-text/90")}>{status.replaceAll("_", " ")}</Badge>;
}
