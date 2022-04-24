import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText, MIcon } from 'components/common';

const SectionText1 = (props) => {
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
        // <TouchableOpacity
        //     {...props}
        //     style={[styles.SectionText1, style]}
        //     activeOpacity={0.6}>
        //     <MIcon
        //         name="checkbox-blank-circle"
        //         color={COLORS.Color424}
        //         size={scale(13)}
        //         style={{ marginHorizontal: 10 }}
        //     />
        //     <MText textStyle={COMMON.TxtSectionText13}>FAQs </MText>
        // </TouchableOpacity>
        <View style={styles.SectionText1}>
            <MText
                mb={verticalScale(19)}
                textStyle={COMMON.TxtSectionText13}
                iconName="checkbox-blank-circle"
                iconColor={COLORS.Color424}
                iconSize={scale(13)}
                iconStyle={{ marginRight: scale(10) }}
                onPress={() => navigate('TermsOfService')}>
                {' '}
                FAQs{' '}
            </MText>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionText1: {
        // paddingBottom: verticalScale(24),
        // paddingTop: verticalScale(23),
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: scale(10),
        // justifyContent: 'center',
        paddingRight: scale(18),
        paddingLeft: scale(18),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.08)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 28,
        width: '100%',
        height: verticalScale(71),
        borderRadius: 12,
        flexDirection: 'row',
    },
});
export default SectionText1;
