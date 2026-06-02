import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastProvider } from "@/components/shared/ToastProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistem Informasi Desa",
  description: "Aplikasi administrasi digital untuk pemerintah desa dan warga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-950">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
