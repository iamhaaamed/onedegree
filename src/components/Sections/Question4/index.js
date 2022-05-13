import React from 'react';
import { useState, useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height, toPascalCase } from 'utils';
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
    const [Type, setType] = useState(toPascalCase(answer));
    const [isChecked, setIsChecked] = useState();
    useEffect(() => {
        if (Type) onTravel(Type);
    }, [Type]);
    const TypesArray = [
        'Over An Hour',
        'Up To 1 Hour',
        'Up To 45 Minutes',
        'Up To 20 Minutes',
        'Remote Only',
    ];
    const handleDirection = (item, i) => {
        setType(item);
        setIsChecked(i);
    };
    return (
        <View style={COMMON.SectionPaddingquestion7120}>
            <MText textStyle={COMMON.TxtQuestion540}>
                How far are you willing to travel to get certified?{' '}
            </MText>
            <FlatList
                data={TypesArray}
                renderItem={({ item, index }) => (
                    <MCheckBox
                        isChecked={
                            Type == item || isChecked == index ? true : false
                        }
                        setIsChecked={() => {
                            handleDirection(item, index);
                        }}
                        style={COMMON.CheckBox41}>
                        <MText textStyle={COMMON.TextsCheckBox42}>{item}</MText>
                    </MCheckBox>
                )}
                keyExtractor={(index) => index.toString()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    Question61796: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
});
export default React.memo(Question4);
