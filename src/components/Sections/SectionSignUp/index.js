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
import { SectionRowSocialCenter } from 'components/Sections';
const SectionSignUp = (props) => {
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
        <View style={[styles.SectionSignUp, style]}>
            <MText textStyle={COMMON.TxtSectionSignUp1}>Sign up </MText>
            <MText textStyle={COMMON.TxtSectionSignUp2}>
                Discover your new future!{' '}
            </MText>
            <MInput
                inputStyle={COMMON.InputRect5}
                containerStyle={COMMON.Input3}
                placeholder="Email Address"
                placeholderColor={COLORS.Color280}
                textStyle={COMMON.TextsInput4}
                backgroundColor={COLORS.Color963}
                height={verticalScale(48)}
            />
            <MInput
                inputStyle={COMMON.InputRect8}
                containerStyle={COMMON.Input6}
                placeholder="Password"
                placeholderColor={COLORS.Color280}
                textStyle={COMMON.TextsInput7}
                secureTextEntry
                backgroundColor={COLORS.Color963}
                height={verticalScale(48)}
            />
            <MButton
                onPress={onPress}
                style={COMMON.ButtonRect10}
                containerStyle={COMMON.Button9}
                text="Sign up "
                textStyle={COMMON.TextsButton11}
                gradient={{
                    colors: [
                        COLORS.Color323,
                        COLORS.Color148,
                        COLORS.Color912,
                        COLORS.Color674,
                        COLORS.Color455,
                        COLORS.Color240,
                    ],
                    start: { x: -0.15500132739543915, y: 0.6157848834991455 },
                    end: { x: 1.014054298400879, y: 0.17686034739017487 },
                }}
            />
            <View style={[COMMON.RowItemCenter, COMMON.RowItemSectionSignUp12]}>
                <View style={{ width: '30%' }}>
                    <View style={COMMON.LineSectionSignUp13}></View>
                </View>
                <View style={[COMMON.ColCenter, { width: '40%' }]}>
                    <MText textStyle={COMMON.TxtSectionSignUp14}>
                        Or continue with{' '}
                    </MText>
                </View>
                <View style={{ width: '30%' }}>
                    <View style={COMMON.LineSectionSignUp15}></View>
                </View>
            </View>
            <SectionRowSocialCenter style={COMMON.EleSectionSignUp22} />
            <TouchableOpacity style={styles.signInBtn} onPress={() => null}>
                <MText textStyle={{ fontSize: scale(12), marginTop: -1 }}>
                    Not a member?{' '}
                </MText>
                <MText textStyle={COMMON.TxtSectionSignUp24}>Sign In </MText>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionSignUp: {
        paddingBottom: verticalScale(0),
        paddingTop: verticalScale(0),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        width: '100%',
    },
    signInBtn: {
        alignSelf: 'center',
        paddingBottom: 10,
        flexDirection: 'row',
    },
});
export default SectionSignUp;
