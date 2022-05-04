import { gql } from 'graphql-request';

export const GET_PROGRAMS = gql`
    query program_GetPrograms(
        $skip: Int
        $take: Int
        $where: ProgramsFilterInput
        $order: [ProgramsSortInput!]
    ) {
        program_GetPrograms {
            result(skip: $skip, take: $take, where: $where, order: $order) {
                items {
                    createdAt
                    title
                    programCost
                    lengthOfProgram
                    imageAddrss
                    link
                    jobPlacementRate
                    typeOfTrainingProgram
                    careerId
                    conversations {
                        careerId
                    }
                    id
                    isDeleted
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                }
                totalCount
            }
            status
        }
    }
`;
