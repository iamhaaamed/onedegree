import {
    useQuery,
    useMutation,
    useInfiniteQuery,
    useQueryClient,
} from 'react-query';
import GraphQlClient from '../../graphql/graphQLClient';
import { UPDATE_USERPROFILE } from '../../graphql/profile/mutations';
const PAGE_SIZE = 10;
const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (userInput) => {
            console.log('uuuuuuuuuuu', userInput);

            return await GraphQlClient.request(UPDATE_USERPROFILE, {
                userInput: userInput,
            });
        },
        {
            onSuccess: (data) => {
                if (data.user_updateProfile?.status === 'SUCCESS') {
                    queryClient.invalidateQueries('getMyProfile');
                }
            },
        },
    );
};

export { useUpdateProfile };
