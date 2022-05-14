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
    KeyboardAwareScrollView,
} from 'components/common';
import { showMessage } from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import * as yup from 'yup';
import { Formik } from 'formik';
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
    const [isLoading, setIsLoading] = useState(false);
    const ValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email address')
            .required('Invalid email address'),
    });
    const onSubmitForgotPassword = async (data) => {
        setIsLoading(true);
        try {
            await auth()
                .sendPasswordResetEmail(data.email)
                .then((result) => {
                    setIsLoading(false);
                    navigate('VerifyEmail');
                });
        } catch (err) {
            console.log(err?.message, 'err');
            showMessage({
                message: err?.message.split(']')[1],
                type: 'danger',
            });
        }
        setIsLoading(false);
    };

    const onSubmit = (data) => {
        onSubmitForgotPassword(data);
    };
    return (
        <KeyboardAwareScrollView style={[styles.SectionForgetPass, style]}>
            <MLoading
                size="large"
                color={COLORS.Color323}
                isLoading={isLoading}
            />
            <MText textStyle={COMMON.TxtSectionSignIn26}>Forget Password</MText>
            <MText textStyle={COMMON.TxtSectionSignIn27}>
                Please enter your email{' '}
            </MText>
            <Formik
                validationSchema={ValidationSchema}
                initialValues={{ email: '' }}
                onSubmit={(values) => onSubmit(values)}>
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <MInput
                            inputStyle={COMMON.InputRect86}
                            containerStyle={COMMON.Input85}
                            placeholder="Info@example.com"
                            error={errors && errors.email}
                            onChangeText={handleChange('email')}
                            placeholderColor={COLORS.Color758}
                            textStyle={COMMON.TextsInput48}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(48)}
                        />
                        <MButton
                            onPress={
                                handleSubmit
                                // () => navigate('VerifyEmail')
                            }
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
            <TouchableOpacity
                style={styles.signUpBtn}
                onPress={() => navigate('Signup')}>
                <MText textStyle={{ fontSize: scale(12), marginTop: '-4%' }}>
                    Not A Member?{' '}
                </MText>
                <MText textStyle={COMMON.TxtSectionForgetPass53}>
                    Sign up{' '}
                </MText>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
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
export default React.memo(SectionForgetPass);
