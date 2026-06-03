"use client";

import { Eye, FileText, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/shared/ConfirmDialog";
import type { KartuKeluarga } from "@/types";

export function SummaryCard({
  icon: Icon,
  label,
  value,
  helper,
}: {
  icon: typeof FileText;
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#DCCFB7] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-app-muted">{label}</p>
          <p className="mt-2 text-3xl font-bold text-app-text">{value}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-sm text-app-muted">{helper}</p>
    </article>
  );
}

export function ResidentHead({ item }: { item: KartuKeluarga }) {
  const initials = item.kepalaKeluarga
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-bold text-primary">
        {initials}
      </div>
      <div>
        <p className="font-bold text-app-text">{item.kepalaKeluarga}</p>
        <p className="mt-1 text-xs text-app-muted">Kepala keluarga</p>
      </div>
    </div>
  );
}

export function RowActions({
  item,
  onEdit,
  onDelete,
}: {
  item: KartuKeluarga;
  onEdit: () => void;
  onDelete: (itemId: string) => void;
}) {
  return (
    <div className="flex justify-end gap-1">
      <Button variant="ghost" size="icon" aria-label={`Lihat detail KK ${item.nomorKk}`}>
        <Eye className="h-4 w-4 text-primary" />
      </Button>
      <Button variant="ghost" size="icon" onClick={onEdit} aria-label={`Edit KK ${item.nomorKk}`}>
        <Pencil className="h-4 w-4 text-app-muted" />
      </Button>
      <ConfirmDialog
        title="Hapus kartu keluarga?"
        description={`Data KK ${item.nomorKk} akan dihapus dari daftar sementara.`}
        onConfirm={() => onDelete(item.id)}
        trigger={
          <Button variant="ghost" size="icon" aria-label={`Hapus KK ${item.nomorKk}`}>
            <Trash2 className="h-4 w-4 text-[#B45309]" />
          </Button>
        }
      />
    </div>
  );
}

export function FamilyCard({
  item,
  onEdit,
  onDelete,
}: {
  item: KartuKeluarga;
  onEdit: () => void;
  onDelete: (itemId: string) => void;
}) {
  return (
    <article className="rounded-[22px] border border-app-border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <ResidentHead item={item} />
        <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
          {item.jumlahAnggota} orang
        </span>
      </div>
      <div className="mt-4 grid gap-3 rounded-2xl bg-[#FAFAF7] p-4 text-sm">
        <Info label="Nomor KK" value={item.nomorKk} mono />
        <Info label="Alamat" value={item.alamat} />
        <Info label="Wilayah" value={`${item.dusun}, RT ${item.rt}/RW ${item.rw}`} />
      </div>
      <div className="mt-4 flex gap-2">
        <Button variant="secondary" size="sm" className="flex-1">
          <Eye className="h-4 w-4" />
          Detail
        </Button>
        <Button variant="outline" size="sm" className="flex-1" onClick={onEdit}>
          <Pencil className="h-4 w-4" />
          Edit
        </Button>
        <ConfirmDialog
          title="Hapus kartu keluarga?"
          description={`Data KK ${item.nomorKk} akan dihapus dari daftar sementara.`}
          onConfirm={() => onDelete(item.id)}
          trigger={
            <Button variant="outline" size="icon" aria-label={`Hapus KK ${item.nomorKk}`}>
              <Trash2 className="h-4 w-4 text-[#B45309]" />
            </Button>
          }
        />
      </div>
    </article>
  );
}

export function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded-[22px] border border-dashed border-[#DCCFB7] bg-[#FFFDF7] p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <MoreHorizontal className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-bold text-app-text">Data KK tidak ditemukan</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-app-muted">
        Ubah kata kunci atau filter dusun. Jika datanya belum ada, tambahkan kartu keluarga baru.
      </p>
      <Button className="mt-4" onClick={onCreate}>
        <Plus className="h-4 w-4" />
        Tambah KK
      </Button>
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
