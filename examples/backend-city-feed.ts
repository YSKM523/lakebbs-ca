// Representative server-side feed query from the lakebbs Next.js app.
// Runs inside a React Server Component / Server Action, using Drizzle ORM
// against MySQL. City-scoped filtering keeps each city's feed isolated.

import { and, desc, eq } from 'drizzle-orm';
import type { MySql2Database } from 'drizzle-orm/mysql2';

// The real `posts` table schema lives in the private source repo;
// this is a minimal shape that matches the columns used here.
interface PostsTable {
  citySlug: unknown;
  section: unknown;
  postTime: unknown;
}

interface ListCityFeedQuery {
  citySlug?: string;
  section?: string;
  limit?: number;
}

function normalizeCitySlug(value: string = ''): 'thunderbay' | 'sudbury' {
  const city = value.trim().toLowerCase();
  return city === 'sudbury' ? 'sudbury' : 'thunderbay';
}

export async function listCityFeed(
  db: MySql2Database,
  posts: PostsTable & { _: { name: string } },
  query: ListCityFeedQuery = {},
) {
  const citySlug = normalizeCitySlug(query.citySlug);
  const section = (query.section ?? '').trim();
  const limit = Number(query.limit ?? 20);

  const filters = [eq(posts.citySlug as never, citySlug)];
  if (section) {
    filters.push(eq(posts.section as never, section));
  }

  return db
    .select()
    .from(posts as never)
    .where(and(...filters))
    .orderBy(desc(posts.postTime as never))
    .limit(limit);
}
