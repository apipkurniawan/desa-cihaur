import Link from "next/link";

export function AuthFooter({
  text,
  href,
  linkText,
}: {
  text: string;
  href: string;
  linkText: string;
}) {
  return (
    <p className="mt-6 text-center text-sm text-[#667085]">
      {text}{" "}
      <Link href={href} className="font-semibold text-[#2F6B3F] transition-colors hover:text-[#6BA368]">
        {linkText}
      </Link>
    </p>
  );
}
