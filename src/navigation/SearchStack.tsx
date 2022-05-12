import { createStackNavigator } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { Search, MoreInfo } from 'screens';

const Stack = createStackNavigator();

export type MapStackParamList = {
    Search: undefined;
    MoreInfo: undefined;
};

const screens = [
    {
        options: { headerShown: false },
        name: 'Search',
        component: Search,
    },
    {
        options: { headerShown: false },
        name: 'MoreInfo',
        component: MoreInfo,
    },
];

export default function SearchStack({
    navigation,
    route,
}: {
    navigation: any;
    route: any;
}) {
    useLayoutEffect(() => {
        const tabHiddenRoutes = ['MoreInfo'];
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
                    options={x.options}
                    name={x.name}
                    component={x.component}
                />
            ))}
        </Stack.Navigator>
    );
}
