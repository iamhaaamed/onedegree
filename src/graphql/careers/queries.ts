import { gql } from 'graphql-request';

export const GET_CAREERS = gql`
    query career_getCareers(
        $skip: Int
        $take: Int
        $where: CareerDtoFilterInput
        $order: [CareerDtoSortInput!]
    ) {
        career_getCareers(isInAdmin: false) {
            result(skip: $skip, take: $take, where: $where, order: $order) {
                items {
                    career {
                        isActive
                        createdAt
                        title
                        imageAddress
                        videoAddress
                        possibleYearlyIncome
                        trainingTime
                        socialImpact
                        description
                        minCertificationCost
                        maxCertificationCost
                        monthsToPayOffNumber
                        monthsToPayOffDescription
                        workHours
                        is100PercentRemote
                        typicalSalary
                        startingSalary
                        tenYearGrowth
                        typeOfWork
                        otherPerks
                        userId
                        id
                        isDeleted
                    }
                    programVm {
                        programs {
                            isActive
                            createdAt
                            title
                            programCost
                            lengthOfProgram
                            longitude
                            latitude
                            imageAddrss
                            link
                            jobPlacementRate
                            careerId
                            userId
                            id
                            isDeleted
                        }
                        distance
                    }
                    isLiked
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
export const GET_LIKE_CAREES = gql`
    query career_getUserLikeCareer($careerId: Int!) {
        career_getUserLikeCareer(careerId: $careerId) {
            result {
                createdAt
                careerId
                userId
                user {
                    id
                }
                id
                isDeleted
            }
            status
        }
    }
`;
