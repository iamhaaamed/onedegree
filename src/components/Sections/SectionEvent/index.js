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
import Feather from 'react-native-vector-icons/Feather';

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
const SectionEvent = (props) => {
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
        <View style={[styles.SectionEvent, style]}>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionEvent24]}>
                <View
                    style={{
                        width: '10%',
                    }}>
                    <MIcon
                        IconComponent={Feather}
                        name="message-circle"
                        size={24}
                        color={COLORS.Color424}
                    />
                </View>
                <View style={{ width: '90%' }}>
                    <MText textStyle={COMMON.TxtSectionEvent25}> Event </MText>
                </View>
            </View>
            <MText textStyle={COMMON.TxtSectionEvent26}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
            </MText>
            <MText textStyle={COMMON.TxtSectionEvent27}>
                11 days ago - 11:35 Am{' '}
            </MText>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionEvent: {
        paddingBottom: verticalScale(18),
        paddingTop: verticalScale(11),
        paddingRight: scale(16),
        paddingLeft: scale(17),
        backgroundColor: COLORS.Color611,
        shadowColor: 'rgba(140,140,140,0.06)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        // opacity: 0.78,
        elevation: 2,
        width: '100%',
        height: verticalScale(144),
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
    },
});
export default SectionEvent;
