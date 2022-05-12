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
        console.log('.........', data?.user_login?.result);
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
        const onPress = async (code) => {
            if (code == 1) {
                let String = callMyMethod(isChecked);
                mutate(
                    {
                        point: [
                            parseFloat(data?.user_login?.result?.latitude),
                            parseFloat(data?.user_login?.result?.longitude),
                        ],
                        city: data?.user_login?.result?.city,
                        zipCode: data?.user_login?.result?.zipCode,
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
                            if (data?.user_updateProfile?.status == 'SUCCESS')
                                navigate('Question');
                        },
                    },
                );
            } else if (code == 2) {
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
                        city: data?.user_login?.result?.city,
                        zipCode: data?.user_login?.result?.zipCode,
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
                            if (data?.user_updateProfile?.status == 'SUCCESS')
                                navigate('Question');
                        },
                    },
                );
            } else if (code == 3) {
                const getLatLang = `https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${ZipCode}&key=17o8dysaCDrgv1c`;
                if (ZipCode)
                    axios
                        .get(getLatLang)
                        .then(function (response) {
                            if (response?.data?.output[0]) {
                                console.log(
                                    'rrrrrrrrrrr',
                                    response?.data?.output[0],
                                );
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
                                        zipCode: response?.data?.output[0]?.zip.toString(),
                                        industry:
                                            data?.user_login?.result?.industry,
                                        currentIncome: parseFloat(
                                            data?.user_login?.result
                                                ?.currentIncome,
                                        ),
                                        city: data?.user_login?.result?.city,
                                        isNotificationEnabled:
                                            data?.user_login?.result
                                                ?.isNotificationEnabled,
                                        // imageAddress: UserImage,
                                        age: parseInt(
                                            data?.user_login?.result?.age,
                                        ),
                                        genders:
                                            data?.user_login?.result?.genders,
                                        ethnicity:
                                            data?.user_login?.result?.ethnicity,
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
                                            data?.user_login?.result?.amount,
                                        amountType:
                                            data?.user_login?.result
                                                ?.amountType,
                                    },
                                    {
                                        onSuccess: (data) => {
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
            } else if (code == 4) {
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
                        city: data?.user_login?.result?.city,
                        zipCode: data?.user_login?.result?.zipCode,
                        isNotificationEnabled:
                            data?.user_login?.result?.isNotificationEnabled,
                        // imageAddress: UserImage,
                        age: parseInt(data?.user_login?.result?.age),
                        genders: data?.user_login?.result?.genders,
                        ethnicity: data?.user_login?.result?.ethnicity,
                        educationLevel:
                            data?.user_login?.result?.educationLevel,
                        howFarAreYouWillingToTravelToGetCertified:
                            Travel == 'Over An Hour'
                                ? 'OVER_AN_HOUR'
                                : Travel == 'Up To1 Hour'
                                ? 'UP_TO1_HOUR'
                                : Travel == 'Up To45 Minutes'
                                ? 'UP_TO45_MINUTES'
                                : Travel == 'Up To20 Minutes'
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
                            if (data?.user_updateProfile?.status == 'SUCCESS')
                                navigate('Question');
                        },
                    },
                );
            } else
                mutate(
                    {
                        point: [
                            parseFloat(data?.user_login?.result?.latitude),
                            parseFloat(data?.user_login?.result?.longitude),
                        ],
                        city: data?.user_login?.result?.city,
                        zipCode: data?.user_login?.result?.zipCode,
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
                            if (data?.user_updateProfile?.status == 'SUCCESS')
                                navigate('Question');
                        },
                    },
                );
        };
        const SelectQuestion = () => {
            switch (route?.params?.code) {
                case 1:
                    return (
                        <Question1
                            setAnswer={(value) => setAnswers(value)}
                            answer={data?.user_login?.result?.industry}
                        />
                    );
                case 2:
                    return (
                        <Question2
                            onComplete={(data) => Complete(data)}
                            answer={data?.user_login?.result?.amountType}
                            answerAmount={data?.user_login?.result?.amount}
                        />
                    );
                case 3:
                    return (
                        <Question3
                            setZipCode={(data) => setZipCode(data)}
                            answer={data?.user_login?.result?.zipCode}
                        />
                    );
                case 4:
                    return (
                        <Question4
                            answer={
                                data?.user_login?.result
                                    ?.howFarAreYouWillingToTravelToGetCertified
                            }
                            onTravel={(data) => setTravel(data)}
                        />
                    );
                default:
                    return (
                        <Question5
                            answer={
                                data?.user_login?.result
                                    ?.whereDidYouHearAboutOnedegreeCareers
                            }
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
                            // COMMON.SectionPaddingSave15,
                            { marginTop: scale(30) },
                        ]}>
                        {SelectQuestion()}
                    </View>
                    <SectionRowCenter
                        backPress={() => goBack()}
                        questions
                        nextPress={() => onPress(route?.params?.code)}
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
