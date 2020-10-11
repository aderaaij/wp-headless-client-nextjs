export const previewPost = `
query PreviewPost($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    databaseId
    slug
    status
  }
}`;
