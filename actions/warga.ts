"use server";

import { revalidatePath } from "next/cache";
import { wargaSchema } from "@/validations/warga";

export async function saveWargaAction(_: unknown, formData: FormData) {
  const parsed = wargaSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Data warga tidak valid" };
  }

  // Integrate with Supabase insert/update here after environment variables are configured.
  revalidatePath("/dashboard/warga");
  return { ok: true, message: "Data warga berhasil disimpan" };
}
