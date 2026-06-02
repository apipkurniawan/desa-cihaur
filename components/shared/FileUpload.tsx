import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FileUpload({ label, name }: { label: string; name: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-primary/20 bg-primary/5 px-4 py-6 text-center text-sm text-app-text/80 hover:bg-primary/5">
        <UploadCloud className="mb-2 h-6 w-6 text-primary" />
        <span className="font-medium text-primary">Pilih file pendukung</span>
        <span className="text-xs text-app-muted">PDF, JPG, atau PNG</span>
        <Input id={name} name={name} type="file" className="sr-only" />
      </label>
    </div>
  );
}
