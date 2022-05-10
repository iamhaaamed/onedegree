import React from 'react';
import { useState, useEffect } from 'react';
import useTheme from 'hooks/useTheme';
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
const Question4 = (props) => {
    const { style, title, answer, page, onTravel } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const [Type, setType] = useState();
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
        if (Type) onTravel(Type);
    }, [Type]);
    const TypesArray = [
        'Over an hour',
        'Up to 1 hour',
        'Up to 45 minutes',
        'Up to 20 minutes',
        'Remote only',
    ];
    const handleDirection = (item, i) => {
        setType(item);
        setIsChecked(i);
    };
    return (
        <>
            <MText textStyle={COMMON.TxtQuestion540}>
                How far are you willing to travel to get certified?{' '}
            </MText>
            <FlatList
                data={TypesArray}
                renderItem={({ item, index }) => (
                    <MCheckBox
                        isChecked={isChecked == index ? true : false}
                        setIsChecked={() => {
                            handleDirection(item, index);
                        }}
                        style={COMMON.CheckBox41}>
                        <MText textStyle={COMMON.TextsCheckBox42}>{item}</MText>
                    </MCheckBox>
                )}
                keyExtractor={(index) => index.toString()}
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
export default Question4;
