export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
