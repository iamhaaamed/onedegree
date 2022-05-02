import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod } from 'components/common/MDateTimePicker';
import {
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView,
    DrawerToggleButton,
} from '@react-navigation/drawer';

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
import { SectionTop, Qustion1 } from 'components/Sections';
const Question3 = (props) => {
    const { style, title, answer, page, setZipCode } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    // const [ZipCode, setZipCode] = useState();
    // console.log('zzzzzzzzz', ZipCode);
    return (
        <>
            <MText textStyle={COMMON.Txtquestion6104}>
                Where Do You Currently Live?{' '}
            </MText>
            <MText textStyle={COMMON.Txtquestion6105}>ZIP Code* </MText>
            <MInput
                inputStyle={COMMON.InputRect108}
                containerStyle={COMMON.Input106}
                placeholder="Please enter ZIP Code"
                placeholderColor={COLORS.Color267}
                onChangeText={(text) => setZipCode(text)}
                textStyle={COMMON.TextsInput107}
                backgroundColor={COLORS.Color963}
                height={verticalScale(48)}
                keyboardType="numeric"
            />
            <MText textStyle={COMMON.Txtquestion6109}>
                ! Entering the zip code will help us to training programs{' '}
            </MText>
        </>
    );
};
const styles = StyleSheet.create({
    Question61796: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
});
export default Question3;
