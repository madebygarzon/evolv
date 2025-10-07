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

export default ContinuousLearningSection;