import { useMutation, useQuery, useQueryClient } from 'react-query';
import { SIGNIN } from '../../graphql/signup/mutations';
import graphQLClient from '../../graphql/graphQLClient';
import { UPDATE_USERPROFILE } from '../../graphql/profile/mutations';

const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (userInput) => {
            return await graphQLClient.request(UPDATE_USERPROFILE, {
                userInput,
            });
        },
        {
            onSuccess: (data) => {
                console.log('dddd', data);

                if (data.user_updateProfile?.status === 'SUCCESS') {
                    queryClient.invalidateQueries('getMyProfile');
                }
            },
        },
    );
};

const useGetProfile = () => {
    const res = useQuery(
        ['getMyProfile'],
        async () => {
            return graphQLClient.request(SIGNIN);
        },
        {
            onSuccess: (data) =>
                console.log('getProfileeeeeeeeeeeeeeeeeeeeeee', data),
        },
    );

    return { ...res, route: res?.data?.user_login?.result };
};

export { useUpdateProfile, useGetProfile };
