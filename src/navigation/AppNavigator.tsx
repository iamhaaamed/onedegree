import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {queryClient} from 'App';
import React, { useEffect } from 'react';
// import { useIsFetching, useIsMutating } from 'react-query';

// import {CustomSpinner} from 'components/common';
import { OnboardingScreen, SplashScreen } from 'screens';
import { authStore } from '../store';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { navigationRef } from './methods';

const Stack = createStackNavigator();

export default function AppNavigator() {
    // const isFetching = useIsFetching();
    // const isMutating = useIsMutating();

    // const isLoading = isLoadingSearchStore(
    //   (state: {isLoadingSearch: boolean}) => state.isLoadingSearch,
    // );

    const { isUserLoggedIn, isOnboardingViewed } = authStore((state) => state);

    // useEffect(() => {
    //   queryClient.cancelQueries();
    // }, [isUserLoggedIn]);

    return (
        <>
            {/* <CustomSpinner
        visible={
          !!isFetching || !!isMutating
          // || isLoading
        }
      /> */}
            <NavigationContainer ref={navigationRef}>
                {console.log('5555555555555', isOnboardingViewed)}
                <Stack.Navigator>
                    {!isOnboardingViewed && (
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Onboarding"
                            component={OnboardingScreen}
                        />
                    )}

                    {/* {isUserLoggedIn ? ( */}
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="MainStack"
                        component={MainStack}
                    />
                    {/* // ) : (
                    //     <Stack.Screen
                    //         options={{ headerShown: false }}
                    //         name="AuthStack"
                    //         component={AuthStack}
                    //     />
                    // )} */}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
