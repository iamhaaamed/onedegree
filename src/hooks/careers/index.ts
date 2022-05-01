import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from 'react-query';
import graphQLClient from '../../graphql/graphQLClient';
import { GET_CAREERS, GET_LIKE_CAREES } from '../../graphql/careers/queries';
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
            select: (data) => ({
                ...data,

                pages: data?.pages
                    ?.map((a) => a.career_getCareers?.result?.items)
                    .reduce((a: string | any[], b: any) => a.concat(b), []),
            }),
            ...options,
        },
    );

    return { ...res };
};
const useGetLikeCareers = ({ careerId }) => {
    console.log(
        'rrrrrrrrrrrrrrrrrrrrrrrddddddddddddddddddddddddddddddddddddd ',
        careerId,
    );

    return useQuery(['LikeCareers', careerId], async () => {
        return await graphQLClient.request(GET_LIKE_CAREES, { careerId });
    });
};
export { useGetCareers, useGetLikeCareers };
