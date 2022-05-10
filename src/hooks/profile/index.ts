import { GoogleSigninSingleton } from '@react-native-google-signin/google-signin/lib/typescript/src/GoogleSignin';
import {
    useQuery,
    useMutation,
    useInfiniteQuery,
    useQueryClient,
} from 'react-query';
import graphQLClient from '../../graphql/graphQLClient';
import { SIGNIN } from '../../graphql/signup/mutations';
import { UPDATE_USERPROFILE } from '../../graphql/profile/mutations';
const PAGE_SIZE = 10;
const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (userInput) => {
            console.log('uuuuuuuuuuu', userInput);

            return await graphQLClient.request(UPDATE_USERPROFILE, {
                userInput,
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
const useGetProfile = () => {
    const res = useQuery(['getMyProfile'], async () => {
        return graphQLClient.request(SIGNIN);
    });

    return { ...res, route: res?.data?.user_login?.result };
};

export { useUpdateProfile, useGetProfile };
