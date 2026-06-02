"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FormInput } from "@/components/shared/FormInput";
import { wargaSchema, type WargaFormValues } from "@/validations/warga";

export function WargaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WargaFormValues>({
    resolver: zodResolver(wargaSchema),
    defaultValues: {
      status: "aktif",
      jenisKelamin: "Laki-laki",
    },
  });

  function onSubmit() {
    toast.success("Data warga tervalidasi. Hubungkan Supabase untuk menyimpan permanen.");
    reset();
  }

  return (
    <Card>
      <CardContent className="p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2">
          <FormInput label="NIK" {...register("nik")} error={errors.nik?.message} />
          <FormInput label="Nomor KK" {...register("nomorKk")} error={errors.nomorKk?.message} />
          <FormInput label="Nama Lengkap" {...register("namaLengkap")} error={errors.namaLengkap?.message} />
          <FormInput label="Tempat Lahir" {...register("tempatLahir")} error={errors.tempatLahir?.message} />
          <FormInput label="Tanggal Lahir" type="date" {...register("tanggalLahir")} error={errors.tanggalLahir?.message} />
          <FormInput label="Agama" {...register("agama")} error={errors.agama?.message} />
          <FormInput label="Pekerjaan" {...register("pekerjaan")} error={errors.pekerjaan?.message} />
          <FormInput label="Pendidikan" {...register("pendidikan")} error={errors.pendidikan?.message} />
          <FormInput label="Status Perkawinan" {...register("statusPerkawinan")} error={errors.statusPerkawinan?.message} />
          <FormInput label="Dusun" {...register("dusun")} error={errors.dusun?.message} />
          <FormInput label="RT" {...register("rt")} error={errors.rt?.message} />
          <FormInput label="RW" {...register("rw")} error={errors.rw?.message} />
          <div className="md:col-span-2">
            <FormInput label="Alamat" {...register("alamat")} error={errors.alamat?.message} />
          </div>
          <div className="md:col-span-2">
            <Button type="submit">Simpan Data Warga</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
