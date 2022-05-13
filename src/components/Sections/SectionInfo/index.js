import { MText } from 'components/common';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'utils';

const SectionInfo = (props) => {
    const { style, title, data } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View style={[styles.SectionInfo, style]}>
            <View style={COMMON.RowItem}>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionInfo28}>{title}</MText>
                </View>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionInfo29}>{data} </MText>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionInfo: {
        paddingBottom: verticalScale(18),
        paddingTop: verticalScale(17),
        paddingRight: scale(13),
        paddingLeft: scale(16),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.06)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 28,
        elevation: 1,
        width: '100%',
        height: verticalScale(60),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
    },
});
export default React.memo(SectionInfo);
