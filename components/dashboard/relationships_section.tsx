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

export function RelationshipsSection() {
  return (
    <SectionTemplate
      title="Relaciones"
      description="Desarrolla vínculos que nutren tu crecimiento y fortalecen comunidades significativas."
      highlights={[
        "Mapeo de redes de apoyo y colaboración",
        "Prácticas de comunicación consciente",
        "Resolución empática de conflictos",
        "Experiencias compartidas para profundizar conexiones",
      ]}
    />
  );
}

export default RelationshipsSection;