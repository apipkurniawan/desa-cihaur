"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/shared/FileUpload";
import { jenisSurat } from "@/lib/data/dummy";
import { pengajuanSuratSchema, type PengajuanSuratFormValues } from "@/validations/surat";

export function PengajuanSuratForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PengajuanSuratFormValues>({
    resolver: zodResolver(pengajuanSuratSchema),
  });

  function onSubmit() {
    toast.success("Pengajuan surat tervalidasi. Hubungkan Supabase Storage untuk unggah dokumen.");
    reset();
  }

  return (
    <Card>
      <CardContent className="p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="jenisSuratId">Jenis Surat</Label>
            <select
              id="jenisSuratId"
              className="flex h-10 w-full rounded-md border border-app-border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              {...register("jenisSuratId")}
            >
              <option value="">Pilih jenis surat</option>
              {jenisSurat.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nama}
                </option>
              ))}
            </select>
            {errors.jenisSuratId ? <p className="text-xs text-accent">{errors.jenisSuratId.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="keperluan">Keperluan</Label>
            <Textarea id="keperluan" {...register("keperluan")} />
            {errors.keperluan ? <p className="text-xs text-accent">{errors.keperluan.message}</p> : null}
          </div>
          <FileUpload label="Dokumen Pendukung" name="dokumenPendukung" />
          <Button type="submit">Kirim Pengajuan</Button>
        </form>
      </CardContent>
    </Card>
  );
}
