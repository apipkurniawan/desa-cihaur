"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PDFDownloadButton({
  title,
  rows,
}: {
  title: string;
  rows: Record<string, string | number | undefined>[];
}) {
  async function handleDownload() {
    const [{ default: jsPDF }, autoTableModule] = await Promise.all([import("jspdf"), import("jspdf-autotable")]);
    const doc = new jsPDF();
    doc.text(title, 14, 16);
    const headers = rows[0] ? Object.keys(rows[0]) : ["Data"];
    const body = rows.length ? rows.map((row) => headers.map((key) => String(row[key] ?? ""))) : [["Belum ada data"]];
    autoTableModule.default(doc, { head: [headers], body, startY: 24 });
    doc.save(`${title.toLowerCase().replaceAll(" ", "-")}.pdf`);
  }

  return (
    <Button variant="outline" onClick={handleDownload}>
      <Download className="h-4 w-4" />
      PDF
    </Button>
  );
}
