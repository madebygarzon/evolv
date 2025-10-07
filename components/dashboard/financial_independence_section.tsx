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

export function FinancialIndependenceSection() {
  return (
    <SectionTemplate
      title="Independencia Financiera"
      description="Diseña estructuras financieras que respalden tu libertad de decisión y expansión."
      highlights={[
        "Estado financiero integral y flujo de caja",
        "Estrategias de inversión diversificada",
        "Planes de mitigación de riesgos y seguros",
        "Vehículos de ingresos pasivos y activos emergentes",
      ]}
    />
  );
}

export default FinancialIndependenceSection;