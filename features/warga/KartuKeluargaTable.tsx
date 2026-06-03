"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Download, FileText, Home, Plus, Search, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { KartuKeluargaFormDialog } from "@/features/warga/KartuKeluargaFormDialog";
import { EmptyState, FamilyCard, ResidentHead, RowActions, SummaryCard } from "@/features/warga/KartuKeluargaListParts";
import type { KartuKeluarga } from "@/types";
import type { KartuKeluargaFormValues } from "@/validations/kartu-keluarga";

type DialogState =
  | { open: false; mode: "create"; item?: undefined }
  | { open: true; mode: "create"; item?: undefined }
  | { open: true; mode: "edit"; item: KartuKeluarga };

export function KartuKeluargaTable({ data }: { data: KartuKeluarga[] }) {
  const [items, setItems] = useState<KartuKeluarga[]>(data);
  const [query, setQuery] = useState("");
  const [dusun, setDusun] = useState("semua");
  const [dialog, setDialog] = useState<DialogState>({ open: false, mode: "create" });

  const dusunOptions = useMemo(() => ["semua", ...Array.from(new Set(items.map((item) => item.dusun)))], [items]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesQuery =
        !normalizedQuery ||
        [item.nomorKk, item.kepalaKeluarga, item.alamat, item.dusun, `${item.rt}/${item.rw}`]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesDusun = dusun === "semua" || item.dusun === dusun;

      return matchesQuery && matchesDusun;
    });
  }, [dusun, items, query]);

  const totalAnggota = items.reduce((total, item) => total + item.jumlahAnggota, 0);

  function handleSubmit(values: KartuKeluargaFormValues) {
    if (dialog.mode === "edit") {
      setItems((current) =>
        current.map((item) =>
          item.id === dialog.item.id
            ? {
                ...item,
                ...values,
              }
            : item,
        ),
      );
      toast.success("Data kartu keluarga diperbarui.");
    } else {
      const newItem: KartuKeluarga = {
        id: `kk-${Date.now()}`,
        ...values,
      };

      setItems((current) => [newItem, ...current]);
      toast.success("Data kartu keluarga ditambahkan.");
    }

    setDialog({ open: false, mode: "create" });
  }

  function handleDelete(itemId: string) {
    setItems((current) => current.filter((item) => item.id !== itemId));
    toast.success("Data kartu keluarga dihapus dari daftar sementara.");
  }

  return (
    <section id="data-kartu-keluarga" className="scroll-mt-24 space-y-5">
      <div className="grid gap-4 md:grid-cols-3">
        <SummaryCard icon={FileText} label="Total KK" value={`${items.length}`} helper="Kartu keluarga terdaftar" />
        <SummaryCard icon={UsersRound} label="Total Anggota" value={`${totalAnggota}`} helper="Jumlah anggota keluarga" />
        <SummaryCard icon={Home} label="Dusun" value={`${dusunOptions.length - 1}`} helper="Wilayah dengan data KK" />
      </div>

      <div className="overflow-hidden rounded-[28px] border border-[#DCCFB7] bg-white shadow-sm">
        <div className="border-b border-[#EFE6D6] bg-[#FFFDF7] p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Data Kartu Keluarga</p>
              <h2 className="mt-2 text-xl font-bold text-app-text">Kelola KK dan kepala keluarga</h2>
              <p className="mt-1 text-sm leading-6 text-app-muted">
                Cari berdasarkan nomor KK, kepala keluarga, alamat, dusun, atau RT/RW. Data CRUD masih lokal dan siap
                dihubungkan ke Server Actions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outline">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
              <Button onClick={() => setDialog({ open: true, mode: "create" })}>
                <Plus className="h-4 w-4" />
                Tambah KK
              </Button>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-[1fr_220px]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-app-muted" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari nomor KK, kepala keluarga, alamat..."
                className="h-11 rounded-xl pl-10"
                aria-label="Cari data kartu keluarga"
              />
            </div>
            <select
              value={dusun}
              onChange={(event) => setDusun(event.target.value)}
              className="h-11 rounded-xl border border-app-border bg-white px-3 text-sm font-semibold text-app-text shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Filter dusun kartu keluarga"
            >
              {dusunOptions.map((item) => (
                <option key={item} value={item}>
                  {item === "semua" ? "Semua Dusun" : item}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-app-muted">
            <span className="rounded-full bg-white px-3 py-1.5">{filteredItems.length} data ditemukan</span>
            <span className="rounded-full bg-white px-3 py-1.5">{dusun === "semua" ? "Semua wilayah" : dusun}</span>
          </div>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <Table>
            <TableHeader>
              <TableRow className="bg-white hover:bg-white">
                <TableHead className="min-w-72">Kartu Keluarga</TableHead>
                <TableHead>Kepala Keluarga</TableHead>
                <TableHead>Wilayah</TableHead>
                <TableHead>Anggota</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.length ? (
                filteredItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="font-mono text-xs font-bold text-primary">{item.nomorKk}</div>
                      <div className="mt-2 max-w-md text-sm text-app-muted">{item.alamat}</div>
                    </TableCell>
                    <TableCell>
                      <ResidentHead item={item} />
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold text-app-text">{item.dusun}</div>
                      <div className="mt-1 text-xs text-app-muted">RT {item.rt} / RW {item.rw}</div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {item.jumlahAnggota} orang
                      </span>
                    </TableCell>
                    <TableCell>
                      <RowActions item={item} onEdit={() => setDialog({ open: true, mode: "edit", item })} onDelete={handleDelete} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-48 text-center">
                    <EmptyState onCreate={() => setDialog({ open: true, mode: "create" })} />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="grid gap-3 p-4 lg:hidden">
          {filteredItems.length ? (
            filteredItems.map((item) => (
              <FamilyCard
                key={item.id}
                item={item}
                onEdit={() => setDialog({ open: true, mode: "edit", item })}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <EmptyState onCreate={() => setDialog({ open: true, mode: "create" })} />
          )}
        </div>
      </div>

      <KartuKeluargaFormDialog
        open={dialog.open}
        mode={dialog.mode}
        defaultValues={dialog.mode === "edit" ? dialog.item : undefined}
        onOpenChange={(open) => setDialog(open ? { open: true, mode: "create" } : { open: false, mode: "create" })}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
