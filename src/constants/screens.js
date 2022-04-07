import React from 'react';
import { TabBarBigButton } from 'components/elements';
import { HomeScreen } from 'screens';
import {
    Signup,
    Signin,
    Forgetpassword,
    Question2,
    Forgetpassword1,
    Hiquestion2,
    Question6,
    Question7,
    VerifyEmail,
    Gettingstarted3,
} from 'screens';
import { COLORS } from './common';
import { scale, verticalScale } from 'utils';
import MVideoPlayer from 'screens/home/MVideoShowcase/video';

export const APP_SCREENS = [
    {
        name: 'HomeTab',
        title: 'Home',
        iconName: 'ios-home-outline',
        focusIconName: 'ios-home',
        screens: [
            {
                name: 'Home',
                title: 'Home',
                Component: HomeScreen,
            },
            {
                name: 'MVideoPlayer',
                title: 'MVideoPlayer',
                Component: MVideoPlayer,
            },
        ],
    },
];
export const DEFAULT_TAB_OPTIONS = {};

export const DEFAULT_TABBAR_OPTIONS = {
    keyboardHidesTabBar: true,
};
export const ROOT_SCREENS = [
    {
        name: 'Gettingstarted3',
        Component: Gettingstarted3,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Question7',
        Component: Question7,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Question6',
        Component: Question6,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Hiquestion2',
        Component: Hiquestion2,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Forgetpassword1',
        Component: Forgetpassword1,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Question2',
        Component: Question2,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'VerifyEmail',
        Component: VerifyEmail,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Forgetpassword',
        Component: Forgetpassword,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Signup',
        Component: Signup,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Signin',
        Component: Signin,
        options: {
            headerShown: false,
        },
    },
];

const LONG_NBAR_HEIGHT = 80;
const MEDIUN_NBAR_HEIGHT = 60;

const pro = {
    style: {},
    customTabBarOptions: {},
};

export const screens = [{ screens: APP_SCREENS, settings: pro }];
export const getBottomNavbar = (props) => {
    return screens[props.navbarIndex - 1];
};
export const CustomBottomTab = undefined;
