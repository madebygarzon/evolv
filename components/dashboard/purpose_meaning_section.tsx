import React from "react";

type SectionProps = {
  title: string;
  description: string;
  highlights: string[];
};

export function SectionTemplate({ title, description, highlights }: SectionProps) {
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

export function PurposeMeaningSection() {
  return (
    <SectionTemplate
      title="Propósito y Significado"
      description="Define la brújula que alinea tus acciones con una visión trascendente y auténtica."
      highlights={[
        "Clarificación de valores y legado deseado",
        "Mapa de objetivos de alto impacto",
        "Narrativa personal y storytelling de propósito",
        "Rituales de reflexión y celebración de logros",
      ]}
    />
  );
}

export default PurposeMeaningSection;