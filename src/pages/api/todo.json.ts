import type { APIRoute } from "astro";
import db from "@/db";
import { todo } from "@/db/schema";

export const GET: APIRoute = async () => {
    return new Response(JSON.stringify(await db.select().from(todo)));
}
    
export const POST: APIRoute = async ({request}) => {
    const {title, content, id} = await request.json();
    return new Response(JSON.stringify(await db.insert(todo).values({
        id,
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date()
    })))
}
