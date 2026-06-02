-- Supabase schema for Sistem Informasi Desa
-- Run this in Supabase SQL Editor after creating the project.

create extension if not exists "uuid-ossp";

create type public.user_role as enum ('admin_desa', 'staff_desa', 'warga');
create type public.status_warga as enum ('aktif', 'pindah', 'meninggal');
create type public.status_surat as enum ('diajukan', 'diproses', 'selesai', 'ditolak');
create type public.status_publish as enum ('draft', 'published');
create type public.status_bantuan as enum ('terdaftar', 'diterima', 'ditolak');
create type public.jenis_kelamin as enum ('Laki-laki', 'Perempuan');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null,
  role public.user_role not null default 'warga',
  warga_id uuid,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.kartu_keluarga (
  id uuid primary key default uuid_generate_v4(),
  nomor_kk varchar(16) not null unique,
  kepala_keluarga text not null,
  alamat text not null,
  rt varchar(3) not null,
  rw varchar(3) not null,
  dusun text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.warga (
  id uuid primary key default uuid_generate_v4(),
  kartu_keluarga_id uuid references public.kartu_keluarga(id) on delete set null,
  nik varchar(16) not null unique,
  nomor_kk varchar(16) not null references public.kartu_keluarga(nomor_kk) on update cascade,
  nama_lengkap text not null,
  tempat_lahir text not null,
  tanggal_lahir date not null,
  jenis_kelamin public.jenis_kelamin not null,
  agama text not null,
  status_perkawinan text not null,
  pekerjaan text not null,
  pendidikan text not null,
  alamat text not null,
  rt varchar(3) not null,
  rw varchar(3) not null,
  dusun text not null,
  status public.status_warga not null default 'aktif',
  foto_ktp_url text,
  foto_kk_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles
  add constraint profiles_warga_id_fkey foreign key (warga_id) references public.warga(id) on delete set null;

create table public.anggota_keluarga (
  id uuid primary key default uuid_generate_v4(),
  kartu_keluarga_id uuid not null references public.kartu_keluarga(id) on delete cascade,
  warga_id uuid not null references public.warga(id) on delete cascade,
  hubungan text not null,
  is_kepala_keluarga boolean not null default false,
  created_at timestamptz not null default now(),
  unique (kartu_keluarga_id, warga_id)
);

create table public.jenis_surat (
  id uuid primary key default uuid_generate_v4(),
  kode text not null unique,
  nama text not null unique,
  deskripsi text not null,
  template_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.pengajuan_surat (
  id uuid primary key default uuid_generate_v4(),
  nomor_surat text not null unique,
  jenis_surat_id uuid not null references public.jenis_surat(id),
  warga_id uuid not null references public.warga(id),
  profile_id uuid references public.profiles(id) on delete set null,
  keperluan text not null,
  status public.status_surat not null default 'diajukan',
  catatan_staff text,
  processed_by uuid references public.profiles(id) on delete set null,
  tanggal_pengajuan timestamptz not null default now(),
  tanggal_selesai timestamptz,
  pdf_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.dokumen_surat (
  id uuid primary key default uuid_generate_v4(),
  pengajuan_surat_id uuid not null references public.pengajuan_surat(id) on delete cascade,
  nama_file text not null,
  file_url text not null,
  file_type text,
  uploaded_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.pengumuman (
  id uuid primary key default uuid_generate_v4(),
  judul text not null,
  isi text not null,
  kategori text not null,
  tanggal_publish timestamptz,
  status public.status_publish not null default 'draft',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.kegiatan (
  id uuid primary key default uuid_generate_v4(),
  nama text not null,
  deskripsi text not null,
  tanggal timestamptz not null,
  lokasi text not null,
  dokumentasi_url text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.bantuan_sosial (
  id uuid primary key default uuid_generate_v4(),
  nama_program text not null,
  deskripsi text not null,
  sumber_dana text not null,
  tahun int not null,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.penerima_bantuan (
  id uuid primary key default uuid_generate_v4(),
  bantuan_sosial_id uuid not null references public.bantuan_sosial(id) on delete cascade,
  warga_id uuid not null references public.warga(id) on delete cascade,
  status public.status_bantuan not null default 'terdaftar',
  tanggal_terima date,
  catatan text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (bantuan_sosial_id, warga_id)
);

create table public.pengaturan_desa (
  id uuid primary key default uuid_generate_v4(),
  nama_desa text not null,
  kecamatan text not null,
  kabupaten text not null,
  provinsi text not null,
  logo_url text,
  nama_kepala_desa text not null,
  nomor_kontak text not null,
  alamat_kantor text not null,
  updated_by uuid references public.profiles(id) on delete set null,
  updated_at timestamptz not null default now()
);

create index idx_profiles_role on public.profiles(role);
create index idx_warga_nomor_kk on public.warga(nomor_kk);
create index idx_warga_dusun_rt_rw on public.warga(dusun, rt, rw);
create index idx_warga_status on public.warga(status);
create index idx_anggota_keluarga_kk on public.anggota_keluarga(kartu_keluarga_id);
create index idx_pengajuan_surat_warga on public.pengajuan_surat(warga_id);
create index idx_pengajuan_surat_status on public.pengajuan_surat(status);
create index idx_pengajuan_surat_tanggal on public.pengajuan_surat(tanggal_pengajuan);
create index idx_pengumuman_status_publish on public.pengumuman(status, tanggal_publish);
create index idx_kegiatan_tanggal on public.kegiatan(tanggal);
create index idx_penerima_bantuan_warga on public.penerima_bantuan(warga_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger set_warga_updated_at before update on public.warga for each row execute function public.set_updated_at();
create trigger set_kk_updated_at before update on public.kartu_keluarga for each row execute function public.set_updated_at();
create trigger set_pengajuan_surat_updated_at before update on public.pengajuan_surat for each row execute function public.set_updated_at();
create trigger set_pengumuman_updated_at before update on public.pengumuman for each row execute function public.set_updated_at();
create trigger set_kegiatan_updated_at before update on public.kegiatan for each row execute function public.set_updated_at();
create trigger set_bantuan_updated_at before update on public.bantuan_sosial for each row execute function public.set_updated_at();
create trigger set_penerima_bantuan_updated_at before update on public.penerima_bantuan for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    coalesce((new.raw_user_meta_data->>'role')::public.user_role, 'warga')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.current_role()
returns public.user_role
language sql
security definer
stable
as $$
  select role from public.profiles where id = auth.uid()
$$;

create or replace function public.is_admin_or_staff()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin_desa', 'staff_desa')
  )
$$;

create or replace function public.owns_warga(target_warga_id uuid)
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and warga_id = target_warga_id
  )
$$;

alter table public.profiles enable row level security;
alter table public.warga enable row level security;
alter table public.kartu_keluarga enable row level security;
alter table public.anggota_keluarga enable row level security;
alter table public.jenis_surat enable row level security;
alter table public.pengajuan_surat enable row level security;
alter table public.dokumen_surat enable row level security;
alter table public.pengumuman enable row level security;
alter table public.kegiatan enable row level security;
alter table public.bantuan_sosial enable row level security;
alter table public.penerima_bantuan enable row level security;
alter table public.pengaturan_desa enable row level security;

create policy "profiles_select_own_or_admin" on public.profiles
  for select using (id = auth.uid() or public.current_role() = 'admin_desa');
create policy "profiles_update_own_or_admin" on public.profiles
  for update using (id = auth.uid() or public.current_role() = 'admin_desa')
  with check (id = auth.uid() or public.current_role() = 'admin_desa');

create policy "warga_select_admin_staff_or_self" on public.warga
  for select using (public.is_admin_or_staff() or public.owns_warga(id));
create policy "warga_manage_admin_staff" on public.warga
  for all using (public.is_admin_or_staff()) with check (public.is_admin_or_staff());

create policy "kk_select_admin_staff" on public.kartu_keluarga
  for select using (public.is_admin_or_staff());
create policy "kk_manage_admin_staff" on public.kartu_keluarga
  for all using (public.is_admin_or_staff()) with check (public.is_admin_or_staff());

create policy "anggota_select_admin_staff" on public.anggota_keluarga
  for select using (public.is_admin_or_staff());
create policy "anggota_manage_admin_staff" on public.anggota_keluarga
  for all using (public.is_admin_or_staff()) with check (public.is_admin_or_staff());

create policy "jenis_surat_read_authenticated" on public.jenis_surat
  for select using (auth.uid() is not null and is_active = true);
create policy "jenis_surat_manage_admin" on public.jenis_surat
  for all using (public.current_role() = 'admin_desa') with check (public.current_role() = 'admin_desa');

create policy "surat_select_staff_or_owner" on public.pengajuan_surat
  for select using (public.is_admin_or_staff() or public.owns_warga(warga_id));
create policy "surat_insert_owner" on public.pengajuan_surat
  for insert with check (public.owns_warga(warga_id) or public.is_admin_or_staff());
create policy "surat_update_admin_staff" on public.pengajuan_surat
  for update using (public.is_admin_or_staff()) with check (public.is_admin_or_staff());

create policy "dokumen_select_staff_or_owner" on public.dokumen_surat
  for select using (
    public.is_admin_or_staff()
    or exists (
      select 1 from public.pengajuan_surat ps
      where ps.id = pengajuan_surat_id and public.owns_warga(ps.warga_id)
    )
  );
create policy "dokumen_insert_authenticated" on public.dokumen_surat
  for insert with check (auth.uid() is not null);

create policy "pengumuman_public_published" on public.pengumuman
  for select using (status = 'published' or public.is_admin_or_staff());
create policy "pengumuman_manage_admin_staff" on public.pengumuman
  for all using (public.is_admin_or_staff()) with check (public.is_admin_or_staff());

create policy "kegiatan_public_read" on public.kegiatan
  for select using (true);
create policy "kegiatan_manage_admin_staff" on public.kegiatan
  for all using (public.is_admin_or_staff()) with check (public.is_admin_or_staff());

create policy "bantuan_select_staff_or_owner" on public.bantuan_sosial
  for select using (auth.uid() is not null);
create policy "bantuan_manage_admin_staff" on public.bantuan_sosial
  for all using (public.is_admin_or_staff()) with check (public.is_admin_or_staff());

create policy "penerima_select_staff_or_owner" on public.penerima_bantuan
  for select using (public.is_admin_or_staff() or public.owns_warga(warga_id));
create policy "penerima_manage_admin_staff" on public.penerima_bantuan
  for all using (public.is_admin_or_staff()) with check (public.is_admin_or_staff());

create policy "pengaturan_public_read" on public.pengaturan_desa
  for select using (true);
create policy "pengaturan_manage_admin" on public.pengaturan_desa
  for all using (public.current_role() = 'admin_desa') with check (public.current_role() = 'admin_desa');

insert into public.kartu_keluarga (id, nomor_kk, kepala_keluarga, alamat, rt, rw, dusun) values
  ('11111111-1111-1111-1111-111111111111', '3201010101010001', 'Ahmad Hidayat', 'Kp. Cihurip', '001', '002', 'Dusun Cihurip'),
  ('22222222-2222-2222-2222-222222222222', '3201010101010002', 'Dede Kurnia', 'Kp. Pasir Angin', '003', '001', 'Dusun Pasir Angin');

insert into public.warga (id, kartu_keluarga_id, nik, nomor_kk, nama_lengkap, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, status_perkawinan, pekerjaan, pendidikan, alamat, rt, rw, dusun, status) values
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', '3201010101900001', '3201010101010001', 'Ahmad Hidayat', 'Bogor', '1990-01-01', 'Laki-laki', 'Islam', 'Kawin', 'Petani', 'SMA', 'Kp. Cihurip', '001', '002', 'Dusun Cihurip', 'aktif'),
  ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '11111111-1111-1111-1111-111111111111', '3201014505950002', '3201010101010001', 'Siti Aminah', 'Bogor', '1995-05-05', 'Perempuan', 'Islam', 'Kawin', 'Wirausaha', 'S1', 'Kp. Cihurip', '001', '002', 'Dusun Cihurip', 'aktif');

insert into public.anggota_keluarga (kartu_keluarga_id, warga_id, hubungan, is_kepala_keluarga) values
  ('11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Kepala Keluarga', true),
  ('11111111-1111-1111-1111-111111111111', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Istri', false);

insert into public.jenis_surat (kode, nama, deskripsi) values
  ('DOM', 'Surat Keterangan Domisili', 'Keterangan alamat domisili warga.'),
  ('SKU', 'Surat Keterangan Usaha', 'Keterangan usaha warga.'),
  ('SKCK', 'Surat Pengantar SKCK', 'Pengantar administrasi SKCK.'),
  ('SKTM', 'Surat Keterangan Tidak Mampu', 'Keterangan kondisi sosial ekonomi.'),
  ('KMT', 'Surat Keterangan Kematian', 'Keterangan kematian warga.'),
  ('LHR', 'Surat Keterangan Kelahiran', 'Keterangan kelahiran anak.');

insert into public.pengumuman (judul, isi, kategori, tanggal_publish, status) values
  ('Jadwal Posyandu Bulan Juni', 'Posyandu balita dan lansia dilaksanakan setiap hari Jumat minggu kedua di aula desa.', 'Kesehatan', now(), 'published'),
  ('Musyawarah Perencanaan Pembangunan Desa', 'Warga diundang menghadiri musyawarah rencana pembangunan desa tahun berjalan.', 'Administrasi', now() + interval '2 days', 'draft');

insert into public.kegiatan (nama, deskripsi, tanggal, lokasi) values
  ('Kerja Bakti Lingkungan', 'Membersihkan saluran air dan fasilitas umum desa.', now() + interval '7 days', 'Dusun Cihurip'),
  ('Pelatihan UMKM', 'Pelatihan pencatatan keuangan sederhana untuk pelaku usaha desa.', now() + interval '14 days', 'Aula Desa');

insert into public.bantuan_sosial (id, nama_program, deskripsi, sumber_dana, tahun) values
  ('33333333-3333-3333-3333-333333333333', 'BLT Dana Desa', 'Bantuan langsung tunai untuk keluarga prioritas.', 'Dana Desa', 2026),
  ('44444444-4444-4444-4444-444444444444', 'Bantuan Sembako', 'Paket bahan pokok untuk warga rentan.', 'APBD Kabupaten', 2026);

insert into public.penerima_bantuan (bantuan_sosial_id, warga_id, status, tanggal_terima) values
  ('33333333-3333-3333-3333-333333333333', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'diterima', current_date);

insert into public.pengaturan_desa (nama_desa, kecamatan, kabupaten, provinsi, nama_kepala_desa, nomor_kontak, alamat_kantor) values
  ('Desa Cihaur', 'Cibeureum', 'Kabupaten Bogor', 'Jawa Barat', 'H. Maman Suherman', '0812-3456-7890', 'Jl. Raya Cihaur No. 1');

insert into storage.buckets (id, name, public) values
  ('dokumen-surat', 'dokumen-surat', false),
  ('desa-public', 'desa-public', true)
on conflict (id) do nothing;

create policy "storage_dokumen_authenticated_upload" on storage.objects
  for insert to authenticated
  with check (bucket_id in ('dokumen-surat', 'desa-public'));

create policy "storage_dokumen_authenticated_read" on storage.objects
  for select to authenticated
  using (bucket_id = 'dokumen-surat');

create policy "storage_public_read" on storage.objects
  for select
  using (bucket_id = 'desa-public');
