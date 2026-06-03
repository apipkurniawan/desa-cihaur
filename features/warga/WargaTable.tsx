"use client";

import { useMemo, useState } from "react";
import {
  Download,
  Eye,
  Filter,
  MoreHorizontal,
  Pencil,
  Search,
  Trash2,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ConfirmDialog } from "@/components/shared/ConfirmDialog";
import { StatusBadge } from "@/components/shared/StatusBadge";
import type { StatusWarga, Warga } from "@/types";

const statusFilters: Array<"semua" | StatusWarga> = ["semua", "aktif", "pindah", "meninggal"];

export function WargaTable({ data }: { data: Warga[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"semua" | StatusWarga>("semua");
  const [dusun, setDusun] = useState("semua");

  const dusunOptions = useMemo(() => ["semua", ...Array.from(new Set(data.map((item) => item.dusun)))], [data]);

  const filteredData = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return data.filter((item) => {
      const matchesQuery =
        !normalizedQuery ||
        [item.nik, item.nomorKk, item.namaLengkap, item.dusun, item.alamat, `${item.rt}/${item.rw}`]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesStatus = status === "semua" || item.status === status;
      const matchesDusun = dusun === "semua" || item.dusun === dusun;

      return matchesQuery && matchesStatus && matchesDusun;
    });
  }, [data, dusun, query, status]);

  const activeCount = filteredData.filter((item) => item.status === "aktif").length;

  return (
    <section id="data-warga" className="scroll-mt-24 rounded-[28px] border border-[#DCCFB7] bg-white shadow-sm">
      <div className="border-b border-[#EFE6D6] bg-[#FFFDF7] p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Daftar Warga</p>
            <h2 className="mt-2 text-xl font-bold text-app-text">Cari, filter, dan kelola data kependudukan</h2>
            <p className="mt-1 text-sm leading-6 text-app-muted">
              Gunakan pencarian untuk NIK, nama, nomor KK, alamat, dusun, atau RT/RW.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="outline">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
            <Button variant="secondary">
              <UsersRound className="h-4 w-4" />
              {filteredData.length} Data
            </Button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_180px_220px]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-app-muted" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari NIK, nama, KK, alamat, dusun..."
              className="h-11 rounded-xl pl-10"
              aria-label="Cari data warga"
            />
          </div>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as "semua" | StatusWarga)}
            className="h-11 rounded-xl border border-app-border bg-white px-3 text-sm font-semibold text-app-text shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Filter status warga"
          >
            {statusFilters.map((item) => (
              <option key={item} value={item}>
                {item === "semua" ? "Semua Status" : item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={dusun}
            onChange={(event) => setDusun(event.target.value)}
            className="h-11 rounded-xl border border-app-border bg-white px-3 text-sm font-semibold text-app-text shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Filter dusun"
          >
            {dusunOptions.map((item) => (
              <option key={item} value={item}>
                {item === "semua" ? "Semua Dusun" : item}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-app-muted">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
            <Filter className="h-3.5 w-3.5 text-primary" />
            {filteredData.length} hasil
          </span>
          <span className="rounded-full bg-white px-3 py-1.5">{activeCount} aktif</span>
          <span className="rounded-full bg-white px-3 py-1.5">{dusun === "semua" ? "Semua wilayah" : dusun}</span>
        </div>
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <Table>
          <TableHeader>
            <TableRow className="bg-white hover:bg-white">
              <TableHead className="min-w-72">Warga</TableHead>
              <TableHead>NIK</TableHead>
              <TableHead>No. KK</TableHead>
              <TableHead>Wilayah</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length ? (
              filteredData.map((item) => <ResidentRow key={item.id} item={item} />)
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-48 text-center">
                  <EmptyState />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="grid gap-3 p-4 lg:hidden">
        {filteredData.length ? filteredData.map((item) => <ResidentCard key={item.id} item={item} />) : <EmptyState />}
      </div>
    </section>
  );
}

function ResidentRow({ item }: { item: Warga }) {
  return (
    <TableRow>
      <TableCell>
        <ResidentIdentity item={item} />
      </TableCell>
      <TableCell className="font-mono text-xs text-app-muted">{item.nik}</TableCell>
      <TableCell className="font-mono text-xs text-app-muted">{item.nomorKk}</TableCell>
      <TableCell>
        <div className="font-semibold text-app-text">{item.dusun}</div>
        <div className="mt-1 text-xs text-app-muted">RT {item.rt} / RW {item.rw}</div>
      </TableCell>
      <TableCell>
        <StatusBadge status={item.status} />
      </TableCell>
      <TableCell>
        <div className="flex justify-end gap-1">
          <Button variant="ghost" size="icon" aria-label={`Lihat detail ${item.namaLengkap}`}>
            <Eye className="h-4 w-4 text-primary" />
          </Button>
          <Button variant="ghost" size="icon" aria-label={`Edit ${item.namaLengkap}`}>
            <Pencil className="h-4 w-4 text-app-muted" />
          </Button>
          <ConfirmDialog
            trigger={
              <Button variant="ghost" size="icon" aria-label={`Hapus ${item.namaLengkap}`}>
                <Trash2 className="h-4 w-4 text-[#B45309]" />
              </Button>
            }
          />
        </div>
      </TableCell>
    </TableRow>
  );
}

function ResidentCard({ item }: { item: Warga }) {
  return (
    <article className="rounded-[22px] border border-app-border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <ResidentIdentity item={item} />
        <StatusBadge status={item.status} />
      </div>
      <div className="mt-4 grid gap-3 rounded-2xl bg-[#FAFAF7] p-4 text-sm">
        <Info label="NIK" value={item.nik} mono />
        <Info label="Nomor KK" value={item.nomorKk} mono />
        <Info label="Wilayah" value={`${item.dusun}, RT ${item.rt}/RW ${item.rw}`} />
      </div>
      <div className="mt-4 flex gap-2">
        <Button variant="secondary" size="sm" className="flex-1">
          <Eye className="h-4 w-4" />
          Detail
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Pencil className="h-4 w-4" />
          Edit
        </Button>
        <ConfirmDialog
          trigger={
            <Button variant="outline" size="icon" aria-label={`Hapus ${item.namaLengkap}`}>
              <Trash2 className="h-4 w-4 text-[#B45309]" />
            </Button>
          }
        />
      </div>
    </article>
  );
}

function ResidentIdentity({ item }: { item: Warga }) {
  const initials = item.namaLengkap
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-bold text-primary">
        {initials || <UserRound className="h-5 w-5" />}
      </div>
      <div>
        <div className="font-bold text-app-text">{item.namaLengkap}</div>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-app-muted">
          <span>{item.jenisKelamin}</span>
          <span className="h-1 w-1 rounded-full bg-app-muted/50" />
          <span>{item.pekerjaan}</span>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-xs font-semibold text-app-muted">{label}</p>
      <p className={`mt-1 font-semibold text-app-text ${mono ? "font-mono text-xs" : "text-sm"}`}>{value}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded-[22px] border border-dashed border-[#DCCFB7] bg-[#FFFDF7] p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <MoreHorizontal className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-bold text-app-text">Data tidak ditemukan</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-app-muted">
        Coba ubah kata kunci pencarian, status, atau filter dusun untuk melihat data warga lainnya.
      </p>
    </div>
  );
}
