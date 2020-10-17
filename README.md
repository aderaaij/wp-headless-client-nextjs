# NextJS client for (headless) WordPress

A NextJS starter for WordPress installations with WPGraphQL, including TypeScript and dynamic type generating with graphql-codegen

## Features

- Works out of the box with any WordPress installation including WPGraphQL
- TypeScript and dynamic type generating with graphql-codegen
- Prettier, ESLint, Husky and Lint Staged
- Tailwind CSS

## Installation

1. Clone this repository to your machine
2. Run `yarn install`
3. Rename `.env.local.example` to `env.local` file
4. Add your `WORDPRESS_API_URL` url to your `.env.local` file
5. Run `yarn generate:codegen` to generate types\*
6. Run `yarn dev` to start a local server and start developing

- \*Running graphql-codegen on the WPGraphQL schema generates two invalid enum types, `2048X2048` and `1536X1536`. These are invalid because they start numeric. There is currently an issue opened about this right here: https://github.com/dotansimha/graphql-code-generator/issues/4834.

### Generating Types

By running `yarn generate:codegen` you can generate types right from your WPGraphQL schema and the operations defined in `.src/graphql/**/*`. You can see and updat the confing in the `codegen.yml` file in the root of your project. The endpoint is loaded from the `.env.local` file.
