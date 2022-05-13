import { StackActions, useNavigation } from '@react-navigation/native';
import { MButton, MText } from 'components/common';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'utils';

const SectionStart = (props) => {
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
    return (
        <View style={[styles.SectionStart, style]}>
            <MText textStyle={COMMON.TxtSectionStart143}>Well Done! </MText>
            <MText textStyle={COMMON.TxtSectionStart144}>
                Time To Start Looking For Your New Career.
            </MText>
            <MButton
                onPress={() =>
                    navigation.dispatch(StackActions.replace('MainStack'))
                }
                style={COMMON.ButtonRect146}
                containerStyle={COMMON.Button145}
                text="Start Exploring"
                textStyle={COMMON.TextsButton147}
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
        </View>
    );
};
const styles = StyleSheet.create({
    SectionStart: {
        paddingBottom: verticalScale(0),
        paddingTop: verticalScale(0),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        width: '100%',
    },
});
export default React.memo(SectionStart);
