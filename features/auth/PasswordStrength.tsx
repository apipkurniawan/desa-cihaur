import { cn } from "@/lib/utils";

function getStrength(password: string) {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return score;
}

const labels = ["Sangat lemah", "Lemah", "Cukup", "Baik", "Kuat", "Sangat kuat"];

export function PasswordStrength({ password }: { password: string }) {
  const score = getStrength(password);

  return (
    <div className="space-y-2" aria-live="polite">
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "h-1.5 rounded-full bg-app-border transition-colors",
              index < score && score <= 2 ? "bg-app-text/55" : null,
              index < score && score === 3 ? "bg-accent" : null,
              index < score && score >= 4 ? "bg-secondary" : null,
            )}
          />
        ))}
      </div>
      <p className="text-xs text-[#667085]">Kekuatan password: {labels[score]}</p>
    </div>
  );
}
