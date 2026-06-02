export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-app-text sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-app-muted sm:text-base">{description}</p> : null}
    </div>
  );
}
