import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { Chat2, Chat3, Home2, MoreInfo, Notification1 } from 'screens';

const Stack = createStackNavigator();

export type HomeStackParamList = {
    HomeScreen: undefined;
    Notification1: undefined;
    Chat2: undefined;
    Chat3: undefined;
    MoreInfo: undefined;
};

const screens = [
    {
        options: { headerShown: false },
        name: 'Home',
        component: Home2,
    },
    {
        name: 'Notification',
        component: Notification1,
        options: { headerShown: false },
    },
    {
        name: 'ChatList',
        component: Chat2,
        options: { headerShown: false },
    },
    {
        options: { headerShown: false },
        name: 'ChatScreen',
        component: Chat3,
    },
    {
        options: { headerShown: false },
        name: 'MoreInfo',
        component: MoreInfo,
    },
];

export default function HomeStack({
    navigation,
    route,
}: {
    navigation: any;
    route: any;
}) {
    useLayoutEffect(() => {
        const tabHiddenRoutes = [
            'ChatScreen',
            'ChatList',
            'Notification',
            'MoreInfo',
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
                ...TransitionPresets.ScaleFromCenterAndroid,
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
