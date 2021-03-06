import { MButton, MText } from 'components/common';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import { navigate } from 'navigation/methods';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from 'utils';

const SectionQuestion = (props) => {
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
        <View style={[styles.SectionQuestion, style]}>
            <MText textStyle={COMMON.TxtSectionQuestion95}>Hi, Welcome </MText>
            <MText textStyle={COMMON.TxtSectionQuestion96}>
                We’re So Excited To Help You Find The Perfect Skilled Career
                That Is Both High-Paying And Doesn’t Require College Debt.
            </MText>
            <MButton
                onPress={() => navigate('Question2')}
                style={COMMON.ButtonRect98}
                containerStyle={COMMON.Button97}
                text="Let’s Get Started!"
                textStyle={COMMON.TextsButton99}
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
    SectionQuestion: {
        paddingRight: scale(32),
        paddingLeft: scale(32),
        width: '100%',
    },
});
export default React.memo(SectionQuestion);
