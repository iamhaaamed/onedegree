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
export const GET_ONE_PROGRAM = gql`
    query program_getProgram($programId: Int!) {
        program_getProgram(programId: $programId) {
            result {
                isActive
                createdAt
                title
                programCost
                lengthOfProgram
                imageAddrss
                link
                jobPlacementRate
                typeOfTrainingProgram
                careerId
                career {
                    title
                    imageAddress
                    trainingTime
                    programs {
                        programCost
                        title
                        lengthOfProgram
                        imageAddrss
                        id
                    }
                }
                conversations {
                    id
                }
                userId
                id
                isDeleted
            }
            status
        }
    }
`;
