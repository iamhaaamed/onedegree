import { gql } from 'graphql-request';

export const USER_LIKE = gql`
    mutation career_like($careerId: Int!) {
        career_like(careerId: $careerId) {
            result {
                createdAt
                careerId
                userId
                id
                isDeleted
            }
            status
        }
    }
`;
export const USER_UNLIKE = gql`
    mutation career_unlike($careerId: Int!, $userId: Int) {
        career_unlike(careerId: $careerId, userId: $userId) {
            result {
                createdAt
                careerId
                userId
                id
                isDeleted
            }
            status
        }
    }
`;
