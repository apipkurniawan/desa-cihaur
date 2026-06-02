import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function generateNomorSurat(kode: string, sequence = 1) {
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const year = new Date().getFullYear();
  return `${String(sequence).padStart(3, "0")}/${kode}/DS-CIH/${month}/${year}`;
}

export function toCsv<Row extends Record<string, unknown>>(rows: Row[]) {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const escape = (value: unknown) => `"${String(value ?? "").replaceAll('"', '""')}"`;
  return [headers.join(","), ...rows.map((row) => headers.map((key) => escape(row[key])).join(","))].join("\n");
}
