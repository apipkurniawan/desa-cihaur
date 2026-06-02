"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { VillagePotential } from "@/types/home";
import { HomeIcon } from "./HomeIcons";

export function PotentialCard({
  potential,
  index,
}: {
  potential: VillagePotential;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative h-full overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative h-[420px] overflow-hidden sm:h-[460px] lg:h-[500px]">
        <motion.div className="absolute inset-0" whileHover={{ scale: 1.08 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <Image
            src={potential.image}
            alt={`Potensi desa ${potential.title}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(22,35,28,0.92)_0%,rgba(22,35,28,0.58)_42%,rgba(22,35,28,0.08)_100%)]" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-5">
          <span className="rounded-full border border-white/20 bg-white/16 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md">
            {potential.label}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/18 text-white backdrop-blur-md transition-colors group-hover:bg-accent group-hover:text-primary">
            <HomeIcon name={potential.icon} className="h-5 w-5" />
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
            {potential.metric}
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white">{potential.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/76">{potential.description}</p>
          <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
            <span className="text-sm font-semibold text-white/88">Lihat potensi</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-accent group-hover:text-primary">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
