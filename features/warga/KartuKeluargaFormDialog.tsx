"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormInput } from "@/components/shared/FormInput";
import { kartuKeluargaSchema, type KartuKeluargaFormValues } from "@/validations/kartu-keluarga";

type KartuKeluargaFormDialogProps = {
  open: boolean;
  mode: "create" | "edit";
  defaultValues?: KartuKeluargaFormValues;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: KartuKeluargaFormValues) => void;
};

const emptyValues: KartuKeluargaFormValues = {
  nomorKk: "",
  kepalaKeluarga: "",
  alamat: "",
  rt: "",
  rw: "",
  dusun: "",
  jumlahAnggota: 1,
};

export function KartuKeluargaFormDialog({
  open,
  mode,
  defaultValues,
  onOpenChange,
  onSubmit,
}: KartuKeluargaFormDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<KartuKeluargaFormValues>({
    resolver: zodResolver(kartuKeluargaSchema),
    defaultValues: defaultValues ?? emptyValues,
  });

  useEffect(() => {
    reset(defaultValues ?? emptyValues);
  }, [defaultValues, open, reset]);

  function submit(values: KartuKeluargaFormValues) {
    onSubmit(values);
    reset(emptyValues);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[24px] sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{mode === "create" ? "Tambah Kartu Keluarga" : "Edit Kartu Keluarga"}</DialogTitle>
          <DialogDescription>
            Lengkapi data KK, kepala keluarga, alamat, wilayah, dan jumlah anggota keluarga.
          </DialogDescription>
        </DialogHeader>

        <form id="form-kartu-keluarga" onSubmit={handleSubmit(submit)} className="grid gap-4 md:grid-cols-2">
          <FormInput
            label="Nomor KK"
            inputMode="numeric"
            maxLength={16}
            placeholder="16 digit nomor KK"
            {...register("nomorKk")}
            error={errors.nomorKk?.message}
          />
          <FormInput
            label="Kepala Keluarga"
            placeholder="Nama kepala keluarga"
            {...register("kepalaKeluarga")}
            error={errors.kepalaKeluarga?.message}
          />
          <div className="md:col-span-2">
            <FormInput
              label="Alamat"
              placeholder="Nama kampung, jalan, atau keterangan alamat"
              {...register("alamat")}
              error={errors.alamat?.message}
            />
          </div>
          <FormInput label="Dusun" placeholder="Contoh: Dusun Cihurip" {...register("dusun")} error={errors.dusun?.message} />
          <FormInput
            label="Jumlah Anggota"
            type="number"
            min={1}
            placeholder="Contoh: 4"
            {...register("jumlahAnggota", { valueAsNumber: true })}
            error={errors.jumlahAnggota?.message}
          />
          <FormInput label="RT" inputMode="numeric" placeholder="001" {...register("rt")} error={errors.rt?.message} />
          <FormInput label="RW" inputMode="numeric" placeholder="002" {...register("rw")} error={errors.rw?.message} />
        </form>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Batal
          </Button>
          <Button type="submit" form="form-kartu-keluarga" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            {mode === "create" ? "Simpan KK" : "Simpan Perubahan"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
