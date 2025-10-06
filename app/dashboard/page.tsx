'use client';

import { useMemo, useState } from "react";
import {
  Activity,
  Brain,
  Target,
  Users,
  Briefcase,
  Wallet,
  BookOpen,
  Sparkles,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  ContinuousLearningSection,
  FinancialIndependenceSection,
  LegacySection,
  MentalHealthSection,
  PhysicalHealthSection,
  ProfessionalMasterySection,
  PurposeMeaningSection,
  RelationshipsSection,
} from "@/components/dashboard/sections";
import { OverviewSection } from "@/components/dashboard/overview";

type SectionKey =
  | "overview"
  | "physical"
  | "mental"
  | "purpose"
  | "relationships"
  | "mastery"
  | "financial"
  | "learning"
  | "legacy";

type DashboardSection = {
  key: SectionKey;
  label: string;
  intro: string;
  icon: LucideIcon;
  Component: () => JSX.Element;
};

const SECTIONS: DashboardSection[] = [
  {
    key: "overview",
    label: "Inicio",
    intro:
      "Un vistazo integrado a las métricas más relevantes de tu evolución.",
    icon: LayoutDashboard,
    Component: OverviewSection,
  },
  {
    key: "physical",
    label: "Salud Física",
    intro: "Optimiza tu vitalidad y energía cotidiana.",
    icon: Activity,
    Component: PhysicalHealthSection,
  },
  {
    key: "mental",
    label: "Salud Mental",
    intro: "Fortalece tu enfoque y bienestar emocional.",
    icon: Brain,
    Component: MentalHealthSection,
  },
  {
    key: "purpose",
    label: "Propósito y Significado",
    intro: "Diseña la narrativa que guía tu impacto.",
    icon: Target,
    Component: PurposeMeaningSection,
  },
  {
    key: "relationships",
    label: "Relaciones",
    intro: "Construye vínculos que potencian tu crecimiento.",
    icon: Users,
    Component: RelationshipsSection,
  },
  {
    key: "mastery",
    label: "Maestría Profesional",
    intro: "Evoluciona tus capacidades hacia la excelencia.",
    icon: Briefcase,
    Component: ProfessionalMasterySection,
  },
  {
    key: "financial",
    label: "Independencia Financiera",
    intro: "Integra estrategias para libertad económica.",
    icon: Wallet,
    Component: FinancialIndependenceSection,
  },
  {
    key: "learning",
    label: "Aprendizaje Continuo",
    intro: "Activa un ciclo permanente de exploración.",
    icon: BookOpen,
    Component: ContinuousLearningSection,
  },
  {
    key: "legacy",
    label: "Trascendencia y Legado",
    intro: "Proyecta el impacto que deseas dejar.",
    icon: Sparkles,
    Component: LegacySection,
  },
];

export default function DashboardPage() {
  const [activeKey, setActiveKey] = useState<SectionKey>("overview");

  const activeSection = useMemo(
    () => SECTIONS.find((section) => section.key === activeKey) ?? SECTIONS[0],
    [activeKey],
  );

  const ActiveComponent = activeSection.Component;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/20 text-foreground">
        <Sidebar className="bg-muted/10">
          <SidebarHeader>
            <span className="text-base font-semibold text-foreground">
              Evolv Dashboard
            </span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dimensiones del bienestar</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {SECTIONS.map((section) => (
                    <SidebarMenuItem key={section.key}>
                      <SidebarMenuButton
                        icon={section.icon}
                        isActive={activeSection.key === section.key}
                        onClick={() => setActiveKey(section.key)}
                      >
                        {section.label}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Recursos</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="rounded-md border border-dashed border-border/60 bg-background p-3 text-xs text-muted-foreground">
                  Visualiza tu progreso integrando métricas de hábitos,
                  bienestar y desempeño profesional.
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            Evolv © {new Date().getFullYear()}
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex items-center justify-between gap-4 border-b bg-background px-6 py-4">
            <div className="space-y-1">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Panel de Evolución Integral
              </p>
              <h1 className="text-2xl font-semibold tracking-tight">
                {activeSection.label}
              </h1>
              <p className="max-w-2xl text-sm text-muted-foreground">
                {activeSection.intro}
              </p>
            </div>
            <SidebarTrigger />
          </header>
          <main className="flex-1 bg-muted/10 px-6 py-8">
            <div className="mx-auto max-w-5xl space-y-6">
              <ActiveComponent />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
