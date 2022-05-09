import { navigate } from 'navigation/methods';
import React from 'react';
import { useRef, useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height, toPascalCase } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod } from 'components/common/MDateTimePicker';
import { Container, ProfileTab } from 'components/Sections';
import {
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView,
    DrawerToggleButton,
} from '@react-navigation/drawer';

import {
    MIcon,
    MText,
    MTouchable,
    MButton,
    MInput,
    MImageBackground,
    MImage,
    MStatusBar,
    MSwitch,
    MCheckBox,
    MFlatList,
    MChip,
    MDropDown,
    MOnboarding,
    MDateTimePicker,
    MImagePicker,
    MLoading,
    MModal,
    MTab,
    MAccordion,
    MSnackbar,
    MSlider,
} from 'components/common';
import { useLogin } from 'hooks/auth';
import { SectionTop01 } from 'components/Sections';
import { SectionInfo } from 'components/Sections';
import { showMessage } from 'react-native-flash-message';
import { authStore } from '../../../store';

const ProfileScreen = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [user, setUser] = useState();
        const [isLoading2, setIsLoading2] = useState(false);
        const { isLoading, mutate } = useLogin();
        const { UserName } = authStore((state) => state);
        useEffect(() => {
            setIsLoading2(true);
            try {
                mutate(
                    {},
                    {
                        onSuccess: (data) => {
                            if (data?.user_login?.status == 'SUCCESS')
                                setUser(data?.user_login?.result);
                        },
                    },
                );
            } catch (e) {
                console.log(e, 'e!!!!');
                if (e === 'NOT_FOUND') {
                    showMessage({
                        message: 'You are not registered!',
                        type: 'danger',
                    });
                }
            }
            setIsLoading2(false);
        }, []);
        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };
        console.log('uuuuuuuuuu', user);
        //         fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + myLat + ',' + myLon + '&key=' + myApiKey)
        //         .then((response) => response.json())
        //         .then((responseJson) => {
        //             console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
        // })
        return (
            <SafeAreaView style={styles.Profile4}>
                <MLoading
                    isLoading={isLoading}
                    size="large"
                    color={COLORS.Color323}
                    style={{ top: '50%' }}
                />
                <ScrollView>
                    <SectionTop01 title="Profile" noIcon rightView />
                    <ProfileTab page="profilePage" />
                    <View style={COMMON.SectionPaddingProfile421}>
                        {user?.imageAddress ? (
                            <MImage
                                imageSource={{ uri: user?.imageAddress }}
                                style={COMMON.image22}
                                customWidth={scale(326)}
                                customHeight={scale(94)}
                            />
                        ) : (
                            <View style={[COMMON.image22, styles.emptyImage]}>
                                <MIcon
                                    name={'account'}
                                    color={COLORS.Color267}
                                    size={scale(30)}
                                />
                            </View>
                        )}

                        <MText textStyle={COMMON.TxtProfile423}>
                            {user?.firstName
                                ? `${user?.firstName} ${user?.lastName}`
                                : UserName}
                        </MText>
                        <MButton
                            onPress={() => navigate('EditProfile')}
                            style={COMMON.ButtonRect25}
                            containerStyle={COMMON.Button24}
                            text="Complete Profile"
                            textStyle={COMMON.TextsButton26}
                            color={COLORS.Color977}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Location"
                            data="New York"
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Age"
                            data={user?.age || ' '}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Ethnicity"
                            data={user?.ethnicity || 'White'}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Gender"
                            data={toPascalCase(user?.genders) || 'Male'}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Education Level "
                            data={user?.educationLevel || ' '}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Current Income"
                            data={user?.currentIncome || ' '}
                        />
                        <MButton
                            onPress={onPress}
                            style={COMMON.ButtonRect36}
                            containerStyle={COMMON.Button35}
                            text="Edit"
                            textStyle={COMMON.TextsButton37}
                            gradient={{
                                colors: [
                                    COLORS.Color323,
                                    COLORS.Color148,
                                    COLORS.Color912,
                                    COLORS.Color674,
                                    COLORS.Color455,
                                    COLORS.Color240,
                                ],
                                start: {
                                    x: -0.15500132739543915,
                                    y: 0.6157848834991455,
                                },
                                end: {
                                    x: 1.014054298400879,
                                    y: 0.17686034739017487,
                                },
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    Profile4: {
        backgroundColor: COLORS.Color596,
        height: '100%',
    },
    emptyImage: {
        backgroundColor: COLORS.Color321,
        justifyContent: 'center',
        borderRadius: 1000,
    },
});

export default ProfileScreen;
