"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldGroup,
  FieldItem,
  FieldLabel,
  FieldLegend,
  FieldMessage,
  Fieldset,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

type DialogKey = "nutrition" | "exercise" | "rest" | "energy";

type BaseFormProps = {
  onSuccess: () => void;
};

type NutritionFormValues = {
  fecha: string;
  comidasPrincipales: number;
  calidadGeneral: number;
  hidratacion: number;
  desayunoSaludable: boolean;
  porcionesVegetales?: number;
  porcionesProcesados?: number;
  proteinaSuficiente: boolean;
  notas?: string;
  caloriasAprox?: number;
  peso?: number;
};

type ExerciseFormValues = {
  fecha: string;
  hizoEjercicio: boolean;
  tipoActividad: string[];
  duracion: number;
  intensidad: number;
  descripcion?: string;
  sensacionPost?: string;
  pasos?: number;
  distancia?: number;
  repeticiones?: string;
  calorias?: number;
};

type RestFormValues = {
  fecha: string;
  horasSueno: number;
  calidadSueno: number;
  horaDormir: string;
  horaDespertar: string;
  descansado: boolean;
  interrupciones?: number;
  siesta?: number;
  facilidadDormir?: string;
  pantallasAntes: boolean;
  cafeinaTarde: boolean;
  estres: boolean;
  notas?: string;
};

