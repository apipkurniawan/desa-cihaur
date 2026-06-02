import {
  BriefcaseBusiness,
  FileText,
  HandHeart,
  Home,
  Mail,
  Map,
  MapPin,
  MessageSquare,
  Mountain,
  Network,
  Phone,
  ShieldCheck,
  Sprout,
  Store,
  Users,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { HomeIconName } from "@/types/home";

const icons: Record<HomeIconName, LucideIcon> = {
  users: Users,
  family: Users,
  map: Map,
  store: Store,
  network: Network,
  home: Home,
  file: FileText,
  briefcase: BriefcaseBusiness,
  shield: ShieldCheck,
  heart: HandHeart,
  message: MessageSquare,
  sprout: Sprout,
  cow: Home,
  mountain: Mountain,
  wallet: WalletCards,
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
};

export function HomeIcon({ name, className }: { name: HomeIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
