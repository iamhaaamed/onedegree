import React from 'react';
import { scale } from 'utils';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { MButton } from 'components/common';
import { Platform, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SectionRowSocialCenter = (props) => {
    const {
        style,
        googleSignin,
        googleSignup,
        doAppleRegister,
        FacebookSignUp,
        doAppleLogin,
        FacebookSignIn,
    } = props;
    const { IMAGES, COMMON } = useTheme();

    return (
        <View style={[styles.SectionRowSocialCenter, style]}>
            {Platform.OS == 'ios' && (
                <MButton
                    onPress={doAppleRegister || doAppleLogin}
                    containerStyle={styles.centerIcon}
                    color={COLORS.transparent}
                    icon={{
                        name: 'apple',
                        color: COLORS.textOnSecondary,
                        size: scale(30),
                        Component: MaterialCommunityIcons,
                    }}
                />
            )}
            <MButton
                onPress={FacebookSignUp || FacebookSignIn}
                containerStyle={styles.centerIcon}
                color={COLORS.transparent}
                icon={{
                    name: 'facebook',
                    color: COLORS.primary,
                    size: scale(30),
                    Component: MaterialCommunityIcons,
                }}
            />
            <MButton
                onPress={googleSignin || googleSignup}
                style={[COMMON.ButtonRect21]}
                containerStyle={styles.centerIcon}
                color={COLORS.transparent}
                backgroundImage={{
                    source: IMAGES.google,
                    imageStyle: styles.googleIcon,
                    resizeMode: 'cover',
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    SectionRowSocialCenter: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        right: '1%',
    },
    centerIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    googleIcon: {
        width: scale(25),
        height: scale(25),
        alignSelf: 'center',
        marginTop: scale(10),
        marginLeft: 10,
    },
});
export default SectionRowSocialCenter;
