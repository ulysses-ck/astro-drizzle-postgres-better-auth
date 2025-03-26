import { drizzle } from "drizzle-orm/postgres-js";
import { seed } from "drizzle-seed";
import * as schema from './schema.ts'

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);

  await seed(db, { todo: schema.todo }).refine((f) => ({
    todo: {
        columns: {
            title: f.loremIpsum({sentencesCount: 3}),
            content: f.loremIpsum({sentencesCount: 6}),
        },
        count: 20
    }
  }));
}

main();
