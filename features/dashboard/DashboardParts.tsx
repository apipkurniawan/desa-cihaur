import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MetricCard({
  icon: Icon,
  title,
  value,
  helper,
  trend,
  warning,
}: {
  icon: LucideIcon;
  title: string;
  value: number;
  helper: string;
  trend: string;
  warning?: boolean;
}) {
  return (
    <Card className="rounded-[24px] border-[#DCCFB7] bg-white">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-app-muted">{title}</p>
            <p className="mt-2 text-3xl font-bold text-app-text">{value}</p>
          </div>
          <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${warning ? "bg-[#FFF7DF] text-[#8A5B20]" : "bg-primary/10 text-primary"}`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <p className="mt-2 text-sm text-app-muted">{helper}</p>
        <p className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-bold ${warning ? "bg-[#FFF7DF] text-[#8A5B20]" : "bg-primary/10 text-primary"}`}>
          {trend}
        </p>
      </CardContent>
    </Card>
  );
}

export function MiniStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-[#FAFAF7] p-4">
      <p className="text-xs font-semibold text-app-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold text-app-text">{value}</p>
    </div>
  );
}

export function QuickAction({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="group rounded-[24px] border border-[#DCCFB7] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(47,107,63,0.10)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowRight className="h-5 w-5 text-app-muted transition group-hover:translate-x-1 group-hover:text-primary" />
      </div>
      <h2 className="mt-4 font-bold text-app-text">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-app-muted">{description}</p>
    </Link>
  );
}

export function Panel({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-[#DCCFB7] bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-1">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h2 className="text-xl font-bold text-app-text">{title}</h2>
        {description ? <p className="text-sm leading-6 text-app-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function EmptyNote({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[20px] border border-dashed border-[#DCCFB7] bg-[#FFFDF7] p-5 text-center">
      <CheckCircle2 className="mx-auto h-8 w-8 text-primary" />
      <h3 className="mt-3 font-bold text-app-text">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-app-muted">{description}</p>
    </div>
  );
}
