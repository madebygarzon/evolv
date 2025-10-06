"use client";

import { useId } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const overviewTrendData = [
  { week: "Semana 1", bienestar: 68, vitalidad: 72 },
  { week: "Semana 2", bienestar: 74, vitalidad: 76 },
  { week: "Semana 3", bienestar: 79, vitalidad: 81 },
  { week: "Semana 4", bienestar: 83, vitalidad: 87 },
  { week: "Semana 5", bienestar: 88, vitalidad: 91 },
  { week: "Semana 6", bienestar: 92, vitalidad: 95 },
];

const momentumData = [
  { month: "Abr", propósito: 58, trascendencia: 49 },
  { month: "May", propósito: 64, trascendencia: 55 },
  { month: "Jun", propósito: 71, trascendencia: 62 },
  { month: "Jul", propósito: 76, trascendencia: 67 },
  { month: "Ago", propósito: 82, trascendencia: 73 },
  { month: "Sep", propósito: 89, trascendencia: 81 },
];

const energyBalanceData = [
  { day: "Lun", física: 78, mental: 72 },
  { day: "Mar", física: 80, mental: 74 },
  { day: "Mié", física: 83, mental: 77 },
  { day: "Jue", física: 82, mental: 79 },
  { day: "Vie", física: 85, mental: 81 },
  { day: "Sáb", física: 88, mental: 85 },
  { day: "Dom", física: 90, mental: 87 },
];

const collaborationData = [
  { cycle: "Q1", relaciones: 62, maestria: 70 },
  { cycle: "Q2", relaciones: 69, maestria: 75 },
  { cycle: "Q3", relaciones: 78, maestria: 82 },
  { cycle: "Q4", relaciones: 86, maestria: 88 },
];

const evolutionData = [
  { stage: "Fundamentos", aprendizaje: 48, independencia: 45 },
  { stage: "Impulso", aprendizaje: 57, independencia: 53 },
  { stage: "Expansión", aprendizaje: 68, independencia: 65 },
  { stage: "Consolidación", aprendizaje: 76, independencia: 72 },
  { stage: "Liderazgo", aprendizaje: 85, independencia: 81 },
];

const summaryMetrics = [
  {
    label: "Índice Integral",
    value: "82",
    delta: "+4.2%",
    subtitle: "vs. mes anterior",
    gradient: "from-orange-500 via-pink-500 to-purple-600",
  },
  {
    label: "Energía Vital",
    value: "91",
    delta: "+6.1%",
    subtitle: "Promedio semanal",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    label: "Fluidez Mental",
    value: "87",
    delta: "+3.4%",
    subtitle: "Sesiones clave",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    label: "Impacto Global",
    value: "76",
    delta: "+8.9%",
    subtitle: "Proyectos activos",
    gradient: "from-amber-500 via-rose-500 to-red-500",
  },
];

const focusAreas = [
  {
    title: "Optimizar Rituales de Energía",
    description: "Refinar la secuencia matutina y nocturna para sostener el rendimiento.",
    status: "En ejecución",
  },
  {
    title: "Ampliar Red Estratégica",
    description: "Activar conexiones con mentores clave en dos nuevas industrias.",
    status: "En plan",
  },
  {
    title: "Documentar Sistema de Conocimiento",
    description: "Centralizar frameworks y aprendizajes en un manual vivo.",
    status: "En progreso",
  },
];

const overviewConfig: ChartConfig = {
  bienestar: {
    label: "Bienestar Integral",
    color: "hsl(12, 92%, 62%)",
  },
  vitalidad: {
    label: "Vitalidad Física",
    color: "hsl(266, 89%, 68%)",
  },
};

const momentumConfig: ChartConfig = {
  propósito: {
    label: "Propósito",
    color: "hsl(217, 91%, 60%)",
  },
  trascendencia: {
    label: "Trascendencia",
    color: "hsl(289, 84%, 66%)",
  },
};

const energyConfig: ChartConfig = {
  física: {
    label: "Salud Física",
    color: "hsl(158, 85%, 55%)",
  },
  mental: {
    label: "Salud Mental",
    color: "hsl(199, 89%, 58%)",
  },
};

const collaborationConfig: ChartConfig = {
  relaciones: {
    label: "Relaciones",
    color: "hsl(340, 90%, 60%)",
  },
  maestria: {
    label: "Maestría Profesional",
    color: "hsl(28, 95%, 58%)",
  },
};

const evolutionConfig: ChartConfig = {
  aprendizaje: {
    label: "Aprendizaje Continuo",
    color: "hsl(42, 98%, 60%)",
  },
  independencia: {
    label: "Independencia Financiera",
    color: "hsl(210, 85%, 62%)",
  },
};

