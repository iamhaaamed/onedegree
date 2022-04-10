import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {queryClient} from 'App';
import React, { useEffect } from 'react';
// import { useIsFetching, useIsMutating } from 'react-query';

// import {CustomSpinner} from 'components/common';
// import {OnboardingScreen} from '~/screens';
// import {authStore} from '~/store';

import AuthStack from './AuthStack';
// import MainStack from './MainStack';
import { navigationRef } from './methods';

const Stack = createStackNavigator();

export default function AppNavigator() {
    // const isFetching = useIsFetching();
    // const isMutating = useIsMutating();

    // const isLoading = isLoadingSearchStore(
    //   (state: {isLoadingSearch: boolean}) => state.isLoadingSearch,
    // );

    // const { isUserLoggedIn, isOnboardingViewed } = authStore((state) => state);

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
                <Stack.Navigator>
                    {/* {!isOnboardingViewed && (
            <Stack.Screen
              options={{headerShown: false}}
              name="Onboarding"
              component={OnboardingScreen}
            />
          )} */}

                    {/* {isUserLoggedIn ? //   name="MainStack" //   options={{headerShown: false}} // <Stack.Screen
                    //   component={MainStack}
                    // />
                    null : ( */}
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="AuthStack"
                        component={AuthStack}
                    />
                    {/* )} */}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
