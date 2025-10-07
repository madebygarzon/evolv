import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed de los 8 pilares...')

  const pilares = [
    { nombre: 'Salud Física' },
    { nombre: 'Salud Mental' },
    { nombre: 'Propósito y Significado' },
    { nombre: 'Relaciones' },
    { nombre: 'Maestría Profesional' },
    { nombre: 'Independencia Financiera' },
    { nombre: 'Aprendizaje Continuo' },
    { nombre: 'Trascendencia y Legado' }
  ]

  for (const pilar of pilares) {
    const created = await prisma.pilar.upsert({
      where: { nombre: pilar.nombre },
      update: {},
      create: { nombre: pilar.nombre }
    })
    console.log(`✅ Pilar creado: ${created.nombre}`)
  }

  console.log('🎉 Seed completado!')
}

main()
  .catch((e) => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })