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

    return (
        <View style={[styles.SectionModal, style]}>
            <View style={styles.line} />
            <View style={COMMON.SectionPaddingSectionModal51}>
                <MText textStyle={COMMON.TxtSectionModal52}>Sign out</MText>
                <MText textStyle={COMMON.TxtSectionModal532}>
                    Are you sure you want to sign out?{' '}
                </MText>

                <View style={[styles.SectionRowCenter, style]}>
                    <MButton
                        onPress={() => showModal(true)}
                        style={COMMON.ButtonRect114}
                        containerStyle={[COMMON.Button113, { elevation: 5 }]}
                        text="Yes"
                        textStyle={[COMMON.TextsButton115]}
                        color={COLORS.Color963}
                    />
                    <MButton
                        onPress={() => showModal(true)}
                        style={[COMMON.ButtonRect111]}
                        containerStyle={COMMON.Button110}
                        text="No"
                        textStyle={[COMMON.TextsButton112]}
                        gradient={{
                            colors: [COLORS.Color323, COLORS.Color409],
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
    SectionRowCenter: {
        paddingBottom: verticalScale(27),
        paddingTop: verticalScale(27),
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
    },
});
export default SectionModal;
