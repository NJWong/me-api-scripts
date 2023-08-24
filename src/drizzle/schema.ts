import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, primaryKey, int, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const characters = mysqlTable("characters", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	species: int("species").notNull(),
	gender: int("gender").notNull(),
	class: varchar("class", { length: 255 }).notNull(),
},
(table) => {
	return {
		idxSpecies: index("idx_species").on(table.species),
		idxGender: index("idx_gender").on(table.gender),
		charactersId: primaryKey(table.id),
	}
});

export const genders = mysqlTable("genders", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
},
(table) => {
	return {
		gendersId: primaryKey(table.id),
	}
});

export const species = mysqlTable("species", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
},
(table) => {
	return {
		speciesId: primaryKey(table.id),
	}
});

export const shipClasses = mysqlTable("ship_classes", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
},
(table) => {
	return {
		shipClassesId: primaryKey(table.id),
	}
});

export const affiliations = mysqlTable("affiliations", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
  primarySpecies: int("primary_species"),
},
(table) => {
	return {
    idxSpecies: index("idx_species").on(table.primarySpecies),
		affiliationsId: primaryKey(table.id),
	}
});

export const ships = mysqlTable("ships", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
  class: int("class").notNull(),
  affiliation: int("affiliation").notNull(),
  description: varchar("description", { length: 255 }).notNull(),
},
(table) => {
	return {
    idxClass: index("idx_class").on(table.class),
    idxAffiliation: index("idx_affiliation").on(table.affiliation),
		shipsId: primaryKey(table.id),
	}
});