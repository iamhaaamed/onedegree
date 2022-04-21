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
const SectionRowCenter = (props) => {
    const { style, nextPress, backPress, intro, questions } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View style={[styles.SectionRowCenter, style]}>
            <MButton
                onPress={backPress}
                style={intro ? COMMON.ButtonRect1142 : COMMON.ButtonRect114}
                containerStyle={COMMON.Button113}
                text="Back"
                textStyle={[
                    COMMON.TextsButton115,
                    intro && { color: COLORS.white },
                ]}
                color={COLORS.Color963}
            />
            <MButton
                onPress={nextPress}
                style={[
                    COMMON.ButtonRect111,
                    intro && { backgroundColor: COLORS.white },
                ]}
                containerStyle={COMMON.Button110}
                text={questions ? 'Save' : 'Next'}
                textStyle={[
                    COMMON.TextsButton112,
                    intro && { color: COLORS.Color378 },
                ]}
                gradient={
                    intro
                        ? false
                        : {
                              colors: [COLORS.Color323, COLORS.Color409],
                              start: {
                                  x: -0.15500132739543915,
                                  y: 0.6157848834991455,
                              },
                              end: {
                                  x: 1.014054298400879,
                                  y: 0.17686034739017487,
                              },
                          }
                }
            />
        </View>
    );
};
const styles = StyleSheet.create({
    SectionRowCenter: {
        paddingBottom: verticalScale(27),
        paddingTop: verticalScale(27),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
    },
});
export default SectionRowCenter;
