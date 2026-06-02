export type HomeIconName =
  | "users"
  | "family"
  | "map"
  | "store"
  | "network"
  | "home"
  | "file"
  | "briefcase"
  | "shield"
  | "heart"
  | "message"
  | "sprout"
  | "cow"
  | "mountain"
  | "wallet"
  | "phone"
  | "mail"
  | "mapPin";

export type VillageStatistic = {
  label: string;
  value: string;
  description: string;
  icon: HomeIconName;
};

export type VillageService = {
  title: string;
  description: string;
  href: string;
  icon: HomeIconName;
};

export type VillageAnnouncement = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
};

export type VillageEvent = {
  title: string;
  date: string;
  location: string;
  description: string;
};

export type VillagePotential = {
  title: string;
  description: string;
  image: string;
  label: string;
  metric: string;
  icon: HomeIconName;
};

export type VillageStaff = {
  name: string;
  role: string;
  image: string;
};

export type VillageNews = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

export type BudgetItem = {
  label: string;
  value: string;
  percentage: number;
};
