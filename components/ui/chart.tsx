"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  type TooltipProps,
} from "recharts";

import { cn } from "@/lib/utils";

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    color?: string;
  }
>;

const ChartConfigContext = React.createContext<ChartConfig | null>(null);

export function useChartConfig() {
  const context = React.useContext(ChartConfigContext);
  if (!context) {
    throw new Error("useChartConfig must be used within a ChartContainer");
  }
  return context;
}

type ChartContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  config: ChartConfig;
  children: React.ReactElement;
};

export function ChartContainer({
  config,
  className,
  children,
  style,
  ...props
}: ChartContainerProps) {
  const colorVars = React.useMemo(() => {
    return Object.entries(config).reduce(
      (acc, [key, value]) => {
        if (value?.color) {
          acc[`--color-${key}` as keyof React.CSSProperties] = value.color;
        }
        return acc;
      },
      {} as React.CSSProperties,
    );
  }, [config]);

  return (
    <ChartConfigContext.Provider value={config}>
      <div
        className={cn("relative h-[220px] w-full", className)}
        style={{ ...colorVars, ...style }}
        {...props}
      >
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </ChartConfigContext.Provider>
  );
}

type ChartTooltipProps = React.ComponentProps<typeof RechartsTooltip>;

export function ChartTooltip(props: ChartTooltipProps) {
  return <RechartsTooltip {...props} wrapperStyle={{ outline: "none" }} />;
}

type ChartTooltipContentProps = TooltipProps<number, string> & {
  className?: string;
  indicator?: "dot" | "line";
  hideLabel?: boolean;
};

export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  indicator = "dot",
  hideLabel = false,
}: ChartTooltipContentProps) {
  const config = React.useContext(ChartConfigContext);

  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "rounded-md border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-lg backdrop-blur-sm",
        className,
      )}
    >
      {!hideLabel && label ? (
        <div className="mb-1 font-semibold leading-none text-foreground">
          {label}
        </div>
      ) : null}
      <div className="grid gap-1">
        {payload.map((item) => {
          const key = String(item.dataKey ?? item.name ?? "value");
          const chartItem = config ? config[key] : undefined;
          const resolvedColor =
            chartItem?.color ?? (item.color as string | undefined) ?? `var(--color-${key})`;
          const resolvedLabel =
            chartItem?.label ?? item.name ?? key.charAt(0).toUpperCase() + key.slice(1);

          return (
            <div key={key} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex h-2.5 w-2.5 rounded-full",
                    indicator === "line" ? "h-1 w-3 rounded-sm" : "h-2.5 w-2.5 rounded-full",
                  )}
                  style={{ backgroundColor: resolvedColor }}
                  aria-hidden="true"
                />
                <span className="leading-none text-foreground">{resolvedLabel}</span>
              </span>
              <span className="font-semibold leading-none text-foreground">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
