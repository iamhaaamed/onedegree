import auth from '@react-native-firebase/auth';
import { useMutation, useQueryClient } from 'react-query';

import graphQLClient from '../../graphql/graphQLClient';
import { SIGNIN, SIGNUP } from '../../graphql/signup/mutations';
import { authStore } from '../../store';

const useLogin = () => {
    const { setUserId } = authStore((state) => state);
    const queryClient = useQueryClient();
    return useMutation(
        async (_data: any) => {
            const idToken = await auth().currentUser?.getIdToken();
            console.log('....................', idToken);

            if (idToken) {
                graphQLClient.setHeader('authorization', 'Bearer ' + idToken);
            }

            return graphQLClient.request(SIGNIN);
        },
        {
            onSuccess: (data: any) => {
                if (data.user_login?.status === 'SUCCESS') {
                    setUserId(data.user_login?.result?.id);
                    queryClient.invalidateQueries('getMyProfile');
                }
            },
        },
    );
};

const useRegister = () => {
    const { setUserId } = authStore((state) => state);
    return useMutation(
        async (_data: any) => {
            const idToken = await auth().currentUser?.getIdToken();
            console.log('.../////////////.......', idToken);
            if (idToken) {
                graphQLClient.setHeader('authorization', 'Bearer ' + idToken);
            }
            return graphQLClient.request(SIGNUP);
        },
        {
            onSuccess: (data: any) => {
                if (data.user_signUp?.status === 'SUCCESS') {
                    setUserId(data.user_signUp?.result?.id);
                }
            },
        },
    );
};

export { useLogin, useRegister };
