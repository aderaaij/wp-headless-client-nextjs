export const allPostsForHome = `
query AllPosts {
  posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
    edges {
      node {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
  }
}
`;
