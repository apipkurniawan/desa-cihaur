import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { VillageService } from "@/types/home";
import { HomeIcon } from "./HomeIcons";
import { MotionCard } from "./Motion";

export function ServiceCard({ service }: { service: VillageService }) {
  return (
    <MotionCard>
      <Card className="h-full bg-white">
        <CardContent className="flex h-full flex-col p-5">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
            <HomeIcon name={service.icon} className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-app-text">{service.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-app-muted">{service.description}</p>
          <Button asChild variant="secondary" className="mt-5 justify-between">
            <Link href={service.href}>
              Akses Layanan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </MotionCard>
  );
}
