import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from 'react-query';
import graphQLClient from '../../graphql/graphQLClient';
import { GET_CAREERS, GET_LIKE_CAREES } from '../../graphql/careers/queries';
import { USER_UNLIKE, USER_LIKE } from '../../graphql/careers/mutations';
const PAGE_SIZE = 10;
const useGetCareers = ({
    order,
    options = {},
}: {
    order: any;
    options?: any;
}) => {
    const res = useInfiniteQuery(
        ['getCarees', order],
        async ({ pageParam = 0 }) => {
            return graphQLClient.request(GET_CAREERS, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                order,
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
    return useQuery(['LikeCareers', careerId], async () => {
        return await graphQLClient.request(GET_LIKE_CAREES, { careerId });
    });
};
const useLikeCareer = () => {
    return useMutation(async (careerId) => {
        return await graphQLClient.request(USER_LIKE, {
            careerId,
        });
    });
};
const useUnlikeCareer = () => {
    return useMutation(async (careerId) => {
        return await graphQLClient.request(USER_UNLIKE, {
            careerId,
        });
    });
};
export { useGetCareers, useGetLikeCareers, useLikeCareer, useUnlikeCareer };