type EnergyFormValues = {
  fecha: string;
  nivelEnergiaGeneral: number;
  energiaManana: number;
  energiaTarde: number;
  estadoAnimo: string;
  estres: number;
  motivacion: number;
  concentracion: number;
  enfermo: boolean;
  sintomas: string[];
  energizantes: string[];
  tazasCafe?: number;
  comoTeSientes?: string;
};

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function NutritionForm({ onSuccess }: BaseFormProps) {
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm<NutritionFormValues>({
    defaultValues: {
      fecha: getTodayDate(),
      comidasPrincipales: 3,
      calidadGeneral: 5,
      hidratacion: 8,
      desayunoSaludable: false,
      proteinaSuficiente: false,
    },
  });

  const calidad = watch("calidadGeneral");

  const onSubmit = (values: NutritionFormValues) => {
    toast.success("Registro de nutrición guardado");
    reset();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Field>
        <Fieldset>
          <FieldLegend>Campos esenciales</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel htmlFor="fecha-nutricion">Fecha</FieldLabel>
              <FieldControl>
                <Input
                  id="fecha-nutricion"
                  type="date"
                  {...register("fecha", { required: "La fecha es requerida" })}
                />
                {errors.fecha && (
                  <FieldMessage>{errors.fecha.message}</FieldMessage>
                )}
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="comidas-nutricion">
                Comidas principales
              </FieldLabel>
              <FieldDescription>Número de comidas hoy (1-5)</FieldDescription>
              <FieldControl>
                <Input
                  id="comidas-nutricion"
                  type="number"
                  min={1}
                  max={5}
                  {...register("comidasPrincipales", {
                    required: "Indica cuántas comidas hiciste",
                    valueAsNumber: true,
                    min: { value: 1, message: "Debe ser al menos 1" },
                    max: { value: 5, message: "Máximo 5 comidas" },
                  })}
                />
                {errors.comidasPrincipales && (
                  <FieldMessage>{errors.comidasPrincipales.message}</FieldMessage>
                )}
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Calidad general</FieldLabel>
              <FieldDescription>
                {calidad} de 10 - ¿Qué tan saludable comiste hoy?
              </FieldDescription>
              <FieldControl>
                <Controller
                  control={control}
                  name="calidadGeneral"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(val) => field.onChange(val[0] ?? 1)}
                    />
                  )}
                />
              </FieldControl>
              {errors.calidadGeneral && (
                <FieldMessage>Selecciona un valor de 1 a 10</FieldMessage>
              )}
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="hidratacion-nutricion">Hidratación</FieldLabel>
              <FieldDescription>Vasos de agua (0-15)</FieldDescription>
              <FieldControl>
                <Input
                  id="hidratacion-nutricion"
                  type="number"
                  min={0}
                  max={15}
                  {...register("hidratacion", {
                    required: "Indica tu hidratación",
                    valueAsNumber: true,
                    min: { value: 0, message: "Mínimo 0" },
                    max: { value: 15, message: "Máximo 15" },
                  })}
                />
                {errors.hidratacion && (
                  <FieldMessage>{errors.hidratacion.message}</FieldMessage>
                )}
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <FieldLegend>Campos detallados</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel>Desayuno saludable</FieldLabel>
              <FieldControl className="flex items-center gap-3">
                <Controller
                  control={control}
                  name="desayunoSaludable"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <FieldDescription>
                  ¿Desayunaste algo nutritivo?
                </FieldDescription>
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="vegetales-nutricion">
                Vegetales / Frutas
              </FieldLabel>
              <FieldDescription>Porciones (0-10)</FieldDescription>
              <FieldControl>
                <Input
                  id="vegetales-nutricion"
                  type="number"
                  min={0}
                  max={10}
                  {...register("porcionesVegetales", {
                    setValueAs: (value) =>
                      value === "" ? undefined : Number(value),
                    min: { value: 0, message: "Mínimo 0" },
                    max: { value: 10, message: "Máximo 10" },
                  })}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="procesados-nutricion">
                Procesados / Chatarra
              </FieldLabel>
              <FieldDescription>Porciones (0-10)</FieldDescription>
              <FieldControl>
                <Input
                  id="procesados-nutricion"
                  type="number"
                  min={0}
                  max={10}
                  {...register("porcionesProcesados", {
                    setValueAs: (value) =>
                      value === "" ? undefined : Number(value),
                    min: { value: 0, message: "Mínimo 0" },
                    max: { value: 10, message: "Máximo 10" },
                  })}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Proteína suficiente</FieldLabel>
              <FieldControl className="flex items-center gap-3">
                <Controller
                  control={control}
                  name="proteinaSuficiente"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <FieldDescription>¿Consumiste suficiente proteína?</FieldDescription>
              </FieldControl>
            </FieldItem>
            <FieldItem className="sm:col-span-2">
              <FieldLabel htmlFor="notas-nutricion">Notas</FieldLabel>
              <FieldControl>
                <Textarea
                  id="notas-nutricion"
                  placeholder="Qué comiste, cómo te sentiste..."
                  {...register("notas")}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <FieldLegend>Métricas adicionales</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel htmlFor="calorias-nutricion">
                Calorías aprox.
              </FieldLabel>
              <FieldControl>
                <Input
                  id="calorias-nutricion"
                  type="number"
                  min={0}
                  {...register("caloriasAprox", {
                    setValueAs: (value) =>
                      value === "" ? undefined : Number(value),
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="peso-nutricion">Peso (kg)</FieldLabel>
              <FieldControl>
                <Input
                  id="peso-nutricion"
                  type="number"
                  step="0.1"
                  min={0}
                  {...register("peso", {
                    setValueAs: (value) =>
                      value === "" ? undefined : Number(value),
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>
      </Field>

      <DialogFooter>
        <Button type="submit">Guardar registro</Button>
      </DialogFooter>
    </form>
  );
}

const actividadOptions = [
  "cardio",
  "fuerza",
  "flexibilidad",
  "deporte",
  "caminata",
  "otro",
] as const;

const sensacionOptions = [
  { value: "energizado", label: "Energizado" },
  { value: "cansado_bien", label: "Cansado pero bien" },
  { value: "exhausto", label: "Exhausto" },
  { value: "adolorido", label: "Adolorido" },
  { value: "con_energia", label: "Con energía" },
] as const;

function ExerciseForm({ onSuccess }: BaseFormProps) {
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm<ExerciseFormValues>({
    defaultValues: {
      fecha: getTodayDate(),
      hizoEjercicio: true,
      tipoActividad: ["cardio"],
      duracion: 30,
      intensidad: 5,
    },
  });

  const intensidad = watch("intensidad");

  const onSubmit = (values: ExerciseFormValues) => {
    toast.success("Registro de ejercicio guardado");
    reset();
    onSuccess();
  };

  const toggleActividad = (value: string, selected: string[]) => {
    if (selected.includes(value)) {
      return selected.filter((item) => item !== value);
    }
    return [...selected, value];
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Field>
        <Fieldset>
          <FieldLegend>Campos esenciales</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel htmlFor="fecha-ejercicio">Fecha</FieldLabel>
              <FieldControl>
                <Input
                  id="fecha-ejercicio"
                  type="date"
                  {...register("fecha", { required: "La fecha es requerida" })}
                />
                {errors.fecha && (
                  <FieldMessage>{errors.fecha.message}</FieldMessage>
                )}
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>¿Hiciste ejercicio?</FieldLabel>
              <FieldControl className="flex items-center gap-3">
                <Controller
                  control={control}
                  name="hizoEjercicio"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem className="sm:col-span-2">
              <FieldLabel>Tipo de actividad</FieldLabel>
              <FieldDescription>
                Selecciona todas las opciones que apliquen
              </FieldDescription>
              <FieldControl className="grid gap-2 sm:grid-cols-2">
                <Controller
                  control={control}
                  name="tipoActividad"
                  render={({ field }) => (
                    <>
                      {actividadOptions.map((option) => (
                        <Label
                          key={option}
                          className="flex cursor-pointer items-center gap-3 rounded border border-border/50 bg-muted/30 px-3 py-2 transition hover:bg-muted"
                        >
                          <Checkbox
                            checked={field.value.includes(option)}
                            onCheckedChange={() =>
                              field.onChange(
                                toggleActividad(option, field.value),
                              )
                            }
                          />
                          <span className="capitalize">{option}</span>
                        </Label>
                      ))}
                    </>
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="duracion-ejercicio">Duración</FieldLabel>
              <FieldDescription>Minutos totales</FieldDescription>
              <FieldControl>
                <Input
                  id="duracion-ejercicio"
                  type="number"
                  min={0}
                  {...register("duracion", {
                    valueAsNumber: true,
                    required: "Ingresa la duración",
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
                {errors.duracion && (
                  <FieldMessage>{errors.duracion.message}</FieldMessage>
                )}
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Intensidad</FieldLabel>
              <FieldDescription>{intensidad} de 10</FieldDescription>
              <FieldControl>
                <Controller
                  control={control}
                  name="intensidad"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(val) => field.onChange(val[0] ?? 1)}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <FieldLegend>Campos detallados</FieldLegend>
          <FieldGroup>
            <FieldItem className="sm:col-span-2">
              <FieldLabel htmlFor="descripcion-ejercicio">
                Descripción
              </FieldLabel>
              <FieldControl>
                <Textarea
                  id="descripcion-ejercicio"
                  placeholder="Ej: carrera de 5km, rutina torso..."
                  {...register("descripcion")}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Sensación post-ejercicio</FieldLabel>
              <FieldControl>
                <Controller
                  control={control}
                  name="sensacionPost"
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        {sensacionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="pasos-ejercicio">Pasos del día</FieldLabel>
              <FieldControl>
                <Input
                  id="pasos-ejercicio"
                  type="number"
                  min={0}
                  {...register("pasos", {
                    setValueAs: (value) =>
                      value === "" ? undefined : Number(value),
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <FieldLegend>Métricas</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel htmlFor="distancia-ejercicio">Distancia (km)</FieldLabel>
              <FieldControl>
                <Input
                  id="distancia-ejercicio"
                  type="number"
                  step="0.1"
                  min={0}
                  {...register("distancia", {
                    setValueAs: (value) =>
                      value === "" ? undefined : Number(value),
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="repeticiones-ejercicio">
                Repeticiones / Sets
              </FieldLabel>
              <FieldControl>
                <Input
                  id="repeticiones-ejercicio"
                  placeholder="Ej: 3x10"
                  {...register("repeticiones")}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="calorias-ejercicio">
                Calorías quemadas
              </FieldLabel>
              <FieldControl>
                <Input
                  id="calorias-ejercicio"
                  type="number"
                  min={0}
                  {...register("calorias", {
                    setValueAs: (value) =>
                      value === "" ? undefined : Number(value),
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>
      </Field>

      <DialogFooter>
        <Button type="submit">Guardar registro</Button>
      </DialogFooter>
    </form>
  );
}

const facilidadDormirOptions = [
  { value: "rapido", label: "Me dormí rápido (&lt;15 min)" },
  { value: "normal", label: "Normal (15-30 min)" },
  { value: "costo", label: "Me costó dormir (&gt;30 min)" },
  { value: "insomnio", label: "Insomnio" },
] as const;

function RestForm({ onSuccess }: BaseFormProps) {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RestFormValues>({
    defaultValues: {
      fecha: getTodayDate(),
      horasSueno: 7.5,
      calidadSueno: 6,
      horaDormir: "22:30",
      horaDespertar: "06:30",
      descansado: false,
      pantallasAntes: false,
      cafeinaTarde: false,
      estres: false,
    },
  });

  const onSubmit = (values: RestFormValues) => {
    toast.success("Registro de descanso guardado");
    reset();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Field>
        <Fieldset>
          <FieldLegend>Campos esenciales</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel htmlFor="fecha-descanso">Fecha</FieldLabel>
              <FieldControl>
                <Input
                  id="fecha-descanso"
                  type="date"
                  {...register("fecha", { required: "La fecha es requerida" })}
                />
                {errors.fecha && (
                  <FieldMessage>{errors.fecha.message}</FieldMessage>
                )}
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="horas-descanso">Horas de sueño</FieldLabel>
              <FieldDescription>0 - 14 horas</FieldDescription>
              <FieldControl>
                <Input
                  id="horas-descanso"
                  type="number"
                  step="0.1"
                  min={0}
                  max={14}
                  {...register("horasSueno", {
                    valueAsNumber: true,
                    required: "Indica las horas de sueño",
                    min: { value: 0, message: "No puede ser negativo" },
                    max: { value: 14, message: "Máximo 14 horas" },
                  })}
                />
                {errors.horasSueno && (
                  <FieldMessage>{errors.horasSueno.message}</FieldMessage>
                )}
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Calidad del sueño</FieldLabel>
              <FieldControl>
                <Controller
                  control={control}
                  name="calidadSueno"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(val) => field.onChange(val[0] ?? 1)}
                    />
                  )}
                />
              </FieldControl>
              {errors.calidadSueno && (
                <FieldMessage>Selecciona un valor de 1 a 10</FieldMessage>
              )}
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="hora-dormir">Hora de dormir</FieldLabel>
              <FieldControl>
                <Input
                  id="hora-dormir"
                  type="time"
                  {...register("horaDormir", {
                    required: "Indica la hora de dormir",
                  })}
                />
                {errors.horaDormir && (
                  <FieldMessage>{errors.horaDormir.message}</FieldMessage>
                )}
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="hora-despertar">
                Hora de despertar
              </FieldLabel>
              <FieldControl>
                <Input
                  id="hora-despertar"
                  type="time"
                  {...register("horaDespertar", {
                    required: "Indica la hora de despertar",
                  })}
                />
                {errors.horaDespertar && (
                  <FieldMessage>{errors.horaDespertar.message}</FieldMessage>
                )}
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <FieldLegend>Campos detallados</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel>¿Te despertaste descansado?</FieldLabel>
              <FieldControl className="flex items-center gap-3">
                <Controller
                  control={control}
                  name="descansado"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="interrupciones-descanso">
                Interrupciones
              </FieldLabel>
              <FieldDescription>
                ¿Cuántas veces te despertaste?
              </FieldDescription>
              <FieldControl>
                <Input
                  id="interrupciones-descanso"
                  type="number"
                  min={0}
                  {...register("interrupciones", {
                    setValueAs: (value) =>
                      value === "" ? undefined : Number(value),
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel htmlFor="siestas-descanso">Siestas (min)</FieldLabel>
              <FieldControl>
                <Input
                  id="siestas-descanso"
                  type="number"
                  min={0}
                  {...register("siesta", {
                    setValueAs: (value) =>
                      value === "" ? undefined : Number(value),
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Facilidad para dormir</FieldLabel>
              <FieldControl>
                <Controller
                  control={control}
                  name="facilidadDormir"
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        {facilidadDormirOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <FieldLegend>Factores</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel>Pantallas antes de dormir</FieldLabel>
              <FieldControl className="flex items-center gap-3">
                <Controller
                  control={control}
                  name="pantallasAntes"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Cafeína tarde</FieldLabel>
              <FieldControl className="flex items-center gap-3">
                <Controller
                  control={control}
                  name="cafeinaTarde"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Estrés / Ansiedad</FieldLabel>
              <FieldControl className="flex items-center gap-3">
                <Controller
                  control={control}
                  name="estres"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem className="sm:col-span-2">
              <FieldLabel htmlFor="notas-descanso">Notas</FieldLabel>
              <FieldControl>
                <Textarea
                  id="notas-descanso"
                  placeholder="Sueños, sensaciones..."
                  {...register("notas")}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>
      </Field>

      <DialogFooter>
        <Button type="submit">Guardar registro</Button>
      </DialogFooter>
    </form>
  );
}

const estadoAnimoOptions = [
  { value: "excelente", label: "Excelente" },
  { value: "bien", label: "Bien" },
  { value: "normal", label: "Normal" },
  { value: "bajo", label: "Bajo" },
  { value: "mal", label: "Mal" },
] as const;

const sintomasOptions = [
  { value: "dolor_cabeza", label: "Dolor de cabeza" },
  { value: "dolor_muscular", label: "Dolor muscular" },
  { value: "fatiga", label: "Fatiga" },
  { value: "malestar_estomacal", label: "Malestar estomacal" },
  { value: "congestionado", label: "Congestionado" },
  { value: "otro", label: "Otro" },
] as const;

const energizantesOptions = [
  { value: "cafe", label: "Café" },
  { value: "bebida_energetica", label: "Bebida energética" },
  { value: "te", label: "Té" },
  { value: "ninguno", label: "Ninguno" },
] as const;

function EnergyForm({ onSuccess }: BaseFormProps) {
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<EnergyFormValues>({
    defaultValues: {
      fecha: getTodayDate(),
      nivelEnergiaGeneral: 6,
      energiaManana: 6,
      energiaTarde: 5,
      estadoAnimo: "normal",
      estres: 4,
      motivacion: 5,
      concentracion: 5,
      enfermo: false,
      sintomas: [],
      energizantes: [],
    },
  });

  const energiaGeneral = watch("nivelEnergiaGeneral");
  const energiaManana = watch("energiaManana");
  const energiaTarde = watch("energiaTarde");
  const estres = watch("estres");
  const motivacion = watch("motivacion");
  const concentracion = watch("concentracion");
  const energizantes = watch("energizantes");

  const onSubmit = (values: EnergyFormValues) => {
    toast.success("Registro de energía vital guardado");
    reset();
    onSuccess();
  };

  const toggleValue = (value: string, selected: string[]) => {
    if (selected.includes(value)) {
      return selected.filter((item) => item !== value);
    }
    return [...selected, value];
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Field>
        <Fieldset>
          <FieldLegend>Campos esenciales</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel htmlFor="fecha-energia">Fecha</FieldLabel>
              <FieldControl>
                <Input
                  id="fecha-energia"
                  type="date"
                  {...register("fecha", { required: true })}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Nivel de energía general</FieldLabel>
              <FieldDescription>{energiaGeneral} de 10</FieldDescription>
              <FieldControl>
                <Controller
                  control={control}
                  name="nivelEnergiaGeneral"
                  render={({ field }) => (
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(val) => field.onChange(val[0] ?? 1)}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Energía al despertar</FieldLabel>
              <FieldDescription>{energiaManana} de 10</FieldDescription>
              <FieldControl>
                <Controller
                  control={control}
                  name="energiaManana"
                  render={({ field }) => (
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(val) => field.onChange(val[0] ?? 1)}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Energía tarde/noche</FieldLabel>
              <FieldDescription>{energiaTarde} de 10</FieldDescription>
              <FieldControl>
                <Controller
                  control={control}
                  name="energiaTarde"
                  render={({ field }) => (
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(val) => field.onChange(val[0] ?? 1)}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <FieldLegend>Estado mental / físico</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel>Estado de ánimo</FieldLabel>
              <FieldControl>
                <Controller
                  control={control}
                  name="estadoAnimo"
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu estado" />
                      </SelectTrigger>
                      <SelectContent>
                        {estadoAnimoOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Nivel de estrés</FieldLabel>
              <FieldDescription>{estres} de 10</FieldDescription>
              <FieldControl>
                <Controller
                  control={control}
                  name="estres"
                  render={({ field }) => (
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(val) => field.onChange(val[0] ?? 1)}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Motivación</FieldLabel>
              <FieldDescription>{motivacion} de 10</FieldDescription>
              <FieldControl>
                <Controller
                  control={control}
                  name="motivacion"
                  render={({ field }) => (
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(val) => field.onChange(val[0] ?? 1)}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem>
              <FieldLabel>Concentración</FieldLabel>
              <FieldDescription>{concentracion} de 10</FieldDescription>
              <FieldControl>
                <Controller
                  control={control}
                  name="concentracion"
                  render={({ field }) => (
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(val) => field.onChange(val[0] ?? 1)}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <FieldLegend>Factores</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel>¿Te enfermaste hoy?</FieldLabel>
              <FieldControl className="flex items-center gap-3">
                <Controller
                  control={control}
                  name="enfermo"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem className="sm:col-span-2">
              <FieldLabel>Síntomas</FieldLabel>
              <FieldControl className="grid gap-2 sm:grid-cols-2">
                <Controller
                  control={control}
                  name="sintomas"
                  render={({ field }) => (
                    <>
                      {sintomasOptions.map((option) => (
                        <Label
                          key={option.value}
                          className="flex cursor-pointer items-center gap-3 rounded border border-border/50 bg-muted/30 px-3 py-2 transition hover:bg-muted"
                        >
                          <Checkbox
                            checked={field.value.includes(option.value)}
                            onCheckedChange={() =>
                              field.onChange(
                                toggleValue(option.value, field.value),
                              )
                            }
                          />
                          <span>{option.label}</span>
                        </Label>
                      ))}
                    </>
                  )}
                />
              </FieldControl>
            </FieldItem>
            <FieldItem className="sm:col-span-2">
              <FieldLabel>Energizantes consumidos</FieldLabel>
              <FieldControl className="grid gap-2 sm:grid-cols-2">
                <Controller
                  control={control}
                  name="energizantes"
                  render={({ field }) => (
                    <>
                      {energizantesOptions.map((option) => (
                        <Label
                          key={option.value}
                          className="flex cursor-pointer items-center gap-3 rounded border border-border/50 bg-muted/30 px-3 py-2 transition hover:bg-muted"
                        >
                          <Checkbox
                            checked={field.value.includes(option.value)}
                            onCheckedChange={() =>
                              field.onChange(
                                toggleValue(option.value, field.value),
                              )
                            }
                          />
                          <span>{option.label}</span>
                        </Label>
                      ))}
                    </>
                  )}
                />
              </FieldControl>
            </FieldItem>
            {energizantes.includes("cafe") && (
              <FieldItem>
                <FieldLabel htmlFor="tazas-cafe">
                  ¿Cuántas tazas de café?
                </FieldLabel>
                <FieldControl>
                  <Input
                    id="tazas-cafe"
                    type="number"
                    min={0}
                    {...register("tazasCafe", {
                      setValueAs: (value) =>
                        value === "" ? undefined : Number(value),
                      min: { value: 0, message: "No puede ser negativo" },
                    })}
                  />
                </FieldControl>
              </FieldItem>
            )}
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <FieldLegend>Notas</FieldLegend>
          <FieldGroup>
            <FieldItem>
              <FieldLabel htmlFor="notas-energia">¿Cómo te sientes?</FieldLabel>
              <FieldControl>
                <Textarea
                  id="notas-energia"
                  placeholder="Registra sensaciones o eventos importantes..."
                  {...register("comoTeSientes")}
                />
              </FieldControl>
            </FieldItem>
          </FieldGroup>
        </Fieldset>
      </Field>

      <DialogFooter>
        <Button type="submit">Guardar registro</Button>
      </DialogFooter>
    </form>
  );
}

type CardConfig = {
  key: DialogKey;
  title: string;
  description: string;
  Form: (props: BaseFormProps) => React.JSX.Element;
};

const cards: CardConfig[] = [
  {
    key: "nutrition",
    title: "🥗 Nutrición",
    description:
      "Registra tus hábitos alimenticios diarios para detectar patrones que impactan tu energía.",
    Form: NutritionForm,
  },
  {
    key: "exercise",
    title: "💪 Ejercicio",
    description:
      "Da seguimiento a tu movimiento, intensidad y sensaciones para sostener un cuerpo resistente.",
    Form: ExerciseForm,
  },
  {
    key: "rest",
    title: "😴 Descanso",
    description:
      "Monitorea tus horas de sueño, interrupciones y hábitos nocturnos para mejorar tu descanso.",
    Form: RestForm,
  },
  {
    key: "energy",
    title: "⚡ Energía vital",
    description:
      "Evalúa tus niveles de energía, estado mental y factores externos que impactan tu bienestar.",
    Form: EnergyForm,
  },
];

export function PhysicalHealthSection() {
  const [activeDialog, setActiveDialog] = useState<DialogKey | null>(null);

  return (
    <section className="space-y-6 rounded-lg border border-border bg-background p-6 shadow-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Salud Física</h2>
        <p className="text-sm text-muted-foreground">
          Evalúa tu energía, hábitos de movimiento, nutrición y descanso para
          sostener un cuerpo resiliente.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map(({ key, title, description, Form }) => (
          <Dialog
            key={key}
            open={activeDialog === key}
            onOpenChange={(open) => setActiveDialog(open ? key : null)}
          >
            <div className="flex h-full flex-col justify-between rounded-md border border-border/60 bg-card p-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <DialogTrigger asChild>
                <Button
                  className="mt-4 w-full"
                  onClick={() => setActiveDialog(key)}
                >
                  Registrar
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              <Form onSuccess={() => setActiveDialog(null)} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}

export default PhysicalHealthSection;
