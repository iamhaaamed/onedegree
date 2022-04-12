import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod } from 'components/common/MDateTimePicker';
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
const OnboardingScreen = createScreen(
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
            <View style={styles.splash7}>
                <ScrollView>
                    <Animatable.View
                        animation="pulse"
                        easing="ease-out"
                        duration={2000}
                        style={styles.fillCenter}>
                        <MImage
                            imageSource={IMAGES.image2834}
                            style={COMMON.image1190}
                            customWidth={scale(390)}
                            customHeight={scale(130)}
                        />
                        <MImage
                            imageSource={IMAGES.image6011}
                            style={COMMON.image320}
                            customWidth={scale(390)}
                            customHeight={scale(175)}
                        />
                        <MImage
                            imageSource={IMAGES.image6462}
                            style={COMMON.image221}
                            customWidth={scale(390)}
                            customHeight={scale(144)}
                        />
                    </Animatable.View>
                </ScrollView>
            </View>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    splash7: {
        backgroundColor: COLORS.Color611,
        height: '100%',
        width: '100%',
    },
    fillCenter: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
export default OnboardingScreen;
