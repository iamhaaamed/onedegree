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
import { navigate } from 'navigation/methods';
const SectionProgram = (props) => {
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
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.SectionProgram, style]}
            onPress={() => navigate('ChatScreen')}>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionProgram14]}>
                <View style={{ width: '30%' }}>
                    <MImage
                        imageSource={IMAGES.image9641}
                        style={COMMON.imageprogram15}
                        customWidth={scale(57)}
                        customHeight={scale(57)}
                    />
                </View>
                <View style={{ width: '70%' }}>
                    <MText textStyle={COMMON.TxtSectionProgram16}>
                        Program title{' '}
                    </MText>
                    <MText textStyle={COMMON.TxtSectionProgram17}>
                        Last seen - 11:35 AM{' '}
                    </MText>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    SectionProgram: {
        paddingBottom: verticalScale(24),
        paddingTop: verticalScale(24),
        paddingRight: scale(16),
        paddingLeft: scale(16),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.06)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 5,
        // opacity: 0.78,
        width: '100%',
        height: verticalScale(105),
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
    },
});
export default SectionProgram;