export function OverviewSection() {
  const overviewId = useId();
  const momentumId = useId();
  const energyId = useId();
  const collaborationId = useId();
  const evolutionId = useId();

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryMetrics.map((metric) => (
          <Card
            key={metric.label}
            className={cn(
              "overflow-hidden border-none bg-gradient-to-br text-white shadow-xl",
              metric.gradient,
            )}
          >
            <CardHeader className="space-y-2">
              <CardDescription className="text-white/80">
                {metric.label}
              </CardDescription>
              <CardTitle className="text-3xl font-semibold">{metric.value}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm font-medium text-white/90">
              <span>{metric.subtitle}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 text-xs font-semibold text-white backdrop-blur">
                <span aria-hidden="true">▲</span>
                {metric.delta}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Cadencia de Bienestar Integral</CardTitle>
          <CardDescription>
            Evolución semanal de equilibrio físico y mental durante los últimos seis ciclos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={overviewConfig} className="h-[260px]">
            <AreaChart data={overviewTrendData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id={`${overviewId}-bienestar`} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-bienestar)" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="var(--color-bienestar)" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id={`${overviewId}-vitalidad`} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-vitalidad)" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="var(--color-vitalidad)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="4 8"
                vertical={false}
                stroke="hsl(var(--muted-foreground) / 0.2)"
              />
              <XAxis
                dataKey="week"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
              <Area
                type="monotone"
                dataKey="bienestar"
                stroke="var(--color-bienestar)"
                strokeWidth={2.5}
                fill={`url(#${overviewId}-bienestar)`}
              />
              <Area
                type="monotone"
                dataKey="vitalidad"
                stroke="var(--color-vitalidad)"
                strokeWidth={2.5}
                fill={`url(#${overviewId}-vitalidad)`}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Momentum de Propósito y Legado</CardTitle>
            <CardDescription>
              Proyección mensual del compromiso con iniciativas de impacto profundo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={momentumConfig} className="h-[240px]">
              <AreaChart data={momentumData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id={`${momentumId}-propósito`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="10%" stopColor="var(--color-propósito)" stopOpacity={0.55} />
                    <stop offset="90%" stopColor="var(--color-propósito)" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id={`${momentumId}-trascendencia`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="10%" stopColor="var(--color-trascendencia)" stopOpacity={0.55} />
                    <stop offset="90%" stopColor="var(--color-trascendencia)" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 6"
                  vertical={false}
                  stroke="hsl(var(--muted-foreground) / 0.18)"
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis hide />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="propósito"
                  stroke="var(--color-propósito)"
                  strokeWidth={2}
                  fill={`url(#${momentumId}-propósito)`}
                />
                <Area
                  type="monotone"
                  dataKey="trascendencia"
                  stroke="var(--color-trascendencia)"
                  strokeWidth={2}
                  fill={`url(#${momentumId}-trascendencia)`}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Balance Diario de Energía</CardTitle>
            <CardDescription>
              Comparativa entre carga física y claridad mental durante la semana.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={energyConfig} className="h-[240px]">
              <AreaChart data={energyBalanceData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id={`${energyId}-física`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="15%" stopColor="var(--color-física)" stopOpacity={0.6} />
                    <stop offset="85%" stopColor="var(--color-física)" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id={`${energyId}-mental`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="15%" stopColor="var(--color-mental)" stopOpacity={0.6} />
                    <stop offset="85%" stopColor="var(--color-mental)" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="2 6"
                  vertical={false}
                  stroke="hsl(var(--muted-foreground) / 0.16)"
                />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis hide />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="física"
                  stroke="var(--color-física)"
                  strokeWidth={2}
                  fill={`url(#${energyId}-física)`}
                />
                <Area
                  type="monotone"
                  dataKey="mental"
                  stroke="var(--color-mental)"
                  strokeWidth={2}
                  fill={`url(#${energyId}-mental)`}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle>Co-creación y Maestría</CardTitle>
            <CardDescription>
              Ritmo trimestral de colaboración estratégica y dominio profesional.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={collaborationConfig} className="h-[220px]">
              <AreaChart data={collaborationData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id={`${collaborationId}-relaciones`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="20%" stopColor="var(--color-relaciones)" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="var(--color-relaciones)" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id={`${collaborationId}-maestria`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="20%" stopColor="var(--color-maestria)" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="var(--color-maestria)" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 8"
                  vertical={false}
                  stroke="hsl(var(--muted-foreground) / 0.18)"
                />
                <XAxis
                  dataKey="cycle"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis hide />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="relaciones"
                  stroke="var(--color-relaciones)"
                  strokeWidth={2}
                  fill={`url(#${collaborationId}-relaciones)`}
                />
                <Area
                  type="monotone"
                  dataKey="maestria"
                  stroke="var(--color-maestria)"
                  strokeWidth={2}
                  fill={`url(#${collaborationId}-maestria)`}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Próximos Enfoques</CardTitle>
            <CardDescription>
              Prioridades activas para sostener la evolución multidimensional.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {focusAreas.map((focus) => (
              <div
                key={focus.title}
                className="rounded-lg border border-border/70 bg-muted/40 p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-foreground">{focus.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{focus.description}</p>
                <span className="mt-3 inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {focus.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Trayectoria de Aprendizaje & Libertad Financiera</CardTitle>
          <CardDescription>
            Integración progresiva de capacidades clave y crecimiento patrimonial.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={evolutionConfig} className="h-[240px]">
            <AreaChart data={evolutionData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id={`${evolutionId}-aprendizaje`} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="10%" stopColor="var(--color-aprendizaje)" stopOpacity={0.55} />
                  <stop offset="90%" stopColor="var(--color-aprendizaje)" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id={`${evolutionId}-independencia`} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="10%" stopColor="var(--color-independencia)" stopOpacity={0.55} />
                  <stop offset="90%" stopColor="var(--color-independencia)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 8"
                vertical={false}
                stroke="hsl(var(--muted-foreground) / 0.18)"
              />
              <XAxis
                dataKey="stage"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="aprendizaje"
                stroke="var(--color-aprendizaje)"
                strokeWidth={2}
                fill={`url(#${evolutionId}-aprendizaje)`}
              />
              <Area
                type="monotone"
                dataKey="independencia"
                stroke="var(--color-independencia)"
                strokeWidth={2}
                fill={`url(#${evolutionId}-independencia)`}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
