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
import { navigate } from 'navigation/methods';
const SectionSignIn = (props, navigation) => {
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
        <View style={[styles.SectionSignIn, style]}>
            <MText textStyle={COMMON.TxtSectionSignIn26}>Sign in </MText>
            <MText textStyle={COMMON.TxtSectionSignIn27}>Welcome back! </MText>
            <MInput
                inputStyle={COMMON.InputRect30}
                containerStyle={COMMON.Input28}
                placeholder="Email Address"
                placeholderColor={COLORS.Color280}
                textStyle={COMMON.TextsInput29}
                backgroundColor={COLORS.Color963}
                height={verticalScale(48)}
            />
            <MInput
                inputStyle={COMMON.InputRect33}
                containerStyle={COMMON.Input31}
                placeholder="Password"
                placeholderColor={COLORS.Color280}
                textStyle={COMMON.TextsInput32}
                secureTextEntry
                backgroundColor={COLORS.Color963}
                height={verticalScale(48)}
            />
            <MText
                textStyle={COMMON.TxtSectionSignIn34}
                onPress={() => navigate('Forgetpassword')}>
                Forgot password{' '}
            </MText>
            <MButton
                onPress={() => navigate('MainStack')}
                style={COMMON.ButtonRect36}
                containerStyle={COMMON.Button35}
                text="Sign in "
                textStyle={COMMON.TextsButton37}
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
            <View style={[COMMON.RowItemCenter, COMMON.RowItemSectionSignIn38]}>
                <View style={{ width: '30%' }}>
                    <View style={COMMON.LineSectionSignIn39}></View>
                </View>
                <View style={[COMMON.ColCenter, { width: '40%' }]}>
                    <MText textStyle={COMMON.TxtSectionSignIn40}>
                        Or continue with{' '}
                    </MText>
                </View>
                <View style={{ width: '30%' }}>
                    <View style={COMMON.LineSectionSignIn41}></View>
                </View>
            </View>
            <SectionRowSocialCenter style={COMMON.EleSectionSignIn42} />
            <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => navigate('Signup')}>
                <MText textStyle={{ fontSize: scale(12), marginTop: -1 }}>
                    Not a member?{' '}
                </MText>
                <MText textStyle={COMMON.TxtSectionSignIn44}>Sign up </MText>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionSignIn: {
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
export default SectionSignIn;
