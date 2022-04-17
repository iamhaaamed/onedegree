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
const SectionRow = (props) => {
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
        <View style={[styles.SectionRow, style]}>
            <MText textStyle={COMMON.TxtSectionRow16}>
                certification cost{' '}
            </MText>
            <MText textStyle={COMMON.TxtSectionRow17}>$250-$25000 </MText>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionRow: {
        paddingBottom: verticalScale(21),
        paddingTop: verticalScale(18),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        backgroundColor: COLORS.Color915,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        height: verticalScale(63),
    },
});
export default SectionRow;
