import { ShieldCheck, Sparkles, UsersRound } from "lucide-react";

const items = [
  { icon: UsersRound, text: "4.500+ warga terlayani" },
  { icon: ShieldCheck, text: "Akses aman dan terlindungi" },
  { icon: Sparkles, text: "Layanan desa lebih cepat" },
];

export function SocialProof() {
  return (
    <div className="mt-6 grid gap-2 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.text} className="rounded-2xl border border-[#E9E2D1] bg-[#F7F2E6]/70 p-3 text-center dark:border-white/10 dark:bg-white/6">
          <item.icon className="mx-auto h-4 w-4 text-[#2F6B3F]" />
          <p className="mt-2 text-xs font-medium leading-5 text-[#667085]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
