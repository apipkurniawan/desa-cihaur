"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { legacyRegisterSchema, loginSchema, registerSchema } from "@/validations/auth";

export async function loginAction(formData: FormData) {
  const values = loginSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    redirect("/dashboard");
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(values);
  if (error) throw new Error(error.message);
  redirect("/dashboard");
}

export async function registerAction(formData: FormData) {
  const rawValues = {
    email: formData.get("email"),
    password: formData.get("password"),
    namaLengkap: formData.get("namaLengkap"),
    nik: formData.get("nik"),
    nomorKk: formData.get("nomorKk"),
    nomorTelepon: formData.get("nomorTelepon"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const values = formData.has("nomorKk") ? registerSchema.parse(rawValues) : legacyRegisterSchema.parse(rawValues);

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    redirect("/warga/profil");
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        full_name: values.namaLengkap,
        nik: values.nik,
        nomor_kk: "nomorKk" in values ? values.nomorKk : undefined,
        phone: "nomorTelepon" in values ? values.nomorTelepon : undefined,
        role: "warga",
      },
    },
  });
  if (error) throw new Error(error.message);
  redirect("/warga/profil");
}

export async function logoutAction() {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  redirect("/login");
}
