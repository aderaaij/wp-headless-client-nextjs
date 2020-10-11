export const postBySlug = (isRevision = false) => `
query PostBySlug($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    ...PostFields
    content
    ${
      // Only some of the fields of a revision are considered as there are some inconsistencies
      isRevision
        ? `
    revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
      edges {
        node {
          title
          excerpt
          content
          author {
            node {
              ...AuthorFields
            }
          }
        }
      }
    }
    `
        : ''
    }
  }
  posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
    edges {
      node {
        ...PostFields
      }
    }
  }
}
`;
