import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';

import { Programs, ProgramDetails, Chat3 } from 'screens';

const Stack = createStackNavigator();

export type ExploreStackParamList = {
    Programs: undefined;
    ProgramDetails: undefined;
    Chat3: undefined;
};

const screens = [
    {
        options: { headerShown: false },
        name: 'Programs',
        component: Programs,
    },
    {
        options: { headerShown: false },
        name: 'ProgramDetails',
        component: ProgramDetails,
    },
    {
        options: { headerShown: false },
        name: 'ChatScreen',
        component: Chat3,
    },
];

export default function ExploreStack({
    navigation,
    route,
}: {
    navigation: any;
    route: any;
}) {
    const tabHiddenRoutes = ['ProgramDetails', 'ChatScreen'];

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
        navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
        navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }

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
