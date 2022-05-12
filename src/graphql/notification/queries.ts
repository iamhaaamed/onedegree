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

export const GET_UNREAD_NOTIFICATION_EXISTS = gql`
    query notification_getUnreadNotificationExists {
        notification_getUnreadNotificationExists {
            status
            result
        }
    }
`;
