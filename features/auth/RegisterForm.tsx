"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useMemo, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { registerAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerSchema, type RegisterFormValues } from "@/validations/auth";
import { PasswordInput } from "./PasswordInput";
import { PasswordStrength } from "./PasswordStrength";

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      nik: "",
      nomorKk: "",
      namaLengkap: "",
      email: "",
      nomorTelepon: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");
  const formFields = useMemo(
    () =>
      [
        { name: "nik" as const, label: "NIK", placeholder: "16 digit NIK", inputMode: "numeric" as const, autoComplete: "off" },
        { name: "nomorKk" as const, label: "Nomor KK", placeholder: "16 digit nomor KK", inputMode: "numeric" as const, autoComplete: "off" },
        { name: "namaLengkap" as const, label: "Nama Lengkap", placeholder: "Nama sesuai KTP", autoComplete: "name" },
        { name: "email" as const, label: "Email", placeholder: "nama@email.com", type: "email", autoComplete: "email" },
        { name: "nomorTelepon" as const, label: "Nomor Telepon", placeholder: "081234567890", inputMode: "tel" as const, autoComplete: "tel" },
      ],
    [],
  );

  function onSubmit(values: RegisterFormValues) {
    setSubmitted(true);
    setSubmitError(null);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.set(key, value));

    startTransition(() => {
      void registerAction(formData).catch(() => {
        setSubmitError("Pendaftaran belum berhasil. Periksa koneksi atau coba gunakan email lain.");
      });
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {submitted && isValid ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-2xl border border-[#6BA368]/30 bg-[#6BA368]/10 p-3 text-sm font-medium text-[#2F6B3F]"
          role="status"
        >
          <CheckCircle2 className="h-4 w-4" />
          Data valid. Pendaftaran sedang diproses.
        </motion.div>
      ) : null}

      {submitError ? (
        <div className="rounded-2xl border border-[#2F6B3F]/15 bg-[#2F6B3F]/5 p-3 text-sm text-[#2D3748]" role="alert">
          {submitError}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        {formFields.map((field) => (
          <div key={field.name} className={field.name === "namaLengkap" || field.name === "email" ? "space-y-2 sm:col-span-2" : "space-y-2"}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              id={field.name}
              type={field.type ?? "text"}
              placeholder={field.placeholder}
              inputMode={field.inputMode}
              autoComplete={field.autoComplete}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              aria-invalid={Boolean(errors[field.name])}
              className="h-11 rounded-xl border-[#E2D8C3] bg-[#FBF8EF] text-[#2D3748] shadow-none placeholder:text-[#7A8493] focus-visible:bg-white dark:border-[#E2D8C3] dark:bg-[#FBF8EF] dark:text-[#2D3748] dark:placeholder:text-[#7A8493] dark:focus-visible:bg-white"
              {...register(field.name)}
            />
            {errors[field.name] ? (
              <p id={`${field.name}-error`} className="text-xs font-medium text-[#2F6B3F]">
                {errors[field.name]?.message}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          id="password"
          autoComplete="new-password"
          aria-describedby={errors.password ? "register-password-error" : undefined}
          aria-invalid={Boolean(errors.password)}
          className="h-11 rounded-xl border-[#E2D8C3] bg-[#FBF8EF] text-[#2D3748] shadow-none placeholder:text-[#7A8493] focus-visible:bg-white dark:border-[#E2D8C3] dark:bg-[#FBF8EF] dark:text-[#2D3748] dark:placeholder:text-[#7A8493] dark:focus-visible:bg-white"
          {...register("password")}
        />
        <PasswordStrength password={password} />
        {errors.password ? <p id="register-password-error" className="text-xs font-medium text-[#2F6B3F]">{errors.password.message}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
        <PasswordInput
          id="confirmPassword"
          autoComplete="new-password"
          aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined}
          aria-invalid={Boolean(errors.confirmPassword)}
          className="h-11 rounded-xl border-[#E2D8C3] bg-[#FBF8EF] text-[#2D3748] shadow-none placeholder:text-[#7A8493] focus-visible:bg-white dark:border-[#E2D8C3] dark:bg-[#FBF8EF] dark:text-[#2D3748] dark:placeholder:text-[#7A8493] dark:focus-visible:bg-white"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword ? (
          <p id="confirm-password-error" className="text-xs font-medium text-[#2F6B3F]">{errors.confirmPassword.message}</p>
        ) : null}
      </div>

      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Button type="submit" className="h-11 w-full rounded-xl" disabled={isPending}>
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {isPending ? "Memproses..." : "Daftar Sekarang"}
        </Button>
      </motion.div>
    </form>
  );
}
