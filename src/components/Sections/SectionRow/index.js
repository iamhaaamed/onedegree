import React, { useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
} from 'react-native';
import { scale, verticalScale, height } from 'utils';
import { useState } from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import ActionSheet from 'react-native-actions-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    MIcon,
    MText,
    MTouchable,
    MButton,
    MInput,
    MImageBackground,
    MImage,
    MStatusBar,
    MSwitch,
    MCheckBox,
    MFlatList,
    MChip,
    MDropDown,
    MOnboarding,
    MDateTimePicker,
    MImagePicker,
    MLoading,
    MModal,
    MTab,
    MAccordion,
    MSnackbar,
    MSlider,
} from 'components/common';
import { navigate } from 'navigation/methods';
import { SectionModal } from '..';
const SectionRow = (props) => {
    const { style, title, data, infoIcon, textStyle } = props;
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
        <View style={[styles.SectionRow, style]}>
            <MText textStyle={COMMON.TxtSectionRow16}>{title}</MText>
            {infoIcon && (
                <MIcon
                    name={'information-outline'}
                    IconComponent={MaterialCommunityIcons}
                    color={COLORS.Color756}
                    onPress={() => showActionSheet()}
                    style={styles.info}
                />
            )}
            <MText
                textStyle={[COMMON.TxtSectionRow17, textStyle]}
                numberOfLines={2}>
                {data}
            </MText>
            <ActionSheet ref={refActionSheet} containerStyle={styles.action}>
                <SectionModal
                    showModal={() => refActionSheet.current?.setModalVisible()}
                />
            </ActionSheet>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionRow: {
        paddingBottom: verticalScale(21),
        paddingTop: verticalScale(18),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        backgroundColor: COLORS.Color915,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        // height: verticalScale(63),
    },
    info: {
        marginRight: '25%',
        marginTop: 1,
        padding: 5,
        width: scale(30),
        height: scale(30),
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
    },
});
export default SectionRow;
