import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ProfileScreen, SettingsScreen } from 'screens';

const Stack = createStackNavigator();

export type ProfileStackParamList = {
    ProfileScreen: undefined;
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
];

export default function ProfileStack({
    navigation,
    route,
}: {
    navigation: any;
    route: Partial<Route<string>>;
}) {
    const tabHiddenRoutes = [
        'EditCover',
        'EditProfile',
        'EditLocation',
        'ProfileView',
        'ProfileView',
        'FollowersAndFollowings',
        'Settings',
        'Support',
        'RouteDetails',
        'EditRoute',
        'VehicleList',
        'AddOrEditVehicle',
    ];

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
        console.log(route);
        navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
        navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }

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
