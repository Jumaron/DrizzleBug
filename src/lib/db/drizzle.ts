// src/lib/server/auth.ts
import { drizzle } from "drizzle-orm/libsql";

export const db = drizzle({
  connection: {
    url: "https://turso.dev",
    authToken: "sdfsdfs",
  },
});
