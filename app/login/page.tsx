import Link from "next/link";
import { AuthCard } from "@/features/auth/AuthCard";
import { AuthFooter } from "@/features/auth/AuthFooter";
import { AuthHeader } from "@/features/auth/AuthHeader";
import { AuthLayout } from "@/features/auth/AuthLayout";
import { LoginForm } from "@/features/auth/LoginForm";
import { SocialProof } from "@/features/auth/SocialProof";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Selamat Datang Kembali"
          description="Masuk untuk mengakses layanan dan informasi Desa Cihaur."
        />
        <LoginForm />
        <SocialProof />
        <AuthFooter text="Belum punya akun warga?" href="/register" linkText="Daftar sekarang" />
        <div className="mt-5 text-center">
          <Link href="/" className="text-xs font-medium text-app-muted transition-colors hover:text-primary">
            Kembali ke beranda Desa Cihaur
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
