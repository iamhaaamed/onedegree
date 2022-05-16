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
const SectionChat = (props) => {
    const { style, user } = props;
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
        <>
            <View
                style={[
                    user ? styles.SectionChat2 : styles.SectionChat,
                    style,
                ]}>
                <MText textStyle={[COMMON.TxtSectionChat33]}>
                    complete your profile{' '}
                </MText>
            </View>
            <MText
                textStyle={[
                    COMMON.TxtChat338,
                    { textAlign: user ? 'right' : 'left' },
                ]}>
                11:25 AM{' '}
            </MText>
        </>
    );
};
const styles = StyleSheet.create({
    SectionChat: {
        paddingBottom: verticalScale(13),
        paddingTop: verticalScale(12),
        paddingRight: scale(24),
        paddingLeft: scale(24),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.06)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 1,
        // opacity: 0.78,
        width: '90%',
        height: verticalScale(45),
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 0,
        justifyContent: 'center',
    },
    SectionChat2: {
        paddingBottom: verticalScale(13),
        paddingTop: verticalScale(12),
        paddingRight: scale(24),
        paddingLeft: scale(24),
        backgroundColor: COLORS.Color321,
        shadowColor: 'rgba(140,140,140,0.06)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 1,
        // opacity: 0.78,
        width: '90%',
        alignSelf: 'flex-end',
        // height: verticalScale(45),
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 21,
        justifyContent: 'center',
    },
});
export default React.memo(SectionChat);
