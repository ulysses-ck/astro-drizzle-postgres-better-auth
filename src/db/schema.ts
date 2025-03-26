import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import {
    createSelectSchema,
    createInsertSchema,
    createUpdateSchema
} from "drizzle-zod";

export const todo = pgTable("todo", {
	id: text("id").primaryKey(),
	title: text('title').notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull()
});

export const todoSelectSchema = createSelectSchema(todo);
export const todoInsertSchema = createInsertSchema(todo);
export const todoUpdateSchema = createUpdateSchema(todo);