import React from 'react';
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
import { useRef } from 'react';
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
import { goBack } from 'navigation/methods';
const SectionTopchat = (props) => {
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
        <View style={[styles.SectionTopchat, style]}>
            <View style={[COMMON.RowItem, { alignItems: 'center' }]}>
                <View style={{ width: '20%' }}>
                    <MButton
                        onPress={() => goBack()}
                        style={COMMON.ButtonRect26}
                        containerStyle={COMMON.Button25}
                        color={COLORS.white}
                        iconRight={{
                            name: 'arrow-back-ios',
                            color: COLORS.Color424,
                            Component: MaterialCommunityIcons,
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '60%',
                        justifyContent: 'center',
                    }}>
                    <MText textStyle={COMMON.TxtSectionTopchat27}>
                        melisa{' '}
                    </MText>
                    <MText textStyle={COMMON.TxtSectionTopchat28}>
                        Last seen - 11:35 AM{' '}
                    </MText>
                </View>
                <View style={{ width: '20%' }}>
                    <MImage
                        imageSource={IMAGES.intro4}
                        style={COMMON.image29}
                        customWidth={scale(37)}
                        customHeight={scale(37)}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionTopchat: {
        paddingBottom: verticalScale(8),
        paddingTop: verticalScale(8),
        paddingRight: scale(16),
        paddingLeft: scale(12),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.09)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 1,
        // opacity: 0.78,
        width: '100%',
        height: verticalScale(56),
    },
});
export default React.memo(SectionTopchat);
