import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

export function FilterBar({ children }: { children: ReactNode }) {
  return <Card className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">{children}</Card>;
}
