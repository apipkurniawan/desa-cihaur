"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/shared/ConfirmDialog";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import type { Warga } from "@/types";

const columns: ColumnDef<Warga>[] = [
  { accessorKey: "nik", header: "NIK" },
  { accessorKey: "namaLengkap", header: "Nama Lengkap" },
  { accessorKey: "nomorKk", header: "No. KK" },
  { accessorKey: "dusun", header: "Dusun" },
  {
    header: "RT/RW",
    cell: ({ row }) => `${row.original.rt}/${row.original.rw}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <ConfirmDialog
        trigger={
          <Button variant="ghost" size="icon" aria-label="Hapus data warga">
            <Trash2 className="h-4 w-4 text-red-600" />
          </Button>
        }
      />
    ),
  },
];

export function WargaTable({ data }: { data: Warga[] }) {
  return <DataTable columns={columns} data={data} searchPlaceholder="Cari NIK, nama, dusun..." />;
}
