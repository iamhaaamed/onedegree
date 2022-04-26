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
import {
    Question1,
    Question3,
    SectionTop01,
    Question2,
    SectionRowCenter,
    Question4,
    Question5,
} from 'components/Sections';

import { goBack } from 'navigation/methods';
const ProfileQuestion5 = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const [isChecked, setIsChecked] = useState(false);
        const SelectQuestion = () => {
            switch (route?.params?.code) {
                case 1:
                    return <Question1 />;
                case 2:
                    return <Question2 />;
                case 3:
                    return <Question3 />;
                case 4:
                    return <Question4 />;
                default:
                    return <Question5 />;
            }
        };
        return (
            <View style={styles.Question5}>
                <ScrollView>
                    <SectionTop01 title="Questions" />
                    <View
                        style={[
                            COMMON.SectionPaddingSave15,
                            { marginTop: scale(30) },
                        ]}>
                        {SelectQuestion()}
                    </View>
                    <SectionRowCenter backPress={() => goBack()} questions />
                </ScrollView>
            </View>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    Question5: {
        backgroundColor: COLORS.Color596,
        height: '100%',
    },
});
export default ProfileQuestion5;
