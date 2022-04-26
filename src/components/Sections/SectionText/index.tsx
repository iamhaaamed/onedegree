import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText, MImage } from 'components/common';
import { navigate } from 'navigation/methods';

const SectionText = (props) => {
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
        <View {...props} style={[styles.SectionText, style]}>
            <MText
                textStyle={[
                    COMMON.TxtSectionText4,
                    { marginHorizontal: scale(0), marginTop: -10 },
                ]}>
                Training Program’s Name{' '}
            </MText>
            <View style={[COMMON.RowItem, { height: verticalScale(32) }]}>
                <View style={{ width: '40%' }}>
                    <MText textStyle={COMMON.TxtSectionText5}>
                        Program Cost:{' '}
                    </MText>
                </View>
                <View style={{ width: '60%' }}>
                    <MText textStyle={COMMON.TxtSectionText45}>$200 </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem, { height: verticalScale(32) }]}>
                <View style={{ width: '48%' }}>
                    <MText textStyle={COMMON.TxtSectionText5}>
                        Length of program:{' '}
                    </MText>
                </View>
                <View style={{ width: '52%' }}>
                    <MText textStyle={COMMON.TxtSectionText45}>6 months </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem, { height: verticalScale(32) }]}>
                <View style={{ width: '55%' }}>
                    <MText textStyle={COMMON.TxtSectionText5}>
                        Job Placement Rate:{' '}
                    </MText>
                </View>
                <View style={{ width: '45%' }}>
                    <MText textStyle={COMMON.TxtSectionText45}>10% </MText>
                </View>
            </View>
            <MButton
                onPress={() => navigate('ChatScreen')}
                style={[COMMON.ButtonRect12]}
                text="Apply"
                textStyle={COMMON.TextsButton13}
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
                    style: COMMON.Button11,
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    SectionText: {
        width: '100%',
    },
});
export default SectionText;
