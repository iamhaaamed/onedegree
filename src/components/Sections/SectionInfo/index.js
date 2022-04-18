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
const SectionInfo = (props) => {
    const { style } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View style={[styles.SectionInfo, style]}>
            <View style={COMMON.RowItem}>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionInfo28}>Location </MText>
                </View>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionInfo29}>New York </MText>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionInfo: {
        paddingBottom: verticalScale(18),
        paddingTop: verticalScale(17),
        paddingRight: scale(13),
        paddingLeft: scale(16),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.06)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 28,
        elevation: 1,
        width: '100%',
        height: verticalScale(60),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
    },
});
export default SectionInfo;
