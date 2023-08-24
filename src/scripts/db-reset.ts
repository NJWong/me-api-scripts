import { connect } from '@planetscale/database'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { genders, species, characters, shipClasses, affiliations, ships } from '../drizzle/schema'

console.log('--- db-reset starting ---')

const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
})

const db = drizzle(connection)

console.log('Resetting genders table...')
await db.delete(genders)

console.log('Resetting species table...')
await db.delete(species)

console.log('Resetting characters table...')
await db.delete(characters)

console.log('Resetting shipClasses table...')
await db.delete(shipClasses)

console.log('Resetting affiliations table...')
await db.delete(affiliations)

console.log('Resetting ships table...')
await db.delete(ships)

console.log('--- db-reset completed ---\n')