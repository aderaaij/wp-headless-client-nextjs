export const allPostsWithSlug = /* GraphQL */ `
  {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;
