"use server";

import { revalidatePath } from "next/cache";
import { pengajuanSuratSchema, prosesSuratSchema } from "@/validations/surat";

export async function submitPengajuanSuratAction(_: unknown, formData: FormData) {
  const parsed = pengajuanSuratSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Pengajuan surat tidak valid" };
  }

  revalidatePath("/warga/status-surat");
  revalidatePath("/dashboard/surat");
  return { ok: true, message: "Pengajuan surat berhasil dikirim" };
}

export async function prosesPengajuanSuratAction(_: unknown, formData: FormData) {
  const parsed = prosesSuratSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Status surat tidak valid" };
  }

  revalidatePath("/dashboard/surat");
  return { ok: true, message: "Status pengajuan berhasil diperbarui" };
}
