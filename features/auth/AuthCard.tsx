"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AuthCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "w-full max-w-[520px] rounded-[24px] border border-[#E9E2D1] bg-[#FFFDF8]/94 p-5 text-[#2D3748] shadow-[0_24px_80px_rgba(47,107,63,0.10)] backdrop-blur-xl dark:border-[#526255] dark:bg-[#FFFDF8]/96 dark:text-[#2D3748] dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-7",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
