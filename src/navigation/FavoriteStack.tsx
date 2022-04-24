import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';

import { Save } from 'screens';

const Stack = createStackNavigator();

export type MapStackParamList = {
    Search: undefined;
};

const screens = [
    {
        options: { headerShown: false },
        name: 'Save',
        component: Save,
    },
];

export default function SearchStack() {
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
