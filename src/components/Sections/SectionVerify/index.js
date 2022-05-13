import { MButton, MText } from 'components/common';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import { navigate } from 'navigation/methods';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'utils';

const SectionVerify = (props) => {
    const { style } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View style={[styles.SectionVerify, style]}>
            <MText textStyle={COMMON.TxtSectionVerify135}>
                We emailed you password recovery instructions to help you log
                back in.{' '}
            </MText>
            <MButton
                onPress={() => navigate('Signin')}
                style={COMMON.ButtonRect137}
                containerStyle={COMMON.Button136}
                text="Sign In "
                textStyle={COMMON.TextsButton138}
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
            <View style={styles.resendBtn}>
                <MText textStyle={{ fontSize: scale(12), marginTop: 5 }}>
                    Didn’t get our password reset email?{' '}
                </MText>
                <MText
                    textStyle={COMMON.TxtSectionVerify139}
                    onPress={() => navigate('Forgetpassword')}>
                    Resend it{' '}
                </MText>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionVerify: {
        paddingBottom: verticalScale(32),
        paddingTop: verticalScale(32),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        width: '100%',
    },
    resendBtn: { alignSelf: 'center', flexDirection: 'row' },
});
export default React.memo(SectionVerify);
