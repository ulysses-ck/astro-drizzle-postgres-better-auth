import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
	id: text("id").primaryKey(),
	title: text('title').notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull()
});