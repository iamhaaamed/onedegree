import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// import {ChevronBackButton} from '~/components';
// import {DriveLength, DriveStyle, DriveType, Route} from '~/generated/graphql';
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
