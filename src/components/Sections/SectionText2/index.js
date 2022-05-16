import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText } from 'components/common';
import { navigate } from 'navigation/methods';

const SectionText2 = (props) => {
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
        <View {...props} style={[styles.SectionText2, style]}>
            <MText
                mb={verticalScale(19)}
                textStyle={COMMON.TxtSectionText13}
                iconName="checkbox-blank-circle"
                iconColor={COLORS.Color424}
                iconSize={scale(13)}
                iconStyle={{ marginRight: scale(10) }}
                onPress={() => navigate('TermsOfService')}>
                {' '}
                Terms & Conditions{' '}
            </MText>
            <MText
                textStyle={[
                    COMMON.TxtSectionText13,
                    { marginTop: verticalScale(10) },
                ]}
                iconName="checkbox-blank-circle"
                iconColor={COLORS.Color424}
                iconSize={scale(13)}
                iconStyle={{ marginHorizontal: scale(10) }}
                onPress={() => navigate('PrivacyPolicy')}>
                {' '}
                Privacy Policy{' '}
            </MText>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionText2: {
        paddingVertical: verticalScale(20),
        alignItems: 'flex-start',
        marginVertical: scale(10),
        paddingHorizontal: scale(18),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.08)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 28,
        width: '100%',
        // height: verticalScale(107),
        borderRadius: 12,
    },
});
export default React.memo(SectionText2);
