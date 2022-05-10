import * as yup from 'yup';
import { Formik } from 'formik';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { useRegister } from 'hooks/auth';
import { COLORS } from 'constants/common';
import { authStore } from '../../../store';
import { scale, verticalScale } from 'utils';
import auth from '@react-native-firebase/auth';
import { navigate } from 'navigation/methods';
import { showMessage } from 'react-native-flash-message';
import { SectionRowSocialCenter } from 'components/Sections';
import { MButton, MInput, MLoading, MText } from 'components/common';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import thirdPartyAuthService from 'services/thirdPartyAuthService/thirdPartyAuthService';

const SectionSignUp = (props) => {
    const { style } = props;
    const { COMMON } = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const setUserName = authStore((state) => state.setUserName);
    const { mutate: signupMutate } = useRegister();
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

    const googleSignup = async () => {
        const {
            thirdPartyAccessToken,
            firebaseIdToken,
            firebaseUser,
            success,
        } = await thirdPartyAuthService.loginWithGoogle();
        console.log(success, 'success');
        if (success) {
            console.log('thirdPartyAccessToken', thirdPartyAccessToken);
            console.log('firebaseIdToken', firebaseIdToken);
            console.log('firebaseUser', firebaseUser);
            setUserName(firebaseUser?.displayName);
            createUserWithSocial();
        }
    };
    const createUserWithSocial = async () => {
        setIsLoading(true);

        try {
            signupMutate(
                {},
                {
                    onSuccess: onSuccessSignup,
                },
            );
        } catch (err) {
            showMessage({
                message: 'Failed',
                type: 'danger',
            });
        }
        setIsLoading(false);
    };
    const onSuccessSignup = (data) => {
        console.log('dddddd', data);
        const status = data.user_signUp?.status;
        if (data.user_signUp?.status === 'SUCCESS') {
            navigate('Hiquestion2');
        } else {
            showMessage({
                message: status,
                type: 'danger',
            });
        }
    };
    const onSubmit = (data) => {
        createUserOnPress(data);
    };
    const createUserOnPress = async (data) => {
        setIsLoading(true);
        console.log('kkkk', data);
        const email = data?.email;
        const password = data?.password;
        try {
            await auth()
                .createUserWithEmailAndPassword(email, password)
                .then(async () => {
                    await auth().currentUser?.sendEmailVerification();
                    const emailVerified = auth().currentUser?.emailVerified;
                    console.log(emailVerified, 'emailVerified*****');

                    if (emailVerified) {
                        completeRegistrationWithEmailPassword();
                    } else {
                        Alert.alert(
                            'Email verification',
                            'We should verify your email, please check your inbox and follow the instruction',
                            [
                                {
                                    text: 'Got it',
                                    onPress: async () => {
                                        navigate('CheckEmail', {
                                            password,
                                            email,
                                        });
                                    },
                                    style: 'default',
                                },
                                {
                                    text: 'Cancel',
                                    onPress: () => null,
                                    style: 'cancel',
                                },
                            ],
                        );
                    }
                })
                .catch((error) => {
                    console.log(error, 'error');

                    const errorMessage = error?.message;
                    if (errorMessage) {
                        showMessage({
                            message: errorMessage,
                            type: 'danger',
                        });
                    }
                });
            setIsLoading(false);
        } catch (err) {
            console.log(err, 'err*****');

            setIsLoading(false);
        }
    };
    const completeRegistrationWithEmailPassword = async () => {
        signupMutate(
            {},
            {
                onSuccess: onSuccessSignup,
            },
        );
    };
    async function doAppleRegister() {
        const {
            thirdPartyAccessToken,
            firebaseIdToken,
            firebaseUser,
            success,
        } = await thirdPartyAuthService.loginWithApple();
        console.log(firebaseIdToken, 'firebaseIdToken');
        if (success) {
            console.log('thirdPartyAccessToken', thirdPartyAccessToken);
            console.log('firebaseIdToken', firebaseIdToken);
            console.log('firebaseUser', firebaseUser);
            setUserName(firebaseUser?.displayName);
            createUserWithSocial();
        }
    }
    const FacebookSignUp = async () => {
        const {
            thirdPartyAccessToken,
            firebaseIdToken,
            firebaseUser,
            success,
        } = await thirdPartyAuthService.loginWithFacebook();
        if (success) {
            createUserWithSocial();
        }
    };
    return (
        <View style={[styles.SectionSignUp, style]}>
            <MLoading
                size="large"
                color={COLORS.Color323}
                isLoading={isLoading}
            />
            <MText textStyle={COMMON.TxtSectionSignUp1}>Sign Up </MText>
            <MText textStyle={COMMON.TxtSectionSignUp2}>
                Discover Your New Future!{' '}
            </MText>
            <Formik
                validationSchema={ValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => onSubmit(values)}>
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <MInput
                            inputStyle={COMMON.InputRect5}
                            containerStyle={COMMON.Input3}
                            placeholder="Email Address"
                            onChangeText={handleChange('email')}
                            error={errors && errors.email}
                            placeholderColor={COLORS.Color280}
                            textStyle={COMMON.TextsInput4}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(48)}
                        />
                        <MInput
                            inputStyle={COMMON.InputRect5}
                            containerStyle={COMMON.Input3}
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            error={errors && errors.password}
                            placeholderColor={COLORS.Color280}
                            textStyle={COMMON.TextsInput4}
                            secureTextEntry
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(48)}
                        />
                        <MButton
                            // onPress={() => navigate('Forgetpassword1')}
                            onPress={handleSubmit}
                            style={COMMON.ButtonRect10}
                            containerStyle={COMMON.Button9}
                            text="Sign Up "
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
            <View style={[COMMON.RowItemCenter, COMMON.RowItemSectionSignUp12]}>
                <View style={{ width: '30%' }}>
                    <View style={COMMON.LineSectionSignUp13}></View>
                </View>
                <View style={[COMMON.ColCenter, { width: '40%' }]}>
                    <MText textStyle={COMMON.TxtSectionSignUp14}>
                        Or Continue With{' '}
                    </MText>
                </View>
                <View style={{ width: '30%' }}>
                    <View style={COMMON.LineSectionSignUp15}></View>
                </View>
            </View>
            <SectionRowSocialCenter
                style={COMMON.EleSectionSignUp22}
                googleSignup={googleSignup}
                doAppleRegister={doAppleRegister}
                FacebookSignUp={FacebookSignUp}
            />
            <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => navigate('Signin')}>
                <MText
                    textStyle={[
                        COMMON.TxtSectionSignIn44,
                        { color: COLORS.lightText },
                    ]}>
                    Not A Member?{' '}
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
