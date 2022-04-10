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
const SectionForgetPass = (props) => {
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
        <View style={[styles.SectionForgetPass, style]}>
            <MText textStyle={COMMON.TxtSectionForgetPass46}>
                Please enter your email{' '}
            </MText>
            <MInput
                inputStyle={COMMON.InputRect49}
                containerStyle={COMMON.Input47}
                placeholder="Info@example.com"
                placeholderColor={COLORS.Color758}
                textStyle={COMMON.TextsInput48}
                backgroundColor={COLORS.Color963}
                height={verticalScale(48)}
            />
            <MButton
                onPress={() => navigate('Forgetpassword1')}
                style={COMMON.ButtonRect51}
                containerStyle={COMMON.Button50}
                text="Next"
                textStyle={COMMON.TextsButton52}
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
            <TouchableOpacity
                style={styles.signUpBtn}
                onPress={() => navigate('Signup')}>
                <MText textStyle={{ fontSize: scale(12), marginTop: -1 }}>
                    Not a member?{' '}
                </MText>
                <MText textStyle={COMMON.TxtSectionForgetPass53}>
                    Sign up{' '}
                </MText>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionForgetPass: {
        paddingBottom: verticalScale(0),
        paddingTop: verticalScale(0),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        width: '100%',
    },
    signUpBtn: {
        alignSelf: 'center',
        paddingBottom: 10,
        flexDirection: 'row',
    },
});
export default SectionForgetPass;
