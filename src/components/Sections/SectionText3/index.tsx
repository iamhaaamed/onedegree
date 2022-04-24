import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionSheet from 'react-native-actions-sheet';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText, MSwitch } from 'components/common';
import { SectionModalSignOut } from 'components/Sections';
const SectionText357 = (props) => {
    const { style } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const refActionSheet = useRef(null);
    const showActionSheet = () => {
        if (refActionSheet.current) {
            refActionSheet.current?.setModalVisible();
        }
    };
    return (
        <View {...props} style={[styles.SectionText3, style]}>
            <MText
                textStyle={COMMON.TxtSectionText38}
                onPress={() => showActionSheet()}>
                Sign out{' '}
            </MText>
            <ActionSheet ref={refActionSheet} containerStyle={styles.action}>
                <SectionModalSignOut
                    showModal={() => refActionSheet.current?.setModalVisible()}
                />
            </ActionSheet>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionText3: {
        paddingVertical: verticalScale(15),
        paddingRight: scale(18),
        paddingLeft: scale(18),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.08)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 28,
        width: '100%',
        height: verticalScale(52),
        borderRadius: 12,
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        height: scale(200),
    },
});
export default SectionText357;
