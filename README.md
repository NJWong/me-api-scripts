# ME-API Admin Scripts
This repo contains admin scripts for [ME-API](https://github.com/NJWong/me-api-cloudflare-worker).

Data for the database is stored in .csv files here, and then uploaded to a Planetscale DB using the `@planetscale/database` JS library, and DrizzleORM.

## Purpose
It's simply more convenient to reset/seed the DB using these scripts instead of creating a dashboard to do the same thing.

It also puts the data in `src/db/data` under version control.

## Setup

This project uses [Bun](https://bun.sh/) - an all-in one JavaScript runtime with built-in TypeScript support and blazingly fast compared to Node.js.

Install Bun ([docs](https://bun.sh/docs/installation)):

```bash
curl -fsSL https://bun.sh/install | bash 
```

Create an `.env.local` file and populate it with the following Planetscale connection details. This should connect to your `develop` branch of your database.

```
DATABASE_HOST=planetscale_host
DATABASE_USERNAME=planetscale_username
DATABASE_PASSWORD=planetscale_password
```

Create another file `.env` and populate it with the same above Planetscale connection details. These details should be connected to the `main` branch of your database.

## Available Scripts
- `bun pull-schema` - pull the schema of your database and save it to `src/drizzle/schema.ts`
- `bun push-schema` - push the schema found at `src/drizzle/schema.ts` to your database
- `bun db-reset` - delete all rows in all tables of your database
- `bun db-seed` - seed all data found in the .csv files to your database