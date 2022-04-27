import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    ImageBackground,
} from 'react-native';
import { scale, verticalScale, height } from 'utils';
import { useState } from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { useRef } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
const SectionRowSocialCenter = (props) => {
    const { style, googleSignin } = props;
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
        <View style={[styles.SectionRowSocialCenter, style]}>
            <MButton
                onPress={onPress}
                // style={COMMON.ButtonRect21}
                containerStyle={styles.centerIcon}
                color={COLORS.transparent}
                icon={{
                    name: 'apple',
                    color: COLORS.textOnSecondary,
                    size: scale(30),
                    Component: MaterialCommunityIcons,
                }}
            />
            <MButton
                onPress={onPress}
                // style={COMMON.ButtonRect19}
                containerStyle={styles.centerIcon}
                color={COLORS.transparent}
                icon={{
                    name: 'facebook',
                    color: COLORS.primary,
                    size: scale(30),
                    Component: MaterialCommunityIcons,
                }}
            />
            <MButton
                onPress={googleSignin}
                style={[COMMON.ButtonRect21]}
                containerStyle={styles.centerIcon}
                color={COLORS.transparent}
                backgroundImage={{
                    source: IMAGES.google,
                    imageStyle: styles.googleIcon,
                    resizeMode: 'cover',
                }}
                // icon={{
                //     name: 'google',
                //     color: COLORS.Color963,
                //     Component: MaterialCommunityIcons,
                // }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    SectionRowSocialCenter: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        right: '1%',
    },
    centerIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    googleIcon: {
        width: scale(25),
        height: scale(25),
        alignSelf: 'center',
        marginTop: scale(10),
        marginLeft: 10,
    },
});
export default SectionRowSocialCenter;
