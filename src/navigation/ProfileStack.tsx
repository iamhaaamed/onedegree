import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';

import {
    ProfileScreen,
    SettingsScreen,
    TermsOfService,
    PrivacyPolicy,
    ProfileQuestion5,
    FAQScreen,
    Question,
    EditProfile,
} from 'screens';

const Stack = createStackNavigator();

export type ProfileStackParamList = {
    ProfileScreen: undefined;
    TermsOfService: undefined;
    PrivacyPolicy: undefined;
    ProfileQuestion5: undefined;
    FAQScreen: undefined;
    Question: undefined;
    EditProfile: undefined;
};

const screens = [
    {
        options: { headerShown: false },
        name: 'MyProfile',
        component: ProfileScreen,
    },
    {
        options: { headerShown: false },
        name: 'Settings',
        component: SettingsScreen,
    },
    {
        options: { headerShown: false },
        name: 'TermsOfService',
        component: TermsOfService,
    },
    {
        options: { headerShown: false },
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
    },
    {
        options: { headerShown: false },
        name: 'ProfileQuestion5',
        component: ProfileQuestion5,
    },
    {
        options: { headerShown: false },
        name: 'EditProfile',
        component: EditProfile,
    },
    {
        options: { headerShown: false },
        name: 'FAQ',
        component: FAQScreen,
    },
    {
        options: { headerShown: false },
        name: 'Question',
        component: Question,
    },
];

export default function ProfileStack({
    navigation,
    route,
}: {
    navigation: any;
    route: any;
}) {
    useLayoutEffect(() => {
        const tabHiddenRoutes = [
            'Settings',
            'TermsOfService',
            'PrivacyPolicy',
            'ProfileQuestion5',
            'FAQ',
            'Question',
            'EditProfile',
        ];
        navigation.setOptions({
            tabBarStyle: {
                display: tabHiddenRoutes.includes(
                    getFocusedRouteNameFromRoute(route),
                )
                    ? 'none'
                    : 'flex',
            },
        });
    }, [navigation, route]);

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            {screens.map((x) => (
                <Stack.Screen
                    key={x.name}
                    //@ts-ignore
                    options={x.options}
                    name={x.name}
                    component={x.component}
                />
            ))}
        </Stack.Navigator>
    );
}
