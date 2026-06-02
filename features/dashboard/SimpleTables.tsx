"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { formatDate } from "@/lib/utils";
import type { BantuanSosial, Kegiatan, Pengumuman } from "@/types";

const pengumumanColumns: ColumnDef<Pengumuman>[] = [
  { accessorKey: "judul", header: "Judul" },
  { accessorKey: "kategori", header: "Kategori" },
  { accessorKey: "tanggalPublish", header: "Publish", cell: ({ row }) => formatDate(row.original.tanggalPublish) },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <StatusBadge status={row.original.status} /> },
];

const kegiatanColumns: ColumnDef<Kegiatan>[] = [
  { accessorKey: "nama", header: "Kegiatan" },
  { accessorKey: "tanggal", header: "Tanggal", cell: ({ row }) => formatDate(row.original.tanggal) },
  { accessorKey: "lokasi", header: "Lokasi" },
  { accessorKey: "deskripsi", header: "Deskripsi" },
];

const bantuanColumns: ColumnDef<BantuanSosial>[] = [
  { accessorKey: "namaProgram", header: "Program" },
  { accessorKey: "sumberDana", header: "Sumber Dana" },
  { accessorKey: "tahun", header: "Tahun" },
  { accessorKey: "jumlahPenerima", header: "Penerima" },
];

export function PengumumanTable({ data }: { data: Pengumuman[] }) {
  return <DataTable columns={pengumumanColumns} data={data} />;
}

export function KegiatanTable({ data }: { data: Kegiatan[] }) {
  return <DataTable columns={kegiatanColumns} data={data} />;
}

export function BantuanTable({ data }: { data: BantuanSosial[] }) {
  return <DataTable columns={bantuanColumns} data={data} />;
}
