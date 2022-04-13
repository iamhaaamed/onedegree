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
import { goBack } from 'navigation/methods';
const SectionTop01 = (props) => {
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
        <View style={[styles.SectionTop01, style]}>
            <View style={{ width: '15%', alignSelf: 'center' }}>
                <MButton
                    onPress={() => goBack()}
                    style={COMMON.ButtonRect10}
                    color={'transparent'}
                    iconRight={{
                        name: 'arrow-back-ios',
                        color: COLORS.Color424,
                        Component: MaterialCommunityIcons,
                    }}
                />
            </View>
            <MText textStyle={COMMON.TxtSectionTop0111}>Notification </MText>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionTop01: {
        paddingBottom: verticalScale(11),
        paddingTop: verticalScale(11),
        paddingRight: scale(141),
        paddingLeft: scale(12),
        backgroundColor: COLORS.Color611,
        shadowColor: 'rgba(140,140,140,0.09)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 5,
        opacity: 0.78,
        width: '100%',
        height: verticalScale(56),
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});
export default SectionTop01;
