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
const Question1 = (props) => {
    const { style, title, answer, page } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
        console.log(`Clicked! ${clickCounter.current}`);
        clickCounter.current = clickCounter.current + 1;
    };

    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <MText textStyle={COMMON.Txtquestion259}>
                What industries are you interested in?{' '}
            </MText>
            <MText textStyle={COMMON.Txtquestion260}>
                Select all that apply{' '}
            </MText>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => setIsChecked((p) => !p)}
                style={COMMON.CheckBox61}>
                <MText textStyle={COMMON.TextsCheckBox62}>Aviation</MText>
            </MCheckBox>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => setIsChecked((p) => !p)}
                style={COMMON.CheckBox63}>
                <MText textStyle={COMMON.TextsCheckBox64}>Arts</MText>
            </MCheckBox>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => setIsChecked((p) => !p)}
                style={COMMON.CheckBox65}>
                <MText textStyle={COMMON.TextsCheckBox66}>Business</MText>
            </MCheckBox>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => setIsChecked((p) => !p)}
                style={COMMON.CheckBox67}>
                <MText textStyle={COMMON.TextsCheckBox68}>Education</MText>
            </MCheckBox>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => setIsChecked((p) => !p)}
                style={COMMON.CheckBox69}>
                <MText textStyle={COMMON.TextsCheckBox70}>
                    Law Enforcement
                </MText>
            </MCheckBox>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => setIsChecked((p) => !p)}
                style={COMMON.CheckBox71}>
                <MText textStyle={COMMON.TextsCheckBox72}>Medical</MText>
            </MCheckBox>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => setIsChecked((p) => !p)}
                style={COMMON.CheckBox73}>
                <MText textStyle={COMMON.TextsCheckBox74}>
                    Service Industry
                </MText>
            </MCheckBox>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => setIsChecked((p) => !p)}
                style={COMMON.CheckBox75}>
                <MText textStyle={COMMON.TextsCheckBox76}>Technology</MText>
            </MCheckBox>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => setIsChecked((p) => !p)}
                style={COMMON.CheckBox77}>
                <MText textStyle={COMMON.TextsCheckBox78}>Not sure</MText>
            </MCheckBox>
        </>
    );
};
const styles = StyleSheet.create({
    Question61796: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
});
export default Question1;
