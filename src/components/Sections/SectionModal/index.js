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
const SectionModal = (props) => {
    const { style, showModal } = props;
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
        <View style={[styles.SectionModal, style]}>
            <View style={COMMON.SectionPaddingSectionModal51}>
                <MText textStyle={COMMON.TxtSectionModal52}>
                    Months to pay off{' '}
                </MText>
                <MText textStyle={COMMON.TxtSectionModal53}>
                    This is the number of months it will take to pay off your
                    certification if you pay 20% of your take home pay towards
                    it. Example: If you make $1000 per week and you put $200
                    towards paying off your certification.{' '}
                </MText>

                <MButton
                    onPress={() => showModal(true)}
                    style={COMMON.ButtonRect55}
                    containerStyle={COMMON.Button54}
                    text="Confirmation"
                    textStyle={COMMON.TextsButton56}
                    gradient={{
                        colors: [
                            COLORS.Color323,
                            COLORS.Color148,
                            COLORS.Color912,
                            COLORS.Color674,
                            COLORS.Color455,
                            COLORS.Color240,
                        ],
                        start: {
                            x: -0.15500132739543915,
                            y: 0.6157848834991455,
                        },
                        end: {
                            x: 1.014054298400879,
                            y: 0.17686034739017487,
                        },
                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionModal: {
        paddingBottom: verticalScale(32),
        paddingTop: verticalScale(32),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        backgroundColor: COLORS.white,
        width: '100%',
        height: verticalScale(483),
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
});
export default SectionModal;
