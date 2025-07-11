import { defineConfig } from 'drizzle-kit';
import { env } from './src/env.ts';

export default defineConfig({
  dialect: 'postgresql',
  casing: 'snake_case',
  schema: './src/db/schema/**.ts',
  out: './src/db/migration',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});

// npx drizzle-kit generate
