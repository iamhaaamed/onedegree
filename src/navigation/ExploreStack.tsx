import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// import {ChevronBackButton} from '~/components';
// import {DriveLength, DriveStyle, DriveType, Route} from '~/generated/graphql';
import { ExploreScreen } from 'screens';

const Stack = createStackNavigator();

export type ExploreStackParamList = {
    ExploreScreen: undefined;
};

const screens = [
    {
        options: { headerShown: false },
        name: 'Explore',
        component: ExploreScreen,
    },
];

export default function ExploreStack({
    navigation,
    route,
}: {
    navigation: any;
    route: any;
}) {
    const tabHiddenRoutes = [
        'Filter',
        'WellKnownRoutes',
        'PopularPlaces',
        'RouteDetails',
        'EditRoute',
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
                    options={x.options}
                    name={x.name}
                    component={x.component}
                />
            ))}
        </Stack.Navigator>
    );
}
