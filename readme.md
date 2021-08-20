# Testing *.mjs under Vercel

This is a monorepo designed to test support for ES6 modules when deploying to Vercel.

## Testing Imports

1. Deploy this repo with `/main` as the root directory.
2. After deployment, visit `{deployment_url}/api/cjs`.  This will work.
3. Visit `{deployment_url}/api/mjs`.  This does not work.  The only difference between the two packages is that one is written in CommonJS and the other using ES6 modules (declared as `"type": "module"` in its package.json file)

## Additional Test

1. Deploy this repo with `/mjs` as the root directory.
2. All API endpoints will fail when visited.
