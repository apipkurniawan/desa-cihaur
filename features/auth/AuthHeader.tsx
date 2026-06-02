export function AuthHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#2F6B3F]">
        Akses Layanan Desa
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-[#2D3748] sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#667085]">{description}</p>
    </div>
  );
}
