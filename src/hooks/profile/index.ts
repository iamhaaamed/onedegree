import { useMutation, useQuery } from 'react-query';
import { SIGNIN } from '../../graphql/signup/mutations';
import graphQLClient from '../../graphql/graphQLClient';
import { UPDATE_USERPROFILE } from '../../graphql/profile/mutations';

const useUpdateProfile = () => {
    return useMutation(async (userInput) => {
        return await graphQLClient.request(UPDATE_USERPROFILE, {
            userInput,
        });
    });
};

const useGetProfile = () => {
    const res = useQuery(['getMyProfile'], async () => {
        return graphQLClient.request(SIGNIN);
    });

    return { ...res, route: res?.data?.user_login?.result };
};

export { useUpdateProfile, useGetProfile };
