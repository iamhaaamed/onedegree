import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText, MSwitch } from 'components/common';

const SectionHolder11 = (props) => {
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
        <View {...props} style={[styles.SectionHolder, style]}>
            <View
                style={{
                    width: '75%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}>
                <MText textStyle={COMMON.TxtSectionText13}>
                    {' '}
                    Notification{' '}
                </MText>
            </View>
            <View style={{ width: '15%' }}>
                <MSwitch
                    style={COMMON.SwitchOn7}
                    onBgColor={COLORS.Color289}
                    offBgColor={COLORS.disabled}
                    onColor={COLORS.Color289}
                    offColor={COLORS.disabled}
                    isOn={true}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionHolder: {
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.08)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 28,
        width: '100%',
        height: verticalScale(50),
        borderRadius: 12,
        marginBottom: scale(10),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
export default SectionHolder11;
