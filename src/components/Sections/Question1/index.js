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
        {
            title: 'Aviation',
        },
        {
            title: 'Arts',
        },
        {
            title: 'Business',
        },
        {
            title: 'Education',
        },
        {
            title: 'Law Enforcement',
        },
        {
            title: 'Medical',
        },
        {
            title: 'Service Industry',
        },
        {
            title: 'Technology',
        },
        {
            title: 'Not sure',
        },
    ];
    useEffect(() => {
        setAnswer(IndustryArray);
    }, [IndustryArray]);
    const [isChecked, setIsChecked] = useState(false);
    const [IndustryArray, setIndustryArray] = useState([]);
    console.log('///////////', IndustryArray);

    return (
        <>
            <MText textStyle={COMMON.Txtquestion259}>
                What industries are you interested in?{' '}
            </MText>

            <MCheckBox
                iconContainerStyle={{ borderRadius: 5 }}
                isChecked={isChecked}
                setIsChecked={() => {
                    setIsChecked((p) => !p);
                    let x = [];
                    options?.map((item, index) => x.push(item?.title));
                    setIndustryArray(x);
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
                        isChecked={isChecked}
                        setIsChecked={() => setIsChecked((p) => !p)}
                        style={COMMON.CheckBox61}>
                        <MText
                            textStyle={
                                index == 8
                                    ? COMMON.TextsCheckBox78
                                    : COMMON.TextsCheckBox62
                            }>
                            {item?.title}
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
