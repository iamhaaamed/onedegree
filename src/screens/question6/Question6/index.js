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
import { goBack, navigate } from 'navigation/methods';
import {
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView,
    DrawerToggleButton,
} from '@react-navigation/drawer';
import axios from 'axios';
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
import { SectionTop } from 'components/Sections';
import { SectionRowCenter, Question3 } from 'components/Sections';
import { useUpdateProfile } from 'hooks/profile';
import { async } from 'validate.js';
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
        console.log('route', route?.params);
        const [ZipCode, setZipCode] = useState();
        console.log('zzzzzzzzz', ZipCode);
        const getLatLang = `https://maps.googleapis.com/maps/api/geocode/json?address=${ZipCode}&key=AIzaSyAq_L_4FurpQGeFM20SxCXpAAkggk3knhU&region=us`;
        console.log('laaaaa', getLatLang);
        return (
            <View style={styles.question6}>
                <ScrollView>
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

                    <View style={COMMON.SectionPaddingquestion6103}>
                        <Question3 setZipCode={(data) => setZipCode(data)} />
                    </View>
                    <SectionRowCenter
                        backPress={() => goBack()}
                        nextPress={async () =>
                            axios
                                .get(getLatLang)
                                .then(function (response) {
                                    console.log(response?.data?.results);
                                    navigate('Gettingstarted3');
                                    if (response.data.status == 'OK') {
                                        mutate(
                                            {
                                                point: [
                                                    response.data?.results
                                                        ?.geometry?.location
                                                        ?.lat,
                                                    response.data?.results
                                                        ?.geometry?.location
                                                        ?.lng,
                                                ],
                                                industry:
                                                    route?.params?.Answers,
                                                currentIncome: 10,
                                                isNotificationEnabled: true,
                                                age: 1,
                                                ethnicity: 'ONE',
                                                educationLevel: 'ONE',
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
                                                    console.log('666666', data);
                                                    if (
                                                        data?.user_updateProfile
                                                            ?.status ==
                                                        'SUCCESS'
                                                    )
                                                        navigate(
                                                            'Gettingstarted3',
                                                        );
                                                },
                                            },
                                        );
                                    }
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .then(function () {
                                    // always executed
                                })
                        }
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
    question6: {
        backgroundColor: COLORS.Color963,
        height: '100%',
    },
});
export default question6;
