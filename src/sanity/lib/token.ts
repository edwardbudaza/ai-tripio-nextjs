// ./src/sanity/lib/token.ts

import 'server-only';

export const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN');
}

// Optionally, log a warning if needed (but do not expose the token in logs)
console.warn("The Sanity API read token is being used on the server.");
