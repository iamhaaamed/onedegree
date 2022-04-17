import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from 'constants/common';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tabBarStore from '../store/tabBarStore';
import { scale } from 'utils';

import ExploreStack from './ExploreStack';
import SearchStack from './SearchStack';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import { MIcon } from 'components/common';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
    const tabBarDisplay = tabBarStore(
        (state: { tabBarDisplay: any }) => state.tabBarDisplay,
    );
    return (
        <Tab.Navigator
            tabBarOptions={{
                indicatorStyle: { backgroundColor: 'red' },
                style: {
                    // elevation: 5,
                    borderTopWidth: 1,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    showLabel: false,
                },
                tabStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2,
                },
                activeTintColor: COLORS.Color289,
                inactiveTintColor: COLORS.Color565,
                adaptive: true,
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let name = '';
                    let family;
                    switch (route.name) {
                        case 'Home':
                            name = 'home';
                            family = MaterialCommunityIcons;
                            break;
                        case 'Explore':
                            name = 'newspaper-o';
                            family = FontAwesome;
                            break;
                        case 'Search':
                            name = 'magnify';
                            family = MaterialCommunityIcons;
                            break;
                        case 'Favorite':
                            name = 'heart-outline';
                            family = MaterialCommunityIcons;
                            break;
                        case 'Profile':
                            name = 'account-outline';
                            family = FontAwesome;
                            break;

                        default:
                            break;
                    }

                    return focused ? (
                        <View style={styles.backView}>
                            <MIcon
                                name={
                                    name == 'heart-outline'
                                        ? 'cards-heart'
                                        : name
                                }
                                size={scale(20)}
                                color={
                                    focused ? COLORS.Color289 : COLORS.Color565
                                }
                                IconComponent={family}
                            />
                        </View>
                    ) : (
                        <MIcon
                            name={name}
                            size={scale(20)}
                            color={focused ? COLORS.Color289 : COLORS.Color565}
                            IconComponent={family}
                            style={{ marginTop: 20 }}
                        />
                    );
                },
            })}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreStack}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Search"
                component={SearchStack}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={SearchStack}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{ headerShown: false, tabBarLabel: '' }}
            />
        </Tab.Navigator>
    );
};

export type MainStackParamList = {
    MainStack: undefined;
};

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                key={'MainTabs'}
                name={'MainTabs'}
                component={MainTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default MainStack;
const styles = StyleSheet.create({
    backView: {
        backgroundColor: COLORS.backMainIcon,
        borderRadius: 5,
        padding: 5,
        marginTop: 20,
    },
});
