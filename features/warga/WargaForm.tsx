"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeCheck, Home, IdCard, Save, UserRound } from "lucide-react";
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
    <Card id="form-warga" className="scroll-mt-24 overflow-hidden rounded-[28px] border-[#DCCFB7] bg-white shadow-sm">
      <CardContent className="p-0">
        <div className="border-b border-[#EFE6D6] bg-[#FFFDF7] px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Input Data</p>
              <h2 className="mt-2 text-xl font-bold text-app-text">Tambah atau validasi data warga</h2>
              <p className="mt-1 text-sm leading-6 text-app-muted">
                Isi data secara bertahap. NIK dan nomor KK harus 16 digit agar validasi administrasi lebih konsisten.
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary">
              <BadgeCheck className="h-4 w-4" />
              Validasi aktif
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-5 sm:p-6">
          <FormSection
            icon={IdCard}
            title="Identitas Administrasi"
            description="Data utama untuk pencarian, verifikasi KK, dan kebutuhan surat menyurat."
          >
            <FormInput label="NIK" inputMode="numeric" maxLength={16} placeholder="16 digit NIK" {...register("nik")} error={errors.nik?.message} />
            <FormInput label="Nomor KK" inputMode="numeric" maxLength={16} placeholder="16 digit nomor KK" {...register("nomorKk")} error={errors.nomorKk?.message} />
            <div className="md:col-span-2">
              <FormInput label="Nama Lengkap" placeholder="Nama sesuai dokumen kependudukan" {...register("namaLengkap")} error={errors.namaLengkap?.message} />
            </div>
          </FormSection>

          <FormSection
            icon={UserRound}
            title="Biodata Warga"
            description="Lengkapi data pribadi untuk profil warga dan laporan kependudukan."
          >
            <FormInput label="Tempat Lahir" placeholder="Contoh: Kuningan" {...register("tempatLahir")} error={errors.tempatLahir?.message} />
            <FormInput label="Tanggal Lahir" type="date" {...register("tanggalLahir")} error={errors.tanggalLahir?.message} />
            <FieldGroup label="Jenis Kelamin" error={errors.jenisKelamin?.message}>
              <select className="h-10 w-full rounded-md border border-app-border bg-white px-3 py-2 text-sm text-app-text shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary" {...register("jenisKelamin")}>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </FieldGroup>
            <FormInput label="Agama" placeholder="Contoh: Islam" {...register("agama")} error={errors.agama?.message} />
            <FormInput label="Pekerjaan" placeholder="Contoh: Petani" {...register("pekerjaan")} error={errors.pekerjaan?.message} />
            <FormInput label="Pendidikan" placeholder="Contoh: SMA" {...register("pendidikan")} error={errors.pendidikan?.message} />
            <FormInput label="Status Perkawinan" placeholder="Contoh: Kawin" {...register("statusPerkawinan")} error={errors.statusPerkawinan?.message} />
          </FormSection>

          <FormSection
            icon={Home}
            title="Domisili dan Status"
            description="Data wilayah membantu staff memfilter warga berdasarkan dusun, RT, RW, dan status domisili."
          >
            <FormInput label="Dusun" placeholder="Contoh: Dusun Cihurip" {...register("dusun")} error={errors.dusun?.message} />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormInput label="RT" placeholder="001" {...register("rt")} error={errors.rt?.message} />
              <FormInput label="RW" placeholder="002" {...register("rw")} error={errors.rw?.message} />
            </div>
            <FieldGroup label="Status Warga" error={errors.status?.message}>
              <select className="h-10 w-full rounded-md border border-app-border bg-white px-3 py-2 text-sm text-app-text shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary" {...register("status")}>
                <option value="aktif">Aktif</option>
                <option value="pindah">Pindah</option>
                <option value="meninggal">Meninggal</option>
              </select>
            </FieldGroup>
            <div className="md:col-span-2">
              <FormInput label="Alamat Lengkap" placeholder="Nama kampung, jalan, atau keterangan alamat" {...register("alamat")} error={errors.alamat?.message} />
            </div>
          </FormSection>

          <div className="flex flex-col-reverse gap-3 border-t border-app-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-app-muted">Data dummy akan divalidasi di form. Hubungkan Supabase untuk penyimpanan permanen.</p>
            <Button type="submit" className="sm:min-w-44">
              <Save className="h-4 w-4" />
              Simpan Data
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function FormSection({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: typeof IdCard;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[24px] border border-app-border bg-[#FAFAF7] p-4 sm:p-5">
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-bold text-app-text">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-app-muted">{description}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}

function FieldGroup({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-app-text">{label}</label>
      {children}
      {error ? <p className="text-xs font-semibold text-[#B45309]">{error}</p> : null}
    </div>
  );
}
