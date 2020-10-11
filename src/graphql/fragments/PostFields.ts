export const PostFields = `
fragment PostFields on Post {
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
      ...AuthorFields
    }
  }
  categories {
    edges {
      node {
        name
      }
    }
  }
  tags {
    edges {
      node {
        name
      }
    }
  }
}`;
