"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { loginAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema, type LoginFormValues } from "@/validations/auth";
import { PasswordInput } from "./PasswordInput";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormValues) {
    setSubmitError(null);
    const formData = new FormData();
    formData.set("email", values.email);
    formData.set("password", values.password);

    startTransition(() => {
      void loginAction(formData).catch(() => {
        setSubmitError("Email atau password belum sesuai. Silakan periksa kembali data Anda.");
      });
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {submitError ? (
        <div className="rounded-2xl border border-[#2F6B3F]/15 bg-[#2F6B3F]/5 p-3 text-sm text-[#2D3748]" role="alert">
          {submitError}
        </div>
      ) : null}

      {isSubmitted && !isValid ? (
        <div className="rounded-2xl border border-[#2F6B3F]/15 bg-[#2F6B3F]/5 p-3 text-sm text-[#2D3748]" role="alert">
          Periksa kembali email dan password Anda.
        </div>
      ) : null}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="nama@email.com"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          className="h-11 rounded-xl border-[#E2D8C3] bg-[#FBF8EF] text-[#2D3748] shadow-none placeholder:text-[#7A8493] focus-visible:bg-white dark:border-[#E2D8C3] dark:bg-[#FBF8EF] dark:text-[#2D3748] dark:placeholder:text-[#7A8493] dark:focus-visible:bg-white"
          {...register("email")}
        />
        {errors.email ? <p id="email-error" className="text-xs font-medium text-[#2F6B3F]">{errors.email.message}</p> : null}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="password">Password</Label>
          <Link href="#" className="text-xs font-semibold text-[#2F6B3F] hover:text-[#6BA368]">
            Lupa Password?
          </Link>
        </div>
        <PasswordInput
          id="password"
          autoComplete="current-password"
          aria-describedby={errors.password ? "password-error" : undefined}
          aria-invalid={Boolean(errors.password)}
          className="h-11 rounded-xl border-[#E2D8C3] bg-[#FBF8EF] text-[#2D3748] shadow-none placeholder:text-[#7A8493] focus-visible:bg-white dark:border-[#E2D8C3] dark:bg-[#FBF8EF] dark:text-[#2D3748] dark:placeholder:text-[#7A8493] dark:focus-visible:bg-white"
          {...register("password")}
        />
        {errors.password ? <p id="password-error" className="text-xs font-medium text-[#2F6B3F]">{errors.password.message}</p> : null}
      </div>

      <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-transparent p-1.5 text-sm text-[#667085] transition-colors hover:border-[#E9E2D1] hover:bg-[#F7F2E6]/60">
        <Checkbox name="remember" aria-label="Ingat saya di perangkat ini" />
        <span className="select-none leading-5 group-hover:text-[#2D3748]">Ingat saya di perangkat ini</span>
      </label>

      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Button type="submit" className="h-11 w-full rounded-xl" disabled={isPending}>
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {isPending ? "Memproses..." : "Masuk ke Akun"}
        </Button>
      </motion.div>
    </form>
  );
}
