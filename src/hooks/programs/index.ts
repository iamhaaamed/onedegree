import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from 'react-query';
import graphQLClient from '../../graphql/graphQLClient';
import { GET_PROGRAMS } from '../../graphql/programs/queries';
const PAGE_SIZE = 10;
const useGetPrograms = ({ options = {} }: { options?: any }) => {
    const res = useInfiniteQuery(
        ['getPrograms'],
        async ({ pageParam = 0 }) => {
            return graphQLClient.request(GET_PROGRAMS, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
            });
        },
        {
            getNextPageParam: (lastPage: any, allPages: any) => {
                if (
                    lastPage?.program_GetPrograms?.result?.pageInfo?.hasNextPage
                ) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,

                pages: data?.pages
                    ?.map((a) => a.program_GetPrograms?.result?.items)
                    .reduce((a: string | any[], b: any) => a.concat(b), []),
            }),
            ...options,
        },
    );

    return { ...res };
};

export { useGetPrograms };
