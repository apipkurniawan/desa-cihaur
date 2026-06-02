import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function DashboardCard({
  title,
  value,
  description,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card>
      <CardContent className="flex items-start justify-between gap-4 p-5">
        <div>
          <p className="text-sm font-medium text-app-muted">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-app-text">{value}</p>
          <p className="mt-1 text-xs text-app-muted">{description}</p>
        </div>
        <div className="rounded-md bg-primary/5 p-2 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  );
}
