import axios from 'axios';
import { MImage, MLoading } from 'components/common';
import { createScreen } from 'components/elements';
import {
    Container,
    Question3,
    SectionRowCenter,
    SectionTop,
} from 'components/Sections';
import { COLORS } from 'constants/common';
import { useUpdateProfile } from 'hooks/profile';
import useTheme from 'hooks/useTheme';
import { goBack, navigate } from 'navigation/methods';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { scale } from 'utils';
import { authStore } from '../../../store';
const question6 = createScreen(
    ({ route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const { isLoading, mutate } = useUpdateProfile();
        const [ZipCode, setZipCode] = useState();
        const setAnswerQuestion = authStore((state) => state.setAnswerQuestion);
        const getLatLang = `https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${ZipCode}&key=17o8dysaCDrgv1c`;
        //  `https://maps.googleapis.com/maps/api/geocode/json?address=${ZipCode}&key=AIzaSyAq_L_4FurpQGeFM20SxCXpAAkggk3knhU&region=us`;
        console.log('laaaaa', getLatLang);
        return (
            <Container style={styles.question6}>
                {/* <ScrollView> */}
                <MLoading
                    size="large"
                    color={COLORS.Color323}
                    isLoading={isLoading}
                />
                <SectionTop />
                <MImage
                    imageSource={IMAGES.image2773}
                    style={COMMON.Image102}
                    customWidth={scale(381)}
                    customHeight={scale(82)}
                />

                {/* <View style={COMMON.SectionPaddingquestion6103}> */}
                <Question3 setZipCode={(data) => setZipCode(data)} />
                {/* </View> */}
                <SectionRowCenter
                    style={{ top: '20%' }}
                    backPress={() => goBack()}
                    nextPress={async () => {
                        if (ZipCode)
                            axios
                                .get(getLatLang)
                                .then(function (response) {
                                    console.log(response?.data?.output);
                                    if (response?.data?.output[0]) {
                                        var zip = response?.data?.output[0]?.zip?.toString();
                                        mutate(
                                            {
                                                point: [
                                                    parseFloat(
                                                        response?.data
                                                            ?.output[0]
                                                            ?.latitude,
                                                    ),
                                                    parseFloat(
                                                        response?.data
                                                            ?.output[0]
                                                            ?.longitude,
                                                    ),
                                                ],
                                                zipCode: zip,
                                                industry:
                                                    route?.params?.Answers,
                                                currentIncome: 10,
                                                isNotificationEnabled: true,
                                                age: 1,
                                                genders: 'MALE',
                                                ethnicity: 'ONE',
                                                educationLevel:
                                                    'Primary Education',
                                                howFarAreYouWillingToTravelToGetCertified:
                                                    'REMOTE_ONLY',
                                                whereDidYouHearAboutOnedegreeCareers:
                                                    'CRAIGSLIST',
                                                amount: parseFloat(
                                                    route?.params?.userInput
                                                        ?.amount,
                                                ),
                                                amountType:
                                                    route?.params?.userInput
                                                        ?.type == 'Hourly'
                                                        ? 'HOURLY'
                                                        : route?.params
                                                              ?.userInput
                                                              ?.type ==
                                                          'Monthly'
                                                        ? 'MONTHLY'
                                                        : 'ANNUALLY',
                                            },
                                            {
                                                onSuccess: (data) => {
                                                    if (
                                                        data?.user_updateProfile
                                                            ?.status ==
                                                        'SUCCESS'
                                                    ) {
                                                        setAnswerQuestion(true);
                                                        navigate(
                                                            'Gettingstarted3',
                                                        );
                                                    }
                                                },
                                            },
                                        );
                                    }
                                })
                                .catch(function (error) {
                                    showMessage({
                                        message: `Something went wrong: Zip Code Not Valid`,
                                        type: 'danger',
                                    });
                                })
                                .then(function () {
                                    // always executed
                                });
                    }}
                />
                {/* </ScrollView> */}
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
    question6: {
        backgroundColor: COLORS.Color963,
        height: '100%',
    },
});
export default question6;
