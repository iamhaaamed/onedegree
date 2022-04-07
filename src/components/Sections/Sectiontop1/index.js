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
const Sectiontop1 = (props) => {
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
        <View style={[styles.Sectiontop1, style]}>
            <View style={COMMON.SectionPaddingSectiontop1140}>
                <MText textStyle={COMMON.TxtSectiontop1141}>
                    Getting started{' '}
                </MText>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Sectiontop1: {
        backgroundColor: COLORS.Color963,
        shadowColor: 'rgba(140,140,140,0.09)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        opacity: 0.78,
        width: '100%',
        height: verticalScale(56),
    },
});
export default Sectiontop1;
