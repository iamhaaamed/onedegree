import { NavigationContainer } from '@react-navigation/native';
import {
    TransitionPresets,
    createStackNavigator,
} from '@react-navigation/stack';
// import {queryClient} from 'App';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
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

    return (
        <>
            {/* <CustomSpinner
        visible={
          !!isFetching || !!isMutating
          // || isLoading
        }
      /> */}
            <NavigationContainer ref={navigationRef}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={'transparent'}
                />

                <Stack.Navigator
                    screenOptions={{
                        ...TransitionPresets.ScaleFromCenterAndroid,
                    }}>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Splash"
                        component={SplashScreen}
                    />

                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Onboarding"
                        component={OnboardingScreen}
                    />

                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="MainStack"
                        component={MainStack}
                    />

                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="AuthStack"
                        component={AuthStack}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
