"use client";

import type * as React from "react";

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

export function PhysicalHealthSection() {
  return (
    <SectionTemplate
      title="Salud Física"
      description="Evalúa tu energía, hábitos de movimiento, nutrición y descanso para sostener un cuerpo resiliente."
      highlights={[
        "Rituales diarios de movimiento y fuerza funcional",
        "Plan de nutrición basado en objetivos y preferencias",
        "Monitoreo del sueño y recuperación",
        "Biomarcadores clave y chequeos preventivos",
      ]}
    />
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

export function ProfessionalMasterySection() {
  return (
    <SectionTemplate
      title="Maestría Profesional"
      description="Expande tus competencias estratégicas para operar con excelencia sostenida."
      highlights={[
        "Ruta de habilidades críticas y metas trimestrales",
        "Proyectos desafiantes con ciclos de feedback",
        "Estrategias de posicionamiento de liderazgo",
        "Sistemas de productividad y priorización inteligente",
      ]}
    />
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

export function ContinuousLearningSection() {
  return (
    <SectionTemplate
      title="Aprendizaje Continuo"
      description="Activa un ciclo permanente de curiosidad y adquisición de conocimiento estratégico."
      highlights={[
        "Plan de estudio con microhabilidades prioritarias",
        "Sprints de aprendizaje y experimentos",
        "Mentorías y comunidades de práctica",
        "Repositorios personales de conocimiento",
      ]}
    />
  );
}

export function LegacySection() {
  return (
    <SectionTemplate
      title="Trascendencia y Legado"
      description="Proyecta el impacto que deseas dejar, integrando servicio, innovación y memoria colectiva."
      highlights={[
        "Iniciativas de alto impacto social o ambiental",
        "Gobernanza del patrimonio tangible e intangible",
        "Transferencia de conocimiento intergeneracional",
        "Celebraciones y ritos de paso significativos",
      ]}
    />
  );
}
