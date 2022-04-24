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
import { SectionTop01 } from 'components/Sections';
import { SectionRowCenter } from 'components/Sections';
import { goBack } from 'navigation/methods';
const ProfileQuestion5 = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const [isChecked, setIsChecked] = useState(false);

        return (
            <View style={styles.Question5}>
                <ScrollView>
                    <SectionTop01 title="Questions" />
                    <View style={COMMON.SectionPaddingQuestion539}>
                        <MText textStyle={COMMON.TxtQuestion540}>
                            How far are you willing to travel to get certified?{' '}
                        </MText>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            activeBorderColor={COLORS.Color718}
                            activeBackgroundColor={COLORS.Color424}
                            style={COMMON.CheckBox41}>
                            <MText textStyle={COMMON.TextsCheckBox42}>
                                Over an hour
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            activeBorderColor={COLORS.Color718}
                            activeBackgroundColor={COLORS.Color424}
                            style={COMMON.CheckBox41}>
                            <MText textStyle={COMMON.TextsCheckBox44}>
                                {' '}
                                Up to 1 hour
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            activeBorderColor={COLORS.Color718}
                            activeBackgroundColor={COLORS.Color424}
                            style={COMMON.CheckBox41}>
                            <MText textStyle={COMMON.TextsCheckBox44}>
                                Up to 45 minutes
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            activeBorderColor={COLORS.Color718}
                            activeBackgroundColor={COLORS.Color424}
                            style={COMMON.CheckBox41}>
                            <MText textStyle={COMMON.TextsCheckBox44}>
                                Up to 20 minutes
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            activeBorderColor={COLORS.Color718}
                            activeBackgroundColor={COLORS.Color424}
                            style={COMMON.CheckBox41}>
                            <MText textStyle={COMMON.TextsCheckBox44}>
                                Remote only
                            </MText>
                        </MCheckBox>
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
