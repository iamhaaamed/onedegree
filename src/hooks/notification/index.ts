import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from 'react-query';

import graphQLClient from '../../graphql/graphQLClient';

import {
    GET_NOTIFICATIONS,
    GET_UNREAD_NOTIFICATION_EXISTS,
} from '../../graphql/notification/queries';
const PAGE_SIZE = 10;
export const useGetNotifications = ({
    where,
    order,
    options = {},
}: {
    where?: any;
    order?: any;
    options?: any;
}) => {
    return useInfiniteQuery(
        ['notifications'],
        async ({ pageParam = 0 }) => {
            return graphQLClient.request(GET_NOTIFICATIONS, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                where,
                order,
            });
        },
        {
            getNextPageParam: (lastPage: any, allPages: any[]) => {
                if (
                    lastPage?.notification_getNotifications?.result?.pageInfo
                        ?.hasNextPage
                ) {
                    return allPages.length;
                }

                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map(
                        (a) => a?.notification_getNotifications?.result?.items,
                    )
                    .reduce((a: string | any[], b: any) => a.concat(b), []),
            }),
            ...options,
        },
    );
};

export const useGetUnreadNotificationExists = ({
    options = {},
}: {
    options?: any;
}) => {
    const res = useQuery(
        ['unreadNotification'],
        async () => {
            return graphQLClient.request(GET_UNREAD_NOTIFICATION_EXISTS);
        },
        { ...options },
    );

    return {
        ...res,
        unreadNotificationExists:
            res?.data?.notification_getUnreadNotificationExists?.result,
    };
};
