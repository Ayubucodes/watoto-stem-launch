interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
}

export function SectionHeading({ label, title, description, light }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
      {label && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 ${light ? 'text-primary-foreground/70' : 'text-primary'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-primary-foreground' : 'text-foreground'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-primary-foreground/80' : 'text-muted-foreground'}`} dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </div>
  );
}
