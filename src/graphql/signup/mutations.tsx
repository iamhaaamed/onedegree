import { gql } from 'graphql-request';

export const SIGNUP = gql`
    mutation {
        user_signUp {
            result {
                isActive
                createdAt
                email
                lastSeen
                externalId
                id
                isDeleted
            }
            status
        }
    }
`;

export const SIGNIN = gql`
  mutation user_signIn() {
    user_signIn() {
      status
      result{
      user{
        id
        firstName
        lastName
        email
      }
    }
    }
  }
`;
