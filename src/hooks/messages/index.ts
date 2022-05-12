import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from 'react-query';

import graphQLClient from '../../graphql/graphQLClient';

import { GET_MESSAGES } from '../../graphql/messages/queries';
const PAGE_SIZE = 10;
export const useGetMessages = ({
    where,
    order,
    options = {},
}: {
    where?: any;
    order?: any;
    options?: any;
}) => {
    return useInfiniteQuery(
        ['messages'],
        async ({ pageParam = 0 }) => {
            return graphQLClient.request(GET_MESSAGES, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                where,
                order,
            });
        },
        {
            getNextPageParam: (lastPage: any, allPages: any[]) => {
                if (
                    lastPage?.message_getUserMessages?.result?.pageInfo
                        ?.hasNextPage
                ) {
                    return allPages.length;
                }

                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map((a) => a?.message_getUserMessages?.result?.items)
                    .reduce((a: string | any[], b: any) => a.concat(b), []),
            }),
            ...options,
        },
    );
};
