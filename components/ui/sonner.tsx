"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      toastOptions={{
        classNames: {
          toast:
            "group pointer-events-auto flex w-full max-w-sm items-center gap-2 rounded-md border border-border bg-background p-4 shadow-lg transition-all",
          title: "text-sm font-semibold",
          description: "text-sm text-muted-foreground",
          actionButton:
            "inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        },
      }}
    />
  );
}
