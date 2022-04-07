import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
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
    const { style } = props;
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
                style={COMMON.ButtonRect17}
                containerStyle={styles.centerIcon}
                color={COLORS.Color148}
                icon={{
                    name: 'google',
                    color: COLORS.Color963,
                    Component: MaterialCommunityIcons,
                }}
            />
            <MButton
                onPress={onPress}
                style={COMMON.ButtonRect19}
                containerStyle={styles.centerIcon}
                color={COLORS.Color148}
                icon={{
                    name: 'facebook',
                    color: COLORS.Color963,
                    Component: MaterialCommunityIcons,
                }}
            />
            <MButton
                onPress={onPress}
                style={COMMON.ButtonRect21}
                containerStyle={styles.centerIcon}
                color={COLORS.Color148}
                icon={{
                    name: 'apple',
                    color: COLORS.Color963,
                    Component: MaterialCommunityIcons,
                }}
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
    },
    centerIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default SectionRowSocialCenter;
