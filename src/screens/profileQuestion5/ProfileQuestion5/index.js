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
    Container,
} from 'components/Sections';
import { useGetProfile, useUpdateProfile } from 'hooks/profile';
import { goBack, navigate } from 'navigation/methods';
import axios from 'axios';
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
        const { isLoading, data } = useGetProfile();
        const [isChecked, setAnswers] = useState();
        const [ZipCode, setZipCode] = useState();
        const [userInput, setUserInput] = useState();
        const [Hear, setHear] = useState(
            data?.user_login?.result
                ?.whereDidYouHearAboutOnedegreeCareersTextForOther,
        );
        const [Travel, setTravel] = useState(
            data?.user_login?.result?.howFarAreYouWillingToTravelToGetCertified,
        );

        const { isLoading: loadingUpdate, mutate } = useUpdateProfile();
        const Complete = (data) => {
            if (data.amount && data.type) setUserInput(data);
        };
        console.log('rrrrrrrrrrr', Hear);
        function callMyMethod(array) {
            let string = '';
            array.forEach(function (counter, currentIndex) {
                string += counter;
                if (currentIndex != array.length - 1) {
                    string += ',';
                }
            });
            return string;
        }
        const onPress = async () => {
            switch (route?.params?.code) {
                case 1:
                    let String = callMyMethod(isChecked);
                    console.log('String', String);
                    mutate(
                        {
                            point: [
                                parseFloat(data?.user_login?.result?.latitude),
                                parseFloat(data?.user_login?.result?.longitude),
                            ],
                            industry: String,
                            currentIncome: parseFloat(
                                data?.user_login?.result?.currentIncome,
                            ),
                            isNotificationEnabled:
                                data?.user_login?.result?.isNotificationEnabled,
                            // imageAddress: UserImage,
                            age: parseInt(data?.user_login?.result?.age),
                            genders: data?.user_login?.result?.genders,
                            ethnicity: data?.user_login?.result?.ethnicity,
                            educationLevel:
                                data?.user_login?.result?.educationLevel,
                            howFarAreYouWillingToTravelToGetCertified:
                                data?.user_login?.result
                                    ?.howFarAreYouWillingToTravelToGetCertified,
                            whereDidYouHearAboutOnedegreeCareers:
                                data?.user_login?.result
                                    ?.whereDidYouHearAboutOnedegreeCareers,
                            amount: data?.user_login?.result?.amount,
                            amountType: data?.user_login?.result?.amountType,
                        },
                        {
                            onSuccess: (data) => {
                                console.log('666666', data);
                                if (
                                    data?.user_updateProfile?.status ==
                                    'SUCCESS'
                                )
                                    navigate('Question');
                            },
                        },
                    );
                case 2:
                    mutate(
                        {
                            point: [
                                parseFloat(data?.user_login?.result?.latitude),
                                parseFloat(data?.user_login?.result?.longitude),
                            ],
                            industry: data?.user_login?.result?.industry,
                            currentIncome: parseFloat(
                                data?.user_login?.result?.currentIncome,
                            ),
                            isNotificationEnabled:
                                data?.user_login?.result?.isNotificationEnabled,
                            // imageAddress: UserImage,
                            age: parseInt(data?.user_login?.result?.age),
                            genders: data?.user_login?.result?.genders,
                            ethnicity: data?.user_login?.result?.ethnicity,
                            educationLevel:
                                data?.user_login?.result?.educationLevel,
                            howFarAreYouWillingToTravelToGetCertified:
                                data?.user_login?.result
                                    ?.howFarAreYouWillingToTravelToGetCertified,
                            whereDidYouHearAboutOnedegreeCareers:
                                data?.user_login?.result
                                    ?.whereDidYouHearAboutOnedegreeCareers,
                            amount: parseFloat(userInput?.amount),
                            amountType:
                                userInput?.type == 'Hourly'
                                    ? 'HOURLY'
                                    : userInput?.type == 'Monthly'
                                    ? 'MONTHLY'
                                    : 'ANNUALLY',
                        },
                        {
                            onSuccess: (data) => {
                                console.log('666666', data);
                                if (
                                    data?.user_updateProfile?.status ==
                                    'SUCCESS'
                                )
                                    navigate('Question');
                            },
                        },
                    );
                case 3:
                    const getLatLang = `https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${ZipCode}&key=17o8dysaCDrgv1c`;
                    if (ZipCode)
                        axios
                            .get(getLatLang)
                            .then(function (response) {
                                console.log(response?.data?.output);
                                if (response?.data?.output[0]) {
                                    mutate(
                                        {
                                            point: [
                                                parseFloat(
                                                    response?.data?.output[0]
                                                        ?.latitude,
                                                ),
                                                parseFloat(
                                                    response?.data?.output[0]
                                                        ?.longitude,
                                                ),
                                            ],
                                            industry:
                                                data?.user_login?.result
                                                    ?.industry,
                                            currentIncome: parseFloat(
                                                data?.user_login?.result
                                                    ?.currentIncome,
                                            ),
                                            isNotificationEnabled:
                                                data?.user_login?.result
                                                    ?.isNotificationEnabled,
                                            // imageAddress: UserImage,
                                            age: parseInt(
                                                data?.user_login?.result?.age,
                                            ),
                                            genders:
                                                data?.user_login?.result
                                                    ?.genders,
                                            ethnicity:
                                                data?.user_login?.result
                                                    ?.ethnicity,
                                            educationLevel:
                                                data?.user_login?.result
                                                    ?.educationLevel,
                                            howFarAreYouWillingToTravelToGetCertified:
                                                data?.user_login?.result
                                                    ?.howFarAreYouWillingToTravelToGetCertified,
                                            whereDidYouHearAboutOnedegreeCareers:
                                                data?.user_login?.result
                                                    ?.whereDidYouHearAboutOnedegreeCareers,
                                            amount:
                                                data?.user_login?.result
                                                    ?.amount,
                                            amountType:
                                                data?.user_login?.result
                                                    ?.amountType,
                                        },
                                        {
                                            onSuccess: (data) => {
                                                console.log('666666', data);
                                                if (
                                                    data?.user_updateProfile
                                                        ?.status == 'SUCCESS'
                                                )
                                                    navigate('Question');
                                            },
                                        },
                                    );
                                }
                            })
                            .catch(function (error) {
                                showMessage({
                                    message: `Something went wrong: ${error.message}`,
                                    type: 'danger',
                                });
                            })
                            .then(function () {
                                // always executed
                            });
                case 4:
                    mutate(
                        {
                            point: [
                                parseFloat(data?.user_login?.result?.latitude),
                                parseFloat(data?.user_login?.result?.longitude),
                            ],
                            industry: data?.user_login?.result?.industry,
                            currentIncome: parseFloat(
                                data?.user_login?.result?.currentIncome,
                            ),
                            isNotificationEnabled:
                                data?.user_login?.result?.isNotificationEnabled,
                            // imageAddress: UserImage,
                            age: parseInt(data?.user_login?.result?.age),
                            genders: data?.user_login?.result?.genders,
                            ethnicity: data?.user_login?.result?.ethnicity,
                            educationLevel:
                                data?.user_login?.result?.educationLevel,
                            howFarAreYouWillingToTravelToGetCertified:
                                Travel == 'Over an hour'
                                    ? 'OVER_AN_HOUR'
                                    : Travel == 'Up to 1 hour'
                                    ? 'UP_TO1_HOUR'
                                    : Travel == 'Up to 45 minutes'
                                    ? 'UP_TO45_MINUTES'
                                    : Travel == 'Up to 20 minutes'
                                    ? 'UP_TO20_MINUTES'
                                    : 'REMOTE_ONLY',
                            whereDidYouHearAboutOnedegreeCareers:
                                data?.user_login?.result
                                    ?.whereDidYouHearAboutOnedegreeCareers,
                            amount: data?.user_login?.result?.amount,
                            amountType: data?.user_login?.result?.amountType,
                        },
                        {
                            onSuccess: (data) => {
                                console.log('666666', data);
                                if (
                                    data?.user_updateProfile?.status ==
                                    'SUCCESS'
                                )
                                    navigate('Question');
                            },
                        },
                    );
                default:
                    mutate(
                        {
                            point: [
                                parseFloat(data?.user_login?.result?.latitude),
                                parseFloat(data?.user_login?.result?.longitude),
                            ],
                            industry: data?.user_login?.result?.industry,
                            currentIncome: parseFloat(
                                data?.user_login?.result?.currentIncome,
                            ),
                            isNotificationEnabled:
                                data?.user_login?.result?.isNotificationEnabled,
                            // imageAddress: UserImage,
                            age: parseInt(data?.user_login?.result?.age),
                            genders: data?.user_login?.result?.genders,
                            ethnicity: data?.user_login?.result?.ethnicity,
                            educationLevel:
                                data?.user_login?.result?.educationLevel,
                            howFarAreYouWillingToTravelToGetCertified:
                                data?.user_login?.result
                                    ?.howFarAreYouWillingToTravelToGetCertified,
                            whereDidYouHearAboutOnedegreeCareers: Hear,
                            amount: data?.user_login?.result?.amount,
                            amountType: data?.user_login?.result?.amountType,
                        },
                        {
                            onSuccess: (data) => {
                                console.log('666666', data);
                                if (
                                    data?.user_updateProfile?.status ==
                                    'SUCCESS'
                                )
                                    navigate('Question');
                            },
                        },
                    );
            }
        };
        const SelectQuestion = () => {
            switch (route?.params?.code) {
                case 1:
                    return (
                        <Question1
                            setAnswer={(value) => setAnswers(value)}
                            answer={route?.params?.answer}
                        />
                    );
                case 2:
                    return (
                        <Question2
                            onComplete={(data) => Complete(data)}
                            answer={route?.params?.answer}
                        />
                    );
                case 3:
                    return (
                        <Question3
                            setZipCode={(data) => setZipCode(data)}
                            answer={route?.params?.answer}
                        />
                    );
                case 4:
                    return (
                        <Question4
                            answer={route?.params?.answer}
                            onTravel={(data) => setTravel(data)}
                        />
                    );
                default:
                    return (
                        <Question5
                            answer={route?.params?.answer}
                            OnHear={(data) => setHear(data?.value)}
                        />
                    );
            }
        };
        return (
            <Container style={styles.Question5}>
                <MLoading
                    isLoading={loadingUpdate || isLoading}
                    size="large"
                    color={COLORS.Color323}
                    style={{ top: '50%' }}
                />
                <ScrollView>
                    <SectionTop01 title="Questions" />
                    <View
                        style={[
                            COMMON.SectionPaddingSave15,
                            { marginTop: scale(30) },
                        ]}>
                        {SelectQuestion()}
                    </View>
                    <SectionRowCenter
                        backPress={() => goBack()}
                        questions
                        nextPress={() => onPress()}
                    />
                </ScrollView>
            </Container>
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
        flex: 1,
    },
});
export default ProfileQuestion5;
