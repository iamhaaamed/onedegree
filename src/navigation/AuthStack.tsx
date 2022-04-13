import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { MText, ArrowBackButton } from 'components/common';
// import {User} from '~/generated/graphql';
import {
    Signin,
    Signup,
    VerifyEmail,
    Forgetpassword1,
    Forgetpassword,
    LoginScreen,
    Question7,
    Question6,
    Question2,
    Hiquestion2,
    Gettingstarted3,
    SplashScreen,
    Notification1,
} from 'screens';

import { navigate } from './methods';

const Stack = createStackNavigator();

export type AuthStackParamList = {
    LoginScreen: undefined;
    Signin: undefined;
    Signup: undefined;
    VerifyEmail: { email: string; password: string };
    Forgetpassword: { email: string; password: string };
    Forgetpassword1: undefined;
    Question7: undefined;
    Question6: undefined;
    Question2: undefined;
    Hiquestion2: undefined;
    Gettingstarted3: undefined;
    Notification1: undefined;
};

const screens = [
    {
        options: { headerShown: false },
        name: 'Splash',
        component: SplashScreen,
    },
    {
        options: { headerShown: false },
        name: 'Signin',
        component: Signin,
    },
    {
        options: { headerShown: false },
        name: 'Signup',
        component: Signup,
    },
    {
        options: { headerShown: false },
        name: 'VerifyEmail',
        component: VerifyEmail,
    },
    {
        options: { headerShown: false },
        name: 'Forgetpassword1',
        component: Forgetpassword1,
    },
    {
        options: { headerShown: false },
        name: 'Question7',
        component: Question7,
    },
    {
        options: { headerShown: false },
        name: 'Question6',
        component: Question6,
    },
    {
        options: { headerShown: false },
        name: 'Question2',
        component: Question2,
    },
    {
        options: { headerShown: false },
        name: 'Forgetpassword',
        component: Forgetpassword,
    },
    {
        options: { headerShown: false },
        name: 'Hiquestion2',
        component: Hiquestion2,
    },
    {
        options: { headerShown: false },
        name: 'Gettingstarted3',
        component: Gettingstarted3,
    },
    {
        options: { headerShown: false },
        name: 'Notification',
        component: Notification1,
    },
];

export default function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            {screens.map((s) => (
                <Stack.Screen key={s.name} {...s} />
            ))}
        </Stack.Navigator>
    );
}
