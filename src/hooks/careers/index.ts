import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from 'react-query';
import graphQLClient from '../../graphql/graphQLClient';
import { USER_UNLIKE, USER_LIKE } from '../../graphql/careers/mutations';
import { GET_CAREERS, GET_LIKE_CAREES } from '../../graphql/careers/queries';

const PAGE_SIZE = 10;

const useGetCareers = ({
    order,
    where,
    options = {},
}: {
    order: any;
    where: any;
    options?: any;
}) => {
    const res = useInfiniteQuery(
        ['getCareers', order, where],
        async ({ pageParam = 0 }) => {
            return graphQLClient.request(GET_CAREERS, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                order,
                where,
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
    const queryClient = useQueryClient();
    return useMutation(
        async (careerId) => {
            console.log('ddddd', careerId);
            return await graphQLClient.request(USER_LIKE, {
                careerId,
            });
        },
        {
            onSuccess: (data) => {
                console.log('dddd', data);

                if (data.career_like?.status === 'SUCCESS') {
                    queryClient.invalidateQueries('LikeCareers');
                    queryClient.invalidateQueries('saveCareers');
                    queryClient.invalidateQueries('getCareers');
                }
            },
        },
    );
};
const useUnlikeCareer = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (careerId) => {
            return await graphQLClient.request(USER_UNLIKE, {
                careerId,
            });
        },
        {
            onSuccess: (data) => {
                if (data.career_unlike?.status === 'SUCCESS') {
                    queryClient.invalidateQueries('LikeCareers');
                    queryClient.invalidateQueries('saveCareers');
                    queryClient.invalidateQueries('getCareers');
                }
            },
        },
    );
};
export { useGetCareers, useGetLikeCareers, useLikeCareer, useUnlikeCareer };
