import dotenv from 'dotenv'
import fs from 'fs'
import csv from 'csv-parser'
import { Client } from '@planetscale/database'

dotenv.config({ path: `.env.${process.env.DB_BRANCH}`})

function setup() {
  console.log('--- db:setup starting ---')

  const client = new Client({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  })

  const connection = client.connection()

  console.warn('Seeding gender data...')
  fs.createReadStream('src/data/genders.csv')
    .pipe(csv())
    .on('data', async (gender) => {
      await connection.execute(`INSERT INTO genders (id, name) VALUES (${gender.id}, "${gender.name}")`)
    })

  console.warn('Seeding species data...')
  fs.createReadStream('src/data/species.csv')
    .pipe(csv())
    .on('data', async (species) => {
      await connection.execute(`INSERT INTO species (id, name) VALUES (${species.id}, "${species.name}")`)
    })

  console.warn('Seeding character data...')
  fs.createReadStream('src/data/characters.csv')
    .pipe(csv())
    .on('data', async (character) => {
      await connection.execute(`INSERT INTO characters (id, name, species, gender, class) VALUES (${character.id}, "${character.name}", ${character.species}, ${character.gender}, "${character.class}")`)
    })

  console.log('--- db:setup completed ---\n')
}

setup()