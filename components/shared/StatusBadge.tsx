import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  aktif: "border-emerald-200 bg-emerald-50 text-emerald-700",
  pindah: "border-amber-200 bg-amber-50 text-amber-700",
  meninggal: "border-slate-200 bg-slate-100 text-slate-700",
  diajukan: "border-blue-200 bg-blue-50 text-blue-700",
  diproses: "border-amber-200 bg-amber-50 text-amber-700",
  selesai: "border-emerald-200 bg-emerald-50 text-emerald-700",
  ditolak: "border-red-200 bg-red-50 text-red-700",
  published: "border-emerald-200 bg-emerald-50 text-emerald-700",
  draft: "border-slate-200 bg-slate-100 text-slate-700",
  diterima: "border-emerald-200 bg-emerald-50 text-emerald-700",
  terdaftar: "border-blue-200 bg-blue-50 text-blue-700",
};

export function StatusBadge({ status }: { status: string }) {
  return <Badge className={cn("capitalize", styles[status] ?? "border-slate-200 bg-slate-50 text-slate-700")}>{status.replaceAll("_", " ")}</Badge>;
}
