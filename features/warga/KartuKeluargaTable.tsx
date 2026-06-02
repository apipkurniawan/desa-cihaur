"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/DataTable";
import type { KartuKeluarga } from "@/types";

const columns: ColumnDef<KartuKeluarga>[] = [
  { accessorKey: "nomorKk", header: "Nomor KK" },
  { accessorKey: "kepalaKeluarga", header: "Kepala Keluarga" },
  { accessorKey: "alamat", header: "Alamat" },
  { accessorKey: "dusun", header: "Dusun" },
  {
    header: "RT/RW",
    cell: ({ row }) => `${row.original.rt}/${row.original.rw}`,
  },
  { accessorKey: "jumlahAnggota", header: "Anggota" },
];

export function KartuKeluargaTable({ data }: { data: KartuKeluarga[] }) {
  return <DataTable columns={columns} data={data} searchPlaceholder="Cari nomor KK atau kepala keluarga..." />;
}
