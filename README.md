# Purpose

This is a sample Turborepo Monorepo. It is intended to serve as a point of reference
for a discussion of a particular Turborepo behavior: https://github.com/vercel/turborepo/issues/937

Features to note:

- `apps/docs` includes a `test` script
- `apps/web` does not include a `test` script
- `apps/web` depends on `my-js-lib`
- `my-js-lib` does not have a `build` script
- `my-js-lib` depends on `deep-ts-lib`
- `deep-ts-lib` has a `build` script
