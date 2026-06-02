import Link from "next/link";
import { AuthCard } from "@/features/auth/AuthCard";
import { AuthFooter } from "@/features/auth/AuthFooter";
import { AuthHeader } from "@/features/auth/AuthHeader";
import { AuthLayout } from "@/features/auth/AuthLayout";
import { RegisterForm } from "@/features/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthCard className="max-w-[620px]">
        <AuthHeader
          title="Buat Akun Warga"
          description="Daftarkan diri Anda untuk menikmati berbagai layanan digital Desa Cihaur."
        />
        <RegisterForm />
        <AuthFooter text="Sudah memiliki akun?" href="/login" linkText="Masuk" />
        <div className="mt-5 text-center">
          <Link href="/" className="text-xs font-medium text-app-muted transition-colors hover:text-primary">
            Kembali ke beranda Desa Cihaur
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
