import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from 'react-query';
import graphQLClient from '../../graphql/graphQLClient';
import { GET_CAREERS } from '../../graphql/careers/queries';
const PAGE_SIZE = 10;
const useGetCareers = ({ options = {} }: { options?: any }) => {
    const res = useInfiniteQuery(
        ['getCarees'],
        async ({ pageParam = 0 }) => {
            return graphQLClient.request(GET_CAREERS, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
            });
        },
        {
            getNextPageParam: (lastPage: any, allPages: any) => {
                if (
                    lastPage?.career_getCareers?.result?.pageInfo?.hasNextPage
                ) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => (
                console.log(
                    '/////',
                    data?.pages[0]?.career_getCareers?.result?.items,
                ),
                {
                    ...data,

                    pages: data?.pages
                        ?.map((a) => a.career_getCareers?.result?.items)
                        .reduce((a: string | any[], b: any) => a.concat(b), []),
                }
            ),
            ...options,
        },
    );

    return { ...res };
};

export { useGetCareers };
