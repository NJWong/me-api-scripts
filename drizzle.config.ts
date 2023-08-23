import type { Config } from 'drizzle-kit'

export default {
  schema: './src/drizzle/schema.ts',
  out: './src/drizzle',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/me-api?ssl={"rejectUnauthorized":true}`,
  }
} satisfies Config