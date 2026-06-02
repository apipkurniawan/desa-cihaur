import type { UserRole } from "@/types";

export const roleLabels: Record<UserRole, string> = {
  admin_desa: "Admin Desa",
  staff_desa: "Staff Desa",
  warga: "Warga",
};

const permissions: Record<UserRole, string[]> = {
  admin_desa: ["dashboard:read", "users:manage", "warga:manage", "surat:manage", "content:manage", "reports:export", "settings:manage"],
  staff_desa: ["dashboard:read", "warga:manage", "surat:manage", "content:manage", "reports:export"],
  warga: ["profile:read", "surat:create", "surat:read", "public:read"],
};

export function hasPermission(role: UserRole, permission: string) {
  return permissions[role]?.includes(permission) ?? false;
}

export function canAccessDashboard(role: UserRole) {
  return role === "admin_desa" || role === "staff_desa";
}
