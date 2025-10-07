-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pilar" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pilar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros_nutricion" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pilarId" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comidasPrincipales" INTEGER NOT NULL,
    "calidadGeneral" INTEGER NOT NULL,
    "hidratacion" INTEGER NOT NULL,
    "desayunoSaludable" BOOLEAN DEFAULT false,
    "porcionesVegetales" INTEGER DEFAULT 0,
    "porcionesProcesados" INTEGER DEFAULT 0,
    "proteinaSuficiente" BOOLEAN DEFAULT false,
    "notas" TEXT,
    "caloriasAprox" INTEGER,
    "peso" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registros_nutricion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros_ejercicio" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pilarId" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hizoEjercicio" BOOLEAN NOT NULL,
    "tipoActividad" TEXT[],
    "duracion" INTEGER NOT NULL,
    "intensidad" INTEGER NOT NULL,
    "descripcion" TEXT,
    "sensacionPost" TEXT,
    "pasos" INTEGER,
    "distancia" DOUBLE PRECISION,
    "repeticiones" TEXT,
    "calorias" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registros_ejercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros_descanso" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pilarId" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "horasSueno" DOUBLE PRECISION NOT NULL,
    "calidadSueno" INTEGER NOT NULL,
    "horaDormir" TEXT NOT NULL,
    "horaDespertar" TEXT NOT NULL,
    "descansado" BOOLEAN DEFAULT false,
    "interrupciones" INTEGER DEFAULT 0,
    "siesta" INTEGER,
    "facilidadDormir" TEXT,
    "pantallasAntes" BOOLEAN DEFAULT false,
    "cafeinaTarde" BOOLEAN DEFAULT false,
    "estres" BOOLEAN DEFAULT false,
    "notas" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registros_descanso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros_energia_vital" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pilarId" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nivelEnergiaGeneral" INTEGER NOT NULL,
    "energiaManana" INTEGER NOT NULL,
    "energiaTarde" INTEGER NOT NULL,
    "estadoAnimo" TEXT NOT NULL,
    "estres" INTEGER NOT NULL,
    "motivacion" INTEGER NOT NULL,
    "concentracion" INTEGER NOT NULL,
    "enfermo" BOOLEAN NOT NULL DEFAULT false,
    "sintomas" TEXT[],
    "energizantes" TEXT[],
    "tazasCafe" INTEGER DEFAULT 0,
    "comoTeSientes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registros_energia_vital_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "registros_nutricion" ADD CONSTRAINT "registros_nutricion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_nutricion" ADD CONSTRAINT "registros_nutricion_pilarId_fkey" FOREIGN KEY ("pilarId") REFERENCES "Pilar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_ejercicio" ADD CONSTRAINT "registros_ejercicio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_ejercicio" ADD CONSTRAINT "registros_ejercicio_pilarId_fkey" FOREIGN KEY ("pilarId") REFERENCES "Pilar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_descanso" ADD CONSTRAINT "registros_descanso_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_descanso" ADD CONSTRAINT "registros_descanso_pilarId_fkey" FOREIGN KEY ("pilarId") REFERENCES "Pilar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_energia_vital" ADD CONSTRAINT "registros_energia_vital_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_energia_vital" ADD CONSTRAINT "registros_energia_vital_pilarId_fkey" FOREIGN KEY ("pilarId") REFERENCES "Pilar"("id") ON DELETE CASCADE ON UPDATE CASCADE;
