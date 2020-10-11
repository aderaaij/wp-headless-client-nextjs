export const AuthorFields = /* GraphQL */ `
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }
`;
