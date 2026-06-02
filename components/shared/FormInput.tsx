import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FormInput({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={props.id ?? props.name}>{label}</Label>
      <Input aria-invalid={Boolean(error)} {...props} />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
