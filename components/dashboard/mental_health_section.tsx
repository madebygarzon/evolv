import React from "react";

type SectionProps = {
  title: string;
  description: string;
  highlights: string[];
};

function SectionTemplate({ title, description, highlights }: SectionProps) {
  return (
    <div className="space-y-6 rounded-lg border border-border bg-background p-6 shadow-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="grid gap-3 text-sm text-foreground sm:grid-cols-2">
        {highlights.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border/60 bg-card px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MentalHealthSection() {
  return (
    <SectionTemplate
      title="Salud Mental"
      description="Cultiva una mente enfocada, flexible y serena para enfrentar la complejidad con claridad."
      highlights={[
        "Prácticas de atención plena y autocuidado emocional",
        "Gestión del estrés con herramientas adaptativas",
        "Diseño de entornos psicológicamente seguros",
        "Redes de apoyo y acompañamiento profesional",
      ]}
    />
  );
}

export default MentalHealthSection;