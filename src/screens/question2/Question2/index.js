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
import { SectionTop } from 'components/Sections';
const question2 = createScreen(
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
            <View style={styles.question2}>
                <ScrollView>
                    {/* <View style={COMMON.SectionPaddingquestion254}> */}
                    <SectionTop />
                    {/* <View style={{ alignItems: 'center' }}>
                            <MText textStyle={COMMON.Txtquestion256}>
                                Getting started{' '}
                            </MText>
                        </View> */}
                    {/* </View> */}
                    <MImage
                        imageSource={IMAGES.image2101}
                        style={COMMON.Image57}
                        customWidth={scale(390)}
                        customHeight={scale(84)}
                    />

                    <View style={COMMON.SectionPaddingquestion258}>
                        <MText textStyle={COMMON.Txtquestion259}>
                            What industries are you interested in?{' '}
                        </MText>
                        <MText textStyle={COMMON.Txtquestion260}>
                            Select all that apply{' '}
                        </MText>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox61}>
                            <MText textStyle={COMMON.TextsCheckBox62}>
                                Aviation
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox63}>
                            <MText textStyle={COMMON.TextsCheckBox64}>
                                Arts
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox65}>
                            <MText textStyle={COMMON.TextsCheckBox66}>
                                Business
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox67}>
                            <MText textStyle={COMMON.TextsCheckBox68}>
                                Education
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox69}>
                            <MText textStyle={COMMON.TextsCheckBox70}>
                                Law Enforcement
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox71}>
                            <MText textStyle={COMMON.TextsCheckBox72}>
                                Medical
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox73}>
                            <MText textStyle={COMMON.TextsCheckBox74}>
                                Service Industry
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox75}>
                            <MText textStyle={COMMON.TextsCheckBox76}>
                                Technology
                            </MText>
                        </MCheckBox>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox77}>
                            <MText textStyle={COMMON.TextsCheckBox78}>
                                Not sure
                            </MText>
                        </MCheckBox>
                    </View>
                    <MButton
                        onPress={() => navigate('Question7')}
                        style={COMMON.ButtonRect80}
                        containerStyle={COMMON.Button79}
                        text="Next"
                        textStyle={COMMON.TextsButton81}
                        gradient={{
                            colors: [
                                COLORS.Color323,
                                COLORS.Color148,
                                COLORS.Color912,
                                COLORS.Color674,
                                COLORS.Color455,
                                COLORS.Color240,
                            ],
                            start: {
                                x: -0.15500132739543915,
                                y: 0.6157848834991455,
                            },
                            end: {
                                x: 1.014054298400879,
                                y: 0.17686034739017487,
                            },
                        }}
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
    question2: {
        backgroundColor: COLORS.Color963,
        height: '100%',
    },
});
export default question2;
