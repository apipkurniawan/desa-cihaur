"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { formatDate } from "@/lib/utils";
import type { PengajuanSurat } from "@/types";

const columns: ColumnDef<PengajuanSurat>[] = [
  { accessorKey: "nomorSurat", header: "Nomor Surat" },
  { accessorKey: "jenisSurat", header: "Jenis Surat" },
  { accessorKey: "wargaNama", header: "Pemohon" },
  {
    accessorKey: "tanggalPengajuan",
    header: "Tanggal",
    cell: ({ row }) => formatDate(row.original.tanggalPengajuan),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    id: "download",
    header: "",
    cell: ({ row }) => (
      <Button variant="outline" size="sm" disabled={row.original.status !== "selesai"}>
        <Download className="h-4 w-4" />
        PDF
      </Button>
    ),
  },
];

export function SuratTable({ data }: { data: PengajuanSurat[] }) {
  return <DataTable columns={columns} data={data} searchPlaceholder="Cari nomor surat, pemohon, status..." />;
}
