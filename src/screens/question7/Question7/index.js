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
import { SectionRowCenter, SectionTop } from 'components/Sections';
import { goBack, navigate } from 'navigation/methods';
const question7 = createScreen(
    () => {
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
            <View style={styles.question7}>
                <ScrollView>
                    <SectionTop />
                    {/* <View style={COMMON.SectionPaddingquestion7116}>
                        <View style={COMMON.SectionPaddingquestion7117}>
                            <MText textStyle={COMMON.Txtquestion7118}>
                                Getting started{' '}
                            </MText>
                        </View>
                    </View> */}
                    <MImage
                        imageSource={IMAGES.image6696}
                        style={COMMON.Image119}
                        customWidth={scale(390)}
                        customHeight={scale(84)}
                    />

                    <View style={COMMON.SectionPaddingquestion7120}>
                        <MText textStyle={COMMON.Txtquestion7121}>
                            How much do you want to make?{' '}
                        </MText>
                        <View style={COMMON.SectionPaddingquestion7122}>
                            <MText textStyle={COMMON.Txtquestion7123}>
                                Amount{' '}
                            </MText>
                            <MInput
                                inputStyle={COMMON.InputRect126}
                                containerStyle={COMMON.Input124}
                                placeholder="Please enter Amount"
                                placeholderColor={COLORS.Color267}
                                textStyle={COMMON.TextsInput125}
                                backgroundColor={COLORS.Color963}
                                height={verticalScale(48)}
                            />
                        </View>
                        <MText textStyle={COMMON.Txtquestion7127}>Type </MText>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox128}>
                            <MText textStyle={COMMON.TextsCheckBox129}>
                                Hourly
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox130}>
                            <MText textStyle={COMMON.TextsCheckBox131}>
                                Monthly
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox132}>
                            <MText textStyle={COMMON.TextsCheckBox133}>
                                Annually
                            </MText>
                        </MCheckBox>
                    </View>
                    <SectionRowCenter
                        backPress={() => goBack()}
                        nextPress={() => navigate('Question6')}
                    />
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
    question7: {
        backgroundColor: COLORS.Color963,
        height: '100%',
    },
});
export default question7;
