export const allPostsWithSlug = `
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
