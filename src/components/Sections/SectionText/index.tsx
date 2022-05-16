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
    const { style, data } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View {...props} style={[styles.SectionText, style]}>
            <MText
                textStyle={[
                    COMMON.TxtSectionText4,
                    { marginHorizontal: scale(0), marginTop: -10 },
                ]}>
                {data?.title}
            </MText>
            <View style={[COMMON.RowItem, { height: verticalScale(32) }]}>
                <View style={{ width: '38%' }}>
                    <MText textStyle={COMMON.TxtSectionText5}>
                        Program Cost:{' '}
                    </MText>
                </View>
                <View style={{ width: '62%' }}>
                    <MText textStyle={COMMON.TxtSectionText45}>
                        ${data?.programCost}{' '}
                    </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem, { height: verticalScale(32) }]}>
                <View style={{ width: '55%' }}>
                    <MText textStyle={COMMON.TxtSectionText5}>
                        Length of program:{' '}
                    </MText>
                </View>
                <View style={{ width: '45%' }}>
                    <MText textStyle={COMMON.TxtSectionText45}>
                        {data?.lengthOfProgram} months{' '}
                    </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem, { height: verticalScale(32) }]}>
                <View style={{ width: '55%' }}>
                    <MText textStyle={COMMON.TxtSectionText5}>
                        Job Placement Rate:{' '}
                    </MText>
                </View>
                <View style={{ width: '55%' }}>
                    <MText textStyle={COMMON.TxtSectionText45}>
                        {data?.jobPlacementRate}%{' '}
                    </MText>
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
export default React.memo(SectionText);
