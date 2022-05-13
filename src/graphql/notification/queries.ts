import { gql } from 'graphql-request';

export const GET_NOTIFICATIONS = gql`
    query notification_getNotifications(
        $skip: Int
        $take: Int
        $where: NotificationFilterInput
        $order: [NotificationSortInput!]
    ) {
        notification_getNotifications {
            status
            result(skip: $skip, take: $take, where: $where, order: $order) {
                totalCount
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                }
                items {
                    createdAt
                    title
                    description
                    isReaded
                    notificationType
                    userId

                    id
                }
            }
        }
    }
`;

export const READ_NOTIFICATION = gql`
    mutation {
        notification_readAllNotifications(          
        )  {
            result() {
                items {
                    title
                    isReaded

                    id
                }
            }
            status
        }
    }
`;
