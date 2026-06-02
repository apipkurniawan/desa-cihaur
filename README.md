# Sistem Informasi Desa

Aplikasi web administrasi desa berbasis Next.js App Router, TypeScript, Tailwind CSS, ShadCN-style UI, Supabase, React Hook Form, Zod, TanStack Table, dan Recharts.

## Fitur

- Authentication: login, register warga, logout, protected routes, role-based access control.
- Dashboard admin/staff: statistik warga, KK, surat, bantuan sosial, grafik warga per dusun, aktivitas terbaru.
- Manajemen data warga dan kartu keluarga.
- Pengajuan surat online dengan status, dokumen pendukung, dan tombol PDF.
- Pengumuman, kegiatan, bantuan sosial, laporan export CSV/PDF, dan pengaturan desa.
- Portal warga: profil, pengajuan surat, status surat, transparansi anggaran, pengumuman, struktur desa, artikel edukasi.
- Data dummy fallback jika Supabase belum dikonfigurasi.

## Struktur Folder

```txt
app/                 Route App Router
actions/             Server Actions untuk mutasi
components/ui/       Komponen UI ShadCN-style
components/shared/   Komponen reusable aplikasi
database/            Schema SQL Supabase
features/            Komponen per fitur
lib/                 Utilities, dummy data, Supabase helpers, RBAC
types/               Tipe domain TypeScript
validations/         Schema Zod
public/              Static assets
```

## Instalasi

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplikasi berjalan di `http://localhost:3000`.

## Setup Supabase

1. Buat project Supabase.
2. Isi `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

3. Buka Supabase SQL Editor.
4. Jalankan file [database/schema.sql](database/schema.sql).
5. Aktifkan provider email/password di Supabase Auth.

Saat env Supabase belum diisi, aplikasi tetap bisa dibuka memakai data dummy untuk pengembangan UI.

## Script

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # run production server
npm run lint     # eslint
```

## Role

- `admin_desa`: mengelola semua data, user, dashboard, pengaturan.
- `staff_desa`: mengelola data warga, surat, kegiatan, pengumuman, laporan.
- `warga`: melihat profil sendiri, mengajukan surat, melihat status, pengumuman, transparansi, struktur, artikel.

## Catatan Pengembangan

- Mutasi Supabase sudah disiapkan melalui folder `actions/`, namun beberapa form saat ini memakai dummy fallback agar project langsung bisa berjalan tanpa konfigurasi eksternal.
- Integrasi produksi berikutnya adalah mengganti query dummy di `lib/data/dummy.ts` dengan query Supabase per fitur, lalu menambahkan upload storage untuk KTP/KK/dokumen surat.
