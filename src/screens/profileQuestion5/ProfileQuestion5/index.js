import axios from 'axios';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { COLORS } from 'constants/common';
import { MLoading } from 'components/common';
import { scale, verticalScale } from 'utils';
import { createScreen } from 'components/elements';
import { goBack, navigate } from 'navigation/methods';
import { showMessage } from 'react-native-flash-message';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useGetProfile, useUpdateProfile } from 'hooks/profile';
import {
    Container,
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    SectionTop01,
    SectionRowCenter,
} from 'components/Sections';
import { useQueryClient } from 'react-query';

const ProfileQuestion5 = createScreen(
    ({ navigation, route }) => {
        const queryClient = useQueryClient();
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
            if (
                (data.hourlyAmount ||
                    data.monthlyAmount ||
                    data.annuallyAmount) &&
                data.type
            )
                setUserInput(data);
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
                        hourlyAmount: data?.user_login?.result?.hourlyAmount,
                        monthlyAmount: data?.user_login?.result?.monthlyAmount,
                        annuallyAmount:
                            data?.user_login?.result?.annuallyAmount,
                        amountType: data?.user_login?.result?.amountType,
                    },
                    {
                        onSuccess: (data) => {
                            if (data?.user_updateProfile?.status == 'SUCCESS') {
                                queryClient.invalidateQueries('getMyProfile');
                                navigate('MyProfile');
                            }
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
                        hourlyAmount:
                            parseFloat(userInput?.hourlyAmount) ||
                            parseFloat(0),
                        monthlyAmount:
                            parseFloat(userInput?.monthlyAmount) ||
                            parseFloat(0),
                        annuallyAmount:
                            parseFloat(userInput?.annuallyAmount) ||
                            parseFloat(0),
                        amountType:
                            userInput?.type == 'Hourly'
                                ? 'HOURLY'
                                : userInput?.type == 'Monthly'
                                ? 'MONTHLY'
                                : 'ANNUALLY',
                    },
                    {
                        onSuccess: (data) => {
                            if (data?.user_updateProfile?.status == 'SUCCESS') {
                                queryClient.invalidateQueries('getMyProfile');
                                navigate('MyProfile');
                            }
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
                                        hourlyAmount:
                                            data?.user_login?.result
                                                ?.hourlyAmount,
                                        monthlyAmount:
                                            data?.user_login?.result
                                                ?.monthlyAmount,
                                        annuallyAmount:
                                            data?.user_login?.result
                                                ?.annuallyAmount,
                                        amountType:
                                            data?.user_login?.result
                                                ?.amountType,
                                    },
                                    {
                                        onSuccess: (data) => {
                                            if (
                                                data?.user_updateProfile
                                                    ?.status == 'SUCCESS'
                                            ) {
                                                queryClient.invalidateQueries(
                                                    'getMyProfile',
                                                );
                                                navigate('MyProfile');
                                            }
                                        },
                                    },
                                );
                            }
                        })
                        .catch(function (error) {
                            showMessage({
                                message: `Something went wrong:  Zip Code Not Valid`,
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
                                : Travel == 'Up To 1 Hour'
                                ? 'UP_TO_1_HOUR'
                                : Travel == 'Up To 45 Minutes'
                                ? 'UP_TO_45_MINUTES'
                                : Travel == 'Up To 20 Minutes'
                                ? 'UP_TO_20_MINUTES'
                                : 'REMOTE_ONLY',
                        whereDidYouHearAboutOnedegreeCareers:
                            data?.user_login?.result
                                ?.whereDidYouHearAboutOnedegreeCareers,
                        hourlyAmount: data?.user_login?.result?.hourlyAmount,
                        monthlyAmount: data?.user_login?.result?.monthlyAmount,
                        annuallyAmount:
                            data?.user_login?.result?.annuallyAmount,
                        amountType: data?.user_login?.result?.amountType,
                    },
                    {
                        onSuccess: (data) => {
                            if (data?.user_updateProfile?.status == 'SUCCESS') {
                                queryClient.invalidateQueries('getMyProfile');
                                navigate('MyProfile');
                            }
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
                        hourlyAmount: data?.user_login?.result?.hourlyAmount,
                        monthlyAmount: data?.user_login?.result?.monthlyAmount,
                        annuallyAmount:
                            data?.user_login?.result?.annuallyAmount,
                        amountType: data?.user_login?.result?.amountType,
                    },
                    {
                        onSuccess: (data) => {
                            if (data?.user_updateProfile?.status == 'SUCCESS') {
                                queryClient.invalidateQueries('getMyProfile');
                                console.log('22');
                                navigate('MyProfile');
                            }
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
                            hourlyAmount={
                                data?.user_login?.result?.hourlyAmount
                            }
                            monthlyAmount={
                                data?.user_login?.result?.monthlyAmount
                            }
                            annuallyAmount={
                                data?.user_login?.result?.annuallyAmount
                            }
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
                            OnHear={(data) => setHear(data)}
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
                {/* <ScrollView> */}
                <SectionTop01 title="Questions" />
                <ScrollView
                    contentContainerStyle={
                        route?.params?.code !== 1 || route?.params?.code !== 3
                            ? { flex: 1 }
                            : {}
                    }>
                    <View
                        style={[
                            // COMMON.SectionPaddingSave15,
                            { marginTop: scale(30) },
                        ]}>
                        {SelectQuestion()}
                    </View>
                    <SectionRowCenter
                        style={
                            route?.params?.code == 1 || route?.params?.code == 4
                                ? {
                                      position: 'absolute',
                                      bottom: verticalScale(32),
                                  }
                                : route?.params?.code == 2 ||
                                  route?.params?.code == 3
                                ? { marginTop: '40%' }
                                : {}
                        }
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
