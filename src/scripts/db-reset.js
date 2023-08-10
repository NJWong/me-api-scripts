import dotenv from 'dotenv'
import { Client } from '@planetscale/database'

dotenv.config({ path: `.env.${process.env.DB_BRANCH}`})

async function reset() {
  console.log('--- db:reset starting ---')

  const client = new Client({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  })

  const connection = client.connection()

  console.log('Resetting genders...')
  await connection.execute('DELETE FROM genders')

  console.log('Resetting species...')
  await connection.execute('DELETE FROM species')

  console.log('Resetting characters...')
  await connection.execute('DELETE FROM characters')

  console.log('--- db:reset completed ---\n')
}

reset()