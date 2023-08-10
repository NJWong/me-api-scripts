# ME-API Scripts
This repo contains admin scripts for [ME-API](https://github.com/NJWong/me-api-cloudflare-worker).

Data for the database is stored in .csv files here, and then uploaded to the Planetscale DB using the `@planetscale/database` JS library.

## Purpose
It's simply more convenient to reset/seed the DB using these scripts instead of creating a dashboard to do the same thing.

It also lets us use version control for the data in `src/data`.

## Setup

Install dependencies:
```
npm install
```

Create two `.env` files:
1. `.env.main`
2. `.env.dev`

In each, specify the environment variables to connect to your desired Planetscale DB. The `.env.main` will contain the credentials for the `main` production branch. The `.env.dev` will contain credentials to the `dev` branch.

```
DATABASE_HOST=<your_host>
DATABASE_USERNAME=<your_username>
DATABASE_PASSWORD=<your_password>
```

## Available scripts
Use `npm run` to run these scripts:

* `dev:db:reset` - Resets the DB on the `dev` branch in Planetscale
* `dev:db:setup` - Seeds the DB on the `dev` branch in Planetscale with the .csv data in `src/data`
* `main:db:reset` - Resets the DB on the `main` branch in Planetscale
* `main:db:setup` - Seeds the DB on the `main` branch in Planetscale with the .csv data in `src/data`