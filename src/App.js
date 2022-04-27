import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext, NavbarContext } from 'components/contexts';
import { enableScreens } from 'react-native-screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MDrawer from 'components/common/MDrawer';
import {
    DrawerContentOne,
    DrawerContentTwo,
    DrawerContentThree,
    DrawerContentFour,
    DrawerContentFive,
} from 'screens/home/MDrawerShowcase/drawer.showcase';
import AppNavigator from 'navigation/AppNavigator';
import { DrawerContent, drawerStyle } from 'components/Screen/Menu';
import { LogBox } from 'react-native';
import FlashMessage from 'react-native-flash-message';

LogBox.ignoreAllLogs();

enableScreens();

const App = () => {
    const Drawer = createDrawerNavigator();
    const [bottomNavbarIndex, setBottomNavbarIndex] = useState(1);
    const value = { bottomNavbarIndex, setBottomNavbarIndex };

    const drawerIndex = 1;
    return (
        <AppNavigator />
        // <NavbarContext.Provider value={value}>
        //     <ThemeContext.Provider value={value}>
        //         <NavigationContainer>
        //             <Drawer.Navigator
        //                 initialRouteName="HomeScreen"
        //                 screenOptions={{
        //                     swipeEnabled: false,
        //                     drawerStyle: drawerStyle,
        //                     // drawerType: drawerIndex == 4 ? 'slide' : 'front',
        //                     // drawerStyle:
        //                     //     drawerIndex == 2
        //                     //         ? {
        //                     //               backgroundColor: 'transparent',
        //                     //           }
        //                     //         : drawerIndex == 3
        //                     //         ? {
        //                     //               backgroundColor: 'transparent',
        //                     //           }
        //                     //         : drawerIndex == 4
        //                     //         ? { width: 85, backgroundColor: '#2f2c46' }
        //                     //         : drawerIndex == 5
        //                     //         ? {
        //                     //               backgroundColor: 'transparent',
        //                     //               width: '100%',
        //                     //               height: '50%',
        //                     //           }
        //                     //         : {},
        //                 }}
        //                 drawerContent={(props) => (
        //                     <MDrawer>
        //                         <DrawerContent />
        //                         {/* {drawerIndex == 1 ? (
        //                             <DrawerContentOne {...props} />
        //                         ) : drawerIndex == 2 ? (
        //                             <DrawerContentTwo {...props} />
        //                         ) : drawerIndex == 3 ? (
        //                             <DrawerContentThree {...props} />
        //                         ) : drawerIndex == 4 ? (
        //                             <DrawerContentFour {...props} />
        //                         ) : (
        //                             <DrawerContentFive {...props} />
        //                         )} */}
        //                     </MDrawer>
        //                 )}>
        //                 <Drawer.Screen
        //                     name="HomeScreen"
        //                     component={RootNavigator}
        //                     options={{ headerShown: false }}
        //                 />
        //             </Drawer.Navigator>
        //         </NavigationContainer>
        //         <FlashMessage />
        //     </ThemeContext.Provider>
        // </NavbarContext.Provider>
    );
};

export default App;
