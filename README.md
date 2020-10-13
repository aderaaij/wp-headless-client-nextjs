# A statically generated blog example using Next.js and WordPress

A NextJS starter for WordPress with WPGraphQL based on the excellent [NextJS WordPress example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress), featuring: 

- NextJS
- GraphQL (Requires WordPress installation)
- TypeScript
- Prettier, ESLint, etc

## Generating Types

By running `yarn generate` you can generate types right from your WPGraphQL schema and the operations defined in `.src/graphql/**/*`. You can see and updat the confing in the `codegen.yml` file in the root of your project. The endpoint is loaded from the `.env.local` to
