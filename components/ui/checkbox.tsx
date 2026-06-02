"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

export function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "peer flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#D8CEBA] bg-[#FBF8EF] text-white shadow-sm transition-all hover:border-[#6BA368] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BA368] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDF8] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[#2F6B3F] data-[state=checked]:bg-[#2F6B3F]",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <Check className="h-3.5 w-3.5 stroke-[3]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
