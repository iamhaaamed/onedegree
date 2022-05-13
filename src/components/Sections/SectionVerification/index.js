import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
} from 'react-native';
import { scale, verticalScale, height } from 'utils';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { useRef } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
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
import { useRegister } from 'hooks/auth';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { goBack, navigate } from 'navigation/methods';

import { authStore } from '../../../store';
import { SectionVerify } from '..';
const SectionVerification = (props) => {
    const { style, email, password } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const { mutate } = useRegister();
    const { Email, Password } = authStore((state) => state);
    const setVerify = authStore((state) => state.setVerify);
    const onVerifyEmail = async () => {
        setIsLoading(true);
        try {
            await auth().signInWithEmailAndPassword(
                email ? email : Email,
                password ? password : Password,
            );
            const checkDone = auth().currentUser?.emailVerified;
            if (checkDone) {
                completeRegistrationWithEmailPassword();
            } else {
                showMessage({
                    message: 'Failed, Please Retry',
                    type: 'danger',
                });
            }
        } catch (err) {
            console.log(err, 'verifyEmail*****', email, password);
        }
        setIsLoading(false);
    };
    const completeRegistrationWithEmailPassword = async () => {
        mutate(undefined, {
            onSuccess: (data) => {
                if (data?.user_signUp?.status === 'SUCCESS') {
                    setVerify(true);
                    navigate('Hiquestion2');
                } else {
                    showMessage({
                        message: data?.user_signUp?.status,
                        type: 'danger',
                    });
                }
            },
        });
    };
    return (
        <View style={[styles.SectionVerification, style]}>
            <MLoading
                size="large"
                color={COLORS.Color323}
                isLoading={isLoading}
            />
            {/* <MText textStyle={COMMON.TxtSectionVerification83}>
                Verification{' '}
            </MText>
            <MText textStyle={COMMON.TxtSectionVerification84}>
                The code was sent to sample@mail.com{' '}
            </MText> */}
            {/* <CodeField
                ref={ref}
                {...prop}
                value={value}
                onChangeText={(txt) => setValue(txt)}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            /> */}
            {/* <MInput
                inputStyle={COMMON.InputRect86}
                containerStyle={COMMON.Input85}
                backgroundColor={COLORS.Color963}
                height={verticalScale(48)}
            /> */}
            {/* <MText textStyle={COMMON.TxtSectionVerification87}>
                Resend code{' '}
            </MText> */}
            <MButton
                onPress={onVerifyEmail}
                style={COMMON.ButtonRect89}
                containerStyle={[COMMON.Button88, { marginTop: scale(100) }]}
                text="Verify email"
                textStyle={COMMON.TextsButton90}
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
                style={styles.signInBtn}
                onPress={() => navigate('Signup')}>
                <MText textStyle={{ fontSize: scale(12), marginTop: -1 }}>
                    Did Not Receive The Email? Check Your Spam Or{' '}
                </MText>
                <MText textStyle={COMMON.TxtSectionSignUp24}>
                    Try Another Email Address
                </MText>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionVerification: {
        paddingBottom: verticalScale(32),
        paddingTop: verticalScale(32),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        width: '100%',
    },
    codeFieldRoot: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: scale(20),
    },
    cell: {
        width: scale(40),
        height: scale(45),
        lineHeight: scale(40),
        fontSize: 24,
        borderWidth: 2,
        borderColor: COLORS.Color321,
        textAlign: 'center',
        borderRadius: scale(10),
        backgroundColor: COLORS.white,
        color: COLORS.textOnSecondary,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    focusCell: {
        borderColor: COLORS.primary,
    },
    signInBtn: {
        marginTop: scale(50),
        alignItems: 'center',
    },
});
export default React.memo(SectionVerification);
