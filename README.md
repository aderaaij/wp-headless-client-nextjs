# A statically generated blog example using Next.js and WordPress

## Generating Types

By running `yarn generate` you can generate types right from your WPGraphQL schema and the operations defined in `.src/graphql/**/*`. You can see and updat the confing in the `codegen.yml` file in the root of your project. You will need a `.env` file in your root directory containing a `SCHEMA_URL` value (this is probably the same as your WPGraphQL endpoint)
