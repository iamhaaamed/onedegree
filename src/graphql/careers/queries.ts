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
                            typeOfTrainingProgram
                            careerId
                            userId
                            id
                            isDeleted
                        }
                        userLikeCareers {
                            createdAt
                            careerId
                            userId
                            id
                            isDeleted
                        }
                        conversations {
                            subject
                            careerId
                            programId
                            isChatWithCareer
                            firstUserId
                            secondUserId
                            firstUnreadCount
                            secondUnreadCount
                            latestMessageDate
                            id
                            isDeleted
                        }
                        user {
                            isActive
                            createdAt
                            email
                            lastSeen
                            userTypes
                            isNotificationEnabled
                            imageAddress
                            firstName
                            lastName
                            longitude
                            latitude
                            age
                            ethnicity
                            educationLevel
                            currentIncome
                            industry
                            amount
                            amountType
                            whereDoYouWantToWork
                            howFarAreYouWillingToTravelToGetCertified
                            whereDidYouHearAboutOnedegreeCareers
                            whereDidYouHearAboutOnedegreeCareersTextForOther
                            externalId
                            id
                            isDeleted
                        }
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
                            typeOfTrainingProgram
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
