import { gql } from 'graphql-request';

export const GET_MESSAGES = gql`
    query message_getUserMessages(
        $skip: Int
        $take: Int
        $where: ConversationDtoFilterInput
        $order: [ConversationDtoSortInput!]
    ) {
        message_getUserMessages {
            status
            result(skip: $skip, take: $take, where: $where, order: $order) {
                totalCount
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                }
                items {
                    subject
                    latestMessageDate
                    isChatWithCareer
                    conversationId
                    unreadCount
                }
            }
        }
    }
`;
