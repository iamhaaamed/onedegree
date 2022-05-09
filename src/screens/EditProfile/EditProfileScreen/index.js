import { navigate } from 'navigation/methods';
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod } from 'components/common/MDateTimePicker';
import { Container, ProfileTab } from 'components/Sections';
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
    MView,
} from 'components/common';
import { SectionTop01 } from 'components/Sections';
import { SectionInfo } from 'components/Sections';
const EditProfile = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [selectedItem, setSelectedItem] = useState(null);
        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        return (
            <SafeAreaView style={styles.Profile4}>
                <ScrollView>
                    <SectionTop01 title="Profile" rightView />

                    <View style={COMMON.SectionPaddingProfile421}>
                        <MImage
                            imageSource={IMAGES.image7104}
                            style={COMMON.image22}
                            customWidth={scale(326)}
                            customHeight={scale(94)}
                        />
                        <MButton
                            // onPress={() => navigate('MyProfile')}
                            style={COMMON.tabStyle}
                            containerStyle={COMMON.editPic}
                            icon={{
                                name: 'edit',
                                color: COLORS.white,
                                size: scale(20),
                                Component: MaterialCommunityIcons,
                            }}
                        />
                        <MText
                            textStyle={[
                                COMMON.TxtSectionSignIn271,
                                { marginTop: '15%' },
                            ]}>
                            First Name
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect86}
                            containerStyle={COMMON.Input85}
                            placeholder="Don "
                            placeholderColor={COLORS.Color280}
                            // onChangeText={handleChange('email')}
                            // error={errors && errors.email}
                            textStyle={COMMON.TextsInput29}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(53)}
                        />
                        <MText textStyle={COMMON.TxtSectionSignIn271}>
                            Last Name
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect86}
                            containerStyle={COMMON.Input85}
                            placeholder="Don "
                            placeholderColor={COLORS.Color280}
                            // onChangeText={handleChange('email')}
                            // error={errors && errors.email}
                            textStyle={COMMON.TextsInput29}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(53)}
                        />
                        <MText textStyle={COMMON.TxtSectionSignIn271}>
                            Location
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect86}
                            containerStyle={COMMON.Input85}
                            placeholder="New York "
                            placeholderColor={COLORS.Color280}
                            // onChangeText={handleChange('email')}
                            // error={errors && errors.email}
                            textStyle={COMMON.TextsInput29}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(53)}
                        />
                        <MText textStyle={COMMON.TxtSectionSignIn271}>
                            Gender{' '}
                        </MText>
                        <MView style={COMMON.DropDown10}>
                            <MDropDown
                                mb={verticalScale(24)}
                                // data={CONSTANTS.dropDown}
                                getSelectedItem={(item) =>
                                    setSelectedItem(item)
                                }
                                placeholderObject={{
                                    label: 'Male',
                                    lable: 'Female',
                                }} //change label
                                defaultAndroidMode={false}
                                icon={{
                                    name: 'keyboard-arrow-down',
                                    color: COLORS.Color424,
                                    Component: MaterialCommunityIcons,
                                }}
                                style={{
                                    container: {
                                        elevation: 1,
                                        backgroundColor: COLORS.white,
                                        borderRadius: 8,
                                        shadowColor: 'rgba(140,140,140,0.16)',
                                        shadowOpacity: 0.5,
                                        shadowOffset: { width: 0, height: 0 },
                                    },

                                    inputAndroid: COMMON.TextsDropDown6,
                                    inputIOS: COMMON.TextsDropDown6,
                                    inputAndroidContainer: COMMON.DropDownRect5,
                                    inputIOSContainer: COMMON.DropDownRect5,
                                }}
                            />
                        </MView>
                        <MText textStyle={COMMON.TxtSectionSignIn271}>
                            Age
                        </MText>
                        <MView style={COMMON.DropDown10}>
                            <MDropDown
                                mb={verticalScale(24)}
                                data={CONSTANTS.dropDown}
                                getSelectedItem={(item) =>
                                    setSelectedItem(item)
                                }
                                placeholderObject={{ label: '22' }} //change label
                                defaultAndroidMode={false}
                                icon={{
                                    name: 'keyboard-arrow-down',
                                    color: COLORS.Color424,
                                    Component: MaterialCommunityIcons,
                                }}
                                style={{
                                    container: {
                                        elevation: 1,
                                        backgroundColor: COLORS.white,
                                        borderRadius: 8,
                                        shadowColor: 'rgba(140,140,140,0.16)',
                                        shadowOpacity: 0.5,
                                        shadowOffset: { width: 0, height: 0 },
                                    },

                                    inputAndroid: COMMON.TextsDropDown6,
                                    inputIOS: COMMON.TextsDropDown6,
                                    inputAndroidContainer: COMMON.DropDownRect5,
                                    inputIOSContainer: COMMON.DropDownRect5,
                                }}
                            />
                        </MView>
                        <MText textStyle={COMMON.TxtSectionSignIn271}>
                            Education Level{' '}
                        </MText>
                        <MView style={COMMON.DropDown10}>
                            <MDropDown
                                mb={verticalScale(24)}
                                data={CONSTANTS.dropDown}
                                getSelectedItem={(item) =>
                                    setSelectedItem(item)
                                }
                                placeholderObject={{
                                    label: 'Associate Degree',
                                }} //change label
                                defaultAndroidMode={false}
                                icon={{
                                    name: 'keyboard-arrow-down',
                                    color: COLORS.Color424,
                                    Component: MaterialCommunityIcons,
                                }}
                                style={{
                                    container: {
                                        elevation: 1,
                                        backgroundColor: COLORS.white,
                                        borderRadius: 8,
                                        shadowColor: 'rgba(140,140,140,0.16)',
                                        shadowOpacity: 0.5,
                                        shadowOffset: { width: 0, height: 0 },
                                    },

                                    inputAndroid: COMMON.TextsDropDown6,
                                    inputIOS: COMMON.TextsDropDown6,
                                    inputAndroidContainer: COMMON.DropDownRect5,
                                    inputIOSContainer: COMMON.DropDownRect5,
                                }}
                            />
                        </MView>
                        <MText textStyle={COMMON.TxtSectionSignIn271}>
                            Current Income
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect86}
                            containerStyle={COMMON.Input85}
                            placeholder="$2000"
                            placeholderColor={COLORS.Color280}
                            // onChangeText={handleChange('email')}
                            // error={errors && errors.email}
                            textStyle={COMMON.TextsInput29}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(53)}
                        />
                        <MButton
                            onPress={onPress}
                            style={COMMON.ButtonRect36}
                            containerStyle={COMMON.Button35}
                            text="Done"
                            textStyle={COMMON.TextsButton37}
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
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    Profile4: {
        backgroundColor: COLORS.Color596,
        height: '100%',
    },
});

export default EditProfile;
