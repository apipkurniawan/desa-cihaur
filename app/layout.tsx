import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ToastProvider } from "@/components/shared/ToastProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desa Cihaur - Kabupaten Kuningan",
  description:
    "Website resmi Desa Cihaur Kabupaten Kuningan. Informasi desa, layanan masyarakat, pengumuman, kegiatan, dan transparansi anggaran.",
  openGraph: {
    title: "Desa Cihaur - Kabupaten Kuningan",
    description:
      "Website resmi Desa Cihaur Kabupaten Kuningan. Informasi desa, layanan masyarakat, pengumuman, kegiatan, dan transparansi anggaran.",
    type: "website",
    locale: "id_ID",
    siteName: "Website Resmi Desa Cihaur",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Cihaur - Kabupaten Kuningan",
    description:
      "Website resmi Desa Cihaur Kabupaten Kuningan. Informasi desa, layanan masyarakat, pengumuman, kegiatan, dan transparansi anggaran.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-app-background text-app-text">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
