import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FileUpload({ label, name }: { label: string; name: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-emerald-200 bg-emerald-50/50 px-4 py-6 text-center text-sm text-slate-600 hover:bg-emerald-50">
        <UploadCloud className="mb-2 h-6 w-6 text-emerald-700" />
        <span className="font-medium text-emerald-800">Pilih file pendukung</span>
        <span className="text-xs text-slate-500">PDF, JPG, atau PNG</span>
        <Input id={name} name={name} type="file" className="sr-only" />
      </label>
    </div>
  );
}
