# A statically generated blog example using Next.js and WordPress

- NextJS
- Fetch data with GraphQL through WPGraphQL (requires plugin on WP site)
- TypeScript
- Prettier, ESLint, etc
-

## Generating Types

By running `yarn generate` you can generate types right from your WPGraphQL schema and the operations defined in `.src/graphql/**/*`. You can see and updat the confing in the `codegen.yml` file in the root of your project. The endpoint is loaded from the `.env.local` to
