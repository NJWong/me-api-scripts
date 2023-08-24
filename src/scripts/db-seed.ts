import { connect } from '@planetscale/database'
import { PlanetScaleDatabase, drizzle } from 'drizzle-orm/planetscale-serverless'
import { genders, species, characters, shipClasses, affiliations, ships } from '../drizzle/schema'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'
import Papa from 'papaparse'

async function seedGenders(db: PlanetScaleDatabase<Record<string, never>>) {
  console.log('Seeding genders table...')

  // 1. Read CSV file
  const gendersFile = Bun.file('src/data/genders.csv')
  const csvString = await gendersFile.text()

  // 2. Parse CSV file
  const parsedCsv = Papa.parse(csvString, { header: true, dynamicTyping: true })

  // 3. Validate CSV data
  const insertGendersSchema = createInsertSchema(genders)
  const validatedData: Array<z.TypeOf<typeof insertGendersSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertGendersSchema.parse(row)

    validatedData.push(validatedRow)
  }

  // 4. Insert validated data into database
  await db.insert(genders).values(validatedData)
}

async function seedSpecies(db: PlanetScaleDatabase<Record<string, never>>) {
  console.log('Seeding species table...')

  // 1. Read CSV file
  const speciesFile = Bun.file('src/data/species.csv')
  const csvString = await speciesFile.text()

  // 2. Parse CSV file
  const parsedCsv = Papa.parse(csvString, { header: true, dynamicTyping: true })

  // 3. Validate CSV data
  const insertSpeciesSchema = createInsertSchema(species)
  const validatedData: Array<z.TypeOf<typeof insertSpeciesSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertSpeciesSchema.parse(row)

    validatedData.push(validatedRow)
  }

  // 4. Insert validated data into database
  await db.insert(species).values(validatedData)
}

async function seedCharacters(db: PlanetScaleDatabase<Record<string, never>>) {
  console.log('Seeding characters table...')

  // 1. Read CSV file
  const charactersFile = Bun.file('src/data/characters.csv')
  const csvString = await charactersFile.text()

  // 2. Parse CSV file
  const parsedCsv = Papa.parse(csvString, { header: true, dynamicTyping: true })

  // 3. Validate CSV data
  const insertCharactersSchema = createInsertSchema(characters)
  const validatedData: Array<z.TypeOf<typeof insertCharactersSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertCharactersSchema.parse(row)

    validatedData.push(validatedRow)
  }

  // 4. Insert validated data into database
  await db.insert(characters).values(validatedData)
}

async function seedShips(db: PlanetScaleDatabase<Record<string, never>>) {
  console.log('Seeding ships table...')

  // 1. Read CSV file
  const shipsFile = Bun.file('src/data/ships.csv')
  const csvString = await shipsFile.text()

  // 2. Parse CSV file
  const parsedCsv = Papa.parse(csvString, { header: true, dynamicTyping: true })

  // 3. Validate CSV data
  const insertShipsSchema = createInsertSchema(ships)
  const validatedData: Array<z.TypeOf<typeof insertShipsSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertShipsSchema.parse(row)

    validatedData.push(validatedRow)
  }

  // 4. Insert validated data into database
  await db.insert(ships).values(validatedData)
}

async function seedShipClasses(db: PlanetScaleDatabase<Record<string, never>>) {
  console.log('Seeding shipClasses table...')

  // 1. Read CSV file
  const shipClassesFile = Bun.file('src/data/shipClasses.csv')
  const csvString = await shipClassesFile.text()

  // 2. Parse CSV file
  const parsedCsv = Papa.parse(csvString, { header: true, dynamicTyping: true })

  // 3. Validate CSV data
  const insertShipClassesSchema = createInsertSchema(shipClasses)
  const validatedData: Array<z.TypeOf<typeof insertShipClassesSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertShipClassesSchema.parse(row)

    validatedData.push(validatedRow)
  }

  // 4. Insert validated data into database
  await db.insert(shipClasses).values(validatedData)
}

async function seedAffiliations(db: PlanetScaleDatabase<Record<string, never>>) {
  console.log('Seeding affiliations table...')

  // 1. Read CSV file
  const affiliationsFile = Bun.file('src/data/affiliations.csv')
  const csvString = await affiliationsFile.text()

  // 2. Parse CSV file
  const parsedCsv = Papa.parse(csvString, { header: true, dynamicTyping: true })

  // 3. Validate CSV data
  const insertAffiliationsSchema = createInsertSchema(affiliations)
  const validatedData: Array<z.TypeOf<typeof insertAffiliationsSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertAffiliationsSchema.parse(row)

    validatedData.push(validatedRow)
  }

  // 4. Insert validated data into database
  await db.insert(affiliations).values(validatedData)
}

async function main() {
  console.log('--- db-seed starting ---')

  const connection = connect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  })

  const db = drizzle(connection)

  await seedGenders(db)
  await seedSpecies(db)
  await seedCharacters(db)
  await seedShipClasses(db)
  await seedAffiliations(db)
  await seedShips(db)

  console.log('--- db-seed completed ---\n')
}

main()