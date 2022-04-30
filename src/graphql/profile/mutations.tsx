import { gql } from 'graphql-request';

export const UPDATE_USERPROFILE = gql`
mutation user_updateProfile ($userInput: UserInput) {
    user_updateProfile (userInput: $userInput) {
        result {
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
            status
        }
    }
`;
