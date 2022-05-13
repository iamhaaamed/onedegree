import React from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { scale, verticalScale } from 'utils';
import { StyleSheet, View } from 'react-native';
import { MSwitch, MText } from 'components/common';

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
                <MText textStyle={COMMON.TxtSectionText13}>Notification</MText>
            </View>
            <View style={{ width: '15%' }}>
                <MSwitch
                    onBgColor="#EAEAEA"
                    offBgColor="#EAEAEA"
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
export default React.memo(SectionHolder11);
