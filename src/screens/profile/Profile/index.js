import { navigate } from 'navigation/methods';
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
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
import { SectionTop01 } from 'components/Sections';
import { SectionInfo } from 'components/Sections';
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

        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        return (
            <SafeAreaView style={styles.Profile4}>
                <ScrollView>
                    <SectionTop01 title="Profile" noIcon rightView />
                    <ProfileTab page="profilePage" />
                    <View style={COMMON.SectionPaddingProfile421}>
                        <MImage
                            imageSource={IMAGES.image7104}
                            style={COMMON.image22}
                            customWidth={scale(326)}
                            customHeight={scale(94)}
                        />

                        <MText textStyle={COMMON.TxtProfile423}>don jon </MText>
                        <MButton
                            onPress={onPress}
                            style={COMMON.ButtonRect25}
                            containerStyle={COMMON.Button24}
                            text="Complete profile"
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
                            data="22"
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Ethnicity"
                            data="White"
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Gender"
                            data="Male"
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Education Level "
                            data="Associate Degree"
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Current Income"
                            data="$120,000"
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
});

export default ProfileScreen;
