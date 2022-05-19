import { authStore } from './store';
import { LogBox } from 'react-native';
import Config from 'react-native-config';
import auth from '@react-native-firebase/auth';
import AppNavigator from 'navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
import graphQLClient from '../src/graphql/graphQLClient';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useCallback, useEffect, useState } from 'react';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

let queryClient: QueryClient;

LogBox.ignoreAllLogs(true);

GoogleSignin.configure({
    scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
});

enableScreens();

const App = () => {
    const { token } = authStore((state) => state);
    const setToken = authStore((state) => state.setToken);
    console.log('token', token);
    const [initializing, setInitializing] = useState(true);
    const handleUser = useCallback(
        async (user) => {
            if (user) {
                const idToken = await auth().currentUser?.getIdToken();
                // console.log('user:', user);
                if (idToken) {
                    graphQLClient.setHeader(
                        'authorization',
                        'Bearer ' + idToken,
                    );
                    setToken(idToken);
                    queryClient.invalidateQueries();
                } else {
                    showMessage({
                        message: 'please login first',
                        type: 'danger',
                    });
                }
            } else {
                graphQLClient.setHeader('authorization', '');
                // AsyncStorage.clear();
                queryClient.clear();
            }
            if (initializing) {
                setInitializing(false);
            }
        },
        [initializing],
    );

    useEffect(() => {
        const unsubscribe = auth().onIdTokenChanged(handleUser);
        return () => unsubscribe();
    }, [handleUser]);

    queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 0,
            },
        },
        queryCache: new QueryCache({
            onError: (error) => {
                // console.log(error);
                showMessage({
                    message: `Something went wrong: ${error.message}`,
                    type: 'danger',
                });
            },
            onSuccess: async (data) => {
                const first = data[Object.keys(data)[0]];
                const status = first?.status;

                if (
                    status === 'AUTHENTICATION_FAILED' ||
                    (Array.isArray(first) &&
                        first[0][Object.keys(first[0])[0]].status ===
                            'AUTHENTICATION_FAILED')
                ) {
                    // console.log('status', status);
                    try {
                        await auth().signOut();
                    } catch (error) {
                        // console.log('errrrr', error);
                        showMessage({
                            message: 'please login first',
                            type: 'danger',
                        });
                        setToken(null);
                    }
                }
            },
        }),
    });
    if (initializing) {
        return null;
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <QueryClientProvider client={queryClient}>
                <AppNavigator />
                <FlashMessage position="top" />
            </QueryClientProvider>
        </SafeAreaView>
    );
};

export default App;
export { queryClient };
