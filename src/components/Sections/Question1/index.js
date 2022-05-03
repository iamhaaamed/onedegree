import React, { useEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
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
import { setLocale } from 'yup';

const Question1 = (props) => {
    const { style, title, answer, page, setAnswer } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const options = [
        'Aviation',
        'Arts',
        'Business',
        'Education',
        'Law Enforcement',
        'Medical',
        'Service Industry',
        'Technology',
        'Not sure',
    ];
    const [All, setAll] = useState(false);
    const [isChecked, setIsChecked] = useState([]);
    const [IndustryArray, setIndustryArray] = useState([]);
    useEffect(() => {
        setAnswer(IndustryArray);
    }, [IndustryArray]);
    const handleDirection = (item) => {};
    return (
        <>
            <MText textStyle={COMMON.Txtquestion259}>
                What industries are you interested in?{' '}
            </MText>
            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={IndustryArray.length === options.length}
                setIsChecked={() => {
                    if (IndustryArray.length === options.length) {
                        setIndustryArray([]);
                    } else {
                        setIndustryArray(options);
                    }
                }}
                style={COMMON.CheckBox61}>
                <MText textStyle={COMMON.TextsCheckBox62}>
                    Select all that apply
                </MText>
            </MCheckBox>
            <FlatList
                data={options}
                renderItem={({ item, index }) => (
                    <MCheckBox
                        iconContainerStyle={{ borderRadius: 5 }}
                        isChecked={IndustryArray.includes(item)}
                        setIsChecked={() => {
                            if (IndustryArray.includes(item)) {
                                setIndustryArray((prev) =>
                                    prev.filter((a) => a !== item),
                                );
                            } else {
                                setIndustryArray((prev) => [...prev, item]);
                            }
                        }}
                        style={COMMON.CheckBox61}>
                        <MText
                            textStyle={
                                index == 8
                                    ? COMMON.TextsCheckBox78
                                    : COMMON.TextsCheckBox62
                            }>
                            {item}
                        </MText>
                    </MCheckBox>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
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
