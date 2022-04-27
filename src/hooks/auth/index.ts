import auth from '@react-native-firebase/auth';
import { useMutation } from 'react-query';

import graphQLClient from 'graphql/graphQLClient';
import { SIGNIN, SIGNUP } from 'graphql/signup/mutations';
import { authStore } from 'store';

const useLogin = () => {
    const { setUserId } = authStore((state) => state);

    return useMutation(
        async (_data: any) => {
            const idToken = await auth().currentUser?.getIdToken();
            if (idToken) {
                graphQLClient.setHeader('authorization', 'Bearer ' + idToken);
            }

            return graphQLClient.request(SIGNIN);
        },
        {
            onSuccess: (data: any) => {
                if (data.user_signIn?.status === 'SUCCESS') {
                    setUserId(data.user_signIn?.result?.id);
                }
            },
        },
    );
};

const useRegister = () => {
    const { setUserId } = authStore((state) => state);
    return useMutation(
        async (_data: any) => {
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
