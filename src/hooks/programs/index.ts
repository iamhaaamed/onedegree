import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from 'react-query';
import graphQLClient from '../../graphql/graphQLClient';
import { GET_PROGRAMS, GET_ONE_PROGRAM } from '../../graphql/programs/queries';
const PAGE_SIZE = 10;
const useGetPrograms = ({
    where,
    order,
    options = {},
}: {
    where?: any;
    order?: any;
    options?: any;
}) => {
    console.log('wwwwwwwwwwwww', where);

    const res = useInfiniteQuery(
        ['getPrograms'],
        async ({ pageParam = 0 }) => {
            return graphQLClient.request(GET_PROGRAMS, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                where,
                order,
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
const useGetOneProgram = (programId) => {
    const res = useQuery(['getPrograms', programId], async () => {
        return graphQLClient.request(GET_ONE_PROGRAM, { programId });
    });

    return { ...res, route: res?.data?.program_getProgram?.result };
};

export { useGetPrograms, useGetOneProgram };
