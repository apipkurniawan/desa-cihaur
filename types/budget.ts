export type BudgetSummary = {
  label: string;
  value: number;
  helper: string;
  progress: number;
};

export type BudgetCategory = {
  name: string;
  budget: number;
  realized: number;
  color: string;
  description: string;
};

export type BudgetProgram = {
  code: string;
  name: string;
  field: string;
  budget: number;
  realized: number;
  beneficiaries: string;
  status: "Selesai" | "Berjalan" | "Perencanaan";
};

export type BudgetEvidence = {
  title: string;
  type: string;
  date: string;
  image: string;
  description: string;
  status: string;
};

export type BudgetTimeline = {
  period: string;
  title: string;
  description: string;
  status: "Selesai" | "Berjalan" | "Menunggu";
};
