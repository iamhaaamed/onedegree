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
import thirdPartyAuthService from 'services/thirdPartyAuthService/thirdPartyAuthService';
import { showMessage } from 'react-native-flash-message';
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
import { authStore } from '../../../store';
import { navigate } from 'navigation/methods';
import { StackActions, useNavigation } from '@react-navigation/native';
const SectionSignIn = (props) => {
    const { style } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    const navigation = useNavigation();
    // const {setIsUserLoggedIn} = authStore(state => state);
    const setToken = authStore((state) => state.setToken);
    const [isLoading, setIsLoading] = useState(false);
    const { mutate } = useLogin();
    const googleSignin = async () => {
        const {
            thirdPartyAccessToken,
            firebaseIdToken,
            firebaseUser,
            success,
        } = await thirdPartyAuthService.loginWithGoogle();
        console.log(firebaseIdToken, 'firebaseIdToken');
        if (success) {
            console.log('thirdPartyAccessToken', thirdPartyAccessToken);
            console.log('firebaseIdToken', firebaseIdToken);
            console.log('firebaseUser', firebaseUser);
            onSigninWithSocial();
        }
    };
    const onSigninWithSocial = async () => {
        setIsLoading(true);
        try {
            // mutate(
            //     {},
            //     {
            //         onSuccess: onSuccessSignin,
            //     },
            // );
        } catch (e) {
            console.log(e, 'e!!!!');
            if (e === 'NOT_FOUND') {
                showMessage({
                    message: 'You are not registered!',
                    type: 'danger',
                });
            }
        }
        setIsLoading(false);
    };
    const onSuccessSignin = (data) => {
        const status = data?.user_signIn?.status;
        if (status === 'SUCCESS') {
            setToken('12345');
            navigation.dispatch(StackActions.replace('MainStack'));
        } else {
            showMessage({
                message: status || 'Error',
                type: 'danger',
            });
        }
    };
    return (
        <View style={[styles.SectionSignIn, style]}>
            <MLoading
                size="large"
                color={COLORS.Color323}
                isLoading={isLoading}
            />
            <MText textStyle={COMMON.TxtSectionSignIn26}>Sign in </MText>
            <MText textStyle={COMMON.TxtSectionSignIn27}>Welcome back! </MText>
            <MInput
                inputStyle={COMMON.InputRect86}
                containerStyle={COMMON.Input85}
                placeholder="Email Address"
                placeholderColor={COLORS.Color280}
                textStyle={COMMON.TextsInput29}
                backgroundColor={COLORS.Color963}
                height={verticalScale(48)}
            />
            <MInput
                inputStyle={COMMON.InputRect86}
                containerStyle={COMMON.Input85}
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
                onPress={() => {
                    setToken('12345');
                    navigation.dispatch(StackActions.replace('MainStack'));
                }}
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
            <SectionRowSocialCenter
                style={COMMON.EleSectionSignIn42}
                googleSignin={googleSignin}
            />
            <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => navigate('Signup')}>
                <MText
                    textStyle={[
                        COMMON.TxtSectionSignIn44,
                        { color: COLORS.lightText },
                    ]}>
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
