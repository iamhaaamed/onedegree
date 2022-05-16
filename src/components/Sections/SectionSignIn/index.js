import auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';
import { MButton, MInput, MLoading, MText } from 'components/common';
import { SectionRowSocialCenter } from 'components/Sections';
import { COLORS } from 'constants/common';
import { Formik } from 'formik';
import { useLogin } from 'hooks/auth';
import useTheme from 'hooks/useTheme';
import { navigate } from 'navigation/methods';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import thirdPartyAuthService from 'services/thirdPartyAuthService/thirdPartyAuthService';
import { scale, verticalScale } from 'utils';
import * as yup from 'yup';
import { authStore } from '../../../store';

const SectionSignIn = (props) => {
    const { style } = props;
    const { COMMON } = useTheme();

    const navigation = useNavigation();
    const setToken = authStore((state) => state.setToken);
    const setVerify = authStore((state) => state.setVerify);
    const setAnswerQuestion = authStore((state) => state.setAnswerQuestion);
    const setUserName = authStore((state) => state.setUserName);
    const [isLoading, setIsLoading] = useState(false);
    const { mutate } = useLogin();
    const ValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email address')
            .required('Invalid email address'),
        password: yup
            .string()
            .min(6, 'Must be 6 characters or more')
            .max(12, 'Must be 12 characters or less')
            .required('Invalid password'),
    });
    const googleSignin = async () => {
        const {
            thirdPartyAccessToken,
            firebaseIdToken,
            firebaseUser,
            success,
        } = await thirdPartyAuthService.loginWithGoogle();

        if (success) {
            // console.log('thirdPartyAccessToken', thirdPartyAccessToken);
            // console.log('firebaseIdToken', firebaseIdToken);
            // console.log('firebaseUser', firebaseUser?.displayName);
            setUserName(firebaseUser?.displayName);
            onSigninWithSocial();
        }
    };
    const onSigninWithSocial = async () => {
        setIsLoading(true);
        try {
            mutate(
                {},
                {
                    onSuccess: onSuccessSignin,
                },
            );
        } catch (e) {
            if (e === 'NOT_FOUND') {
                showMessage({
                    message: 'You are not registered!',
                    type: 'danger',
                });
            }
        }
        setIsLoading(false);
    };
    const onSuccessSignin = async (data) => {
        const status = data?.user_login?.status;
        if (status === 'SUCCESS') {
            setToken(await auth().currentUser?.getIdToken());
            setAnswerQuestion(true);
            setVerify(true);
            navigation.dispatch(StackActions.replace('MainStack'));
        } else {
            showMessage({
                message: status || 'Error',
                type: 'danger',
            });
        }
    };
    const signinWithEmail = async (data) => {
        try {
            try {
                await auth().signInWithEmailAndPassword(
                    data?.email,
                    data?.password,
                );
                const checkDone = auth().currentUser?.emailVerified;
                if (checkDone) {
                    setToken(await auth().currentUser?.getIdToken());
                    setAnswerQuestion(true);
                    setVerify(true);
                    navigation.dispatch(StackActions.replace('MainStack'));
                } else {
                    showMessage({
                        message: 'Failed, Please Retry',
                        type: 'danger',
                    });
                }
            } catch (error) {
                const errorMessage = error?.message;
                if (errorMessage) {
                    showMessage({
                        message: errorMessage,
                        type: 'danger',
                    });
                }
            }
        } catch (err) {
            // console.log(err);
        }
    };
    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            if (data) {
                await signinWithEmail(data);
            }
            setToken(await auth().currentUser?.getIdToken());
            setAnswerQuestion(true);
            setVerify(true);
            mutate(
                {},
                {
                    onSuccess: onSuccessSignin,
                },
            );
        } catch (e) {
            // console.log(e, 'e');
        } finally {
            setIsLoading(false);
        }
    };
    async function doAppleLogin() {
        const {
            thirdPartyAccessToken,
            firebaseIdToken,
            firebaseUser,
            success,
        } = await thirdPartyAuthService.loginWithApple();

        if (success) {
            // console.log('thirdPartyAccessToken', thirdPartyAccessToken);
            // console.log('firebaseIdToken', firebaseIdToken);
            // console.log('firebaseUser', firebaseUser);
            setUserName(firebaseUser?.displayName);
            onSigninWithSocial();
        }
    }
    const FacebookSignIn = async () => {
        const {
            firebaseIdToken,
            success,
        } = await thirdPartyAuthService.loginWithFacebook();
        if (success) {
            onSigninWithSocial();
        }
    };
    return (
        <View style={[styles.SectionSignIn, style]}>
            <MLoading
                size="large"
                color={COLORS.Color323}
                isLoading={isLoading}
            />
            <MText textStyle={COMMON.TxtSectionSignIn26}>Sign In </MText>
            <MText textStyle={COMMON.TxtSectionSignIn27}>Welcome Back! </MText>
            <Formik
                validationSchema={ValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => onSubmit(values)}>
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <MInput
                            inputStyle={COMMON.InputRect86}
                            containerStyle={COMMON.Input85}
                            placeholder="Email Address"
                            placeholderColor={COLORS.Color280}
                            onChangeText={handleChange('email')}
                            error={errors && errors.email}
                            textStyle={COMMON.TextsInput29}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(48)}
                        />
                        <MInput
                            inputStyle={COMMON.InputRect86}
                            containerStyle={COMMON.Input85}
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            error={errors && errors.password}
                            placeholderColor={COLORS.Color280}
                            textStyle={COMMON.TextsInput32}
                            secureTextEntry
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(48)}
                        />
                        <MText
                            textStyle={COMMON.TxtSectionSignIn34}
                            onPress={() => navigate('Forgetpassword')}>
                            Forgot Password
                        </MText>
                        <MButton
                            onPress={handleSubmit}
                            style={COMMON.ButtonRect36}
                            containerStyle={COMMON.Button35}
                            text="Sign In "
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
                    </>
                )}
            </Formik>
            <View style={[COMMON.RowItemCenter, COMMON.RowItemSectionSignIn38]}>
                <View style={{ width: '30%' }}>
                    <View style={COMMON.LineSectionSignIn39}></View>
                </View>
                <View style={[COMMON.ColCenter, { width: '40%' }]}>
                    <MText textStyle={COMMON.TxtSectionSignIn40}>
                        Or Continue With{' '}
                    </MText>
                </View>
                <View style={{ width: '30%' }}>
                    <View style={COMMON.LineSectionSignIn41}></View>
                </View>
            </View>
            <SectionRowSocialCenter
                style={COMMON.EleSectionSignIn42}
                googleSignin={googleSignin}
                doAppleLogin={doAppleLogin}
                FacebookSignIn={FacebookSignIn}
            />
            <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => navigate('Signup')}>
                <MText
                    textStyle={[
                        COMMON.TxtSectionSignIn44,
                        { color: COLORS.lightText },
                    ]}>
                    Not A Member?{' '}
                </MText>
                <MText textStyle={COMMON.TxtSectionSignIn44}>Sign Up </MText>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionSignIn: {
        paddingBottom: verticalScale(28),
        paddingTop: verticalScale(0),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        width: '100%',
    },
    signInBtn: {
        alignSelf: 'center',
        paddingBottom: 10,
        marginTop: '-4%',
        flexDirection: 'row',
    },
});
export default React.memo(SectionSignIn);
