"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type FieldContextValue = {
  orientation: "vertical" | "horizontal";
};

const FieldContext = React.createContext<FieldContextValue>({
  orientation: "vertical",
});

type FieldProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "vertical" | "horizontal";
};

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = "vertical", ...props }, ref) => {
    return (
      <FieldContext.Provider value={{ orientation }}>
        <div
          ref={ref}
          className={cn(
            "space-y-4",
            orientation === "horizontal" && "space-y-0",
            className,
          )}
          {...props}
        />
      </FieldContext.Provider>
    );
  },
);
Field.displayName = "Field";

const FieldGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = React.useContext(FieldContext);
  return (
    <div
      ref={ref}
      className={cn(
        "grid gap-4",
        orientation === "horizontal" && "grid-cols-2 items-center gap-6",
        className,
      )}
      {...props}
    />
  );
});
FieldGroup.displayName = "FieldGroup";

const Fieldset = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-4 rounded-lg border border-border p-4", className)}
    {...props}
  />
));
Fieldset.displayName = "Fieldset";

const FieldItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-2", className)}
    {...props}
  />
));
FieldItem.displayName = "FieldItem";

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className,
    )}
    {...props}
  />
));
FieldLabel.displayName = "FieldLabel";

const FieldControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FieldControl.displayName = "FieldControl";

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FieldDescription.displayName = "FieldDescription";

const FieldMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-destructive", className)} {...props} />
));
FieldMessage.displayName = "FieldMessage";

const FieldLegend = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none", className)}
    {...props}
  />
));
FieldLegend.displayName = "FieldLegend";

export {
  Field,
  FieldGroup,
  Fieldset,
  FieldItem,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldMessage,
  FieldLegend,
};
