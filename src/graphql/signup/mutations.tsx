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
    query user_login {
        user_login {
            result {
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
                genders
                age
                city
                zipCode
                ethnicity
                educationLevel
                currentIncome
                industry
                hourlyAmount
                monthlyAmount
                annuallyAmount
                amountType
                whereDoYouWantToWork
                howFarAreYouWillingToTravelToGetCertified
                whereDidYouHearAboutOnedegreeCareers
                whereDidYouHearAboutOnedegreeCareersTextForOther
                userLikeCareers {
                    career {
                        title
                        imageAddress
                        id
                    }
                }
                externalId
                id
                isDeleted
            }
            status
        }
    }
`;
