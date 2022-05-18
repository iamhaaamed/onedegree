import {
    MButton,
    MDropDown,
    MIcon,
    MImage,
    MImagePicker,
    MInput,
    MLoading,
    MText,
    MView,
} from 'components/common';
import { useQueryClient } from 'react-query';
import { createScreen } from 'components/elements';
import { SectionTop01 } from 'components/Sections';
import { COLORS } from 'constants/common';
import { useUpdateProfile } from 'hooks/profile';
import useTheme from 'hooks/useTheme';
import { navigate } from 'navigation/methods';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, toPascalCase, verticalScale } from 'utils';
import { authStore } from '../../../store';

const EditProfile = createScreen(
    ({ route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        console.log('..', route?.params?.StateName);
        const queryClient = useQueryClient();
        const setUserName = authStore((state) => state.setUserName);
        const userName = route?.params?.UserName.split(' ');

        const Info = route?.params;
        const [UserImage, setUserImage] = useState(Info?.user?.imageAddress);
        const [IsLoading, setIsLoading] = useState(false);

        const [UserInfo, setUserInfo] = useState({
            firstName: userName[0],
            lastName: userName[1],
            location: route?.params?.StateName,
            age: Info?.user?.age,
            genders: Info?.user?.genders,
            latitude: Info?.user?.latitude,
            longitude: Info?.user?.longitude,
            industry: Info?.user?.industry,
            zipCode: Info?.user?.zipCode,
            educationLevel: Info?.user?.educationLevel,
            currentIncome: Info?.user?.currentIncome,
            isNotificationEnabled: Info?.user?.isNotificationEnabled,
            ethnicity: Info?.user?.ethnicity,
            hourlyAmount: Info?.user?.hourlyAmount,
            monthlyAmount: Info?.user?.monthlyAmount,
            annuallyAmount: Info?.user?.annuallyAmount,
            amountType: Info?.user?.amountType,
            howFarAreYouWillingToTravelToGetCertified:
                Info?.user?.howFarAreYouWillingToTravelToGetCertified,
            whereDidYouHearAboutOnedegreeCareers:
                Info?.user?.whereDidYouHearAboutOnedegreeCareers,
        });
        const { isLoading, mutate } = useUpdateProfile();
        const onPress = async () => {
            mutate(
                {
                    point: [
                        parseFloat(UserInfo?.latitude),
                        parseFloat(UserInfo?.longitude),
                    ],
                    firstName: UserInfo?.firstName,
                    lastName: UserInfo?.lastName,
                    industry: UserInfo?.industry,
                    currentIncome: parseFloat(UserInfo?.currentIncome),
                    isNotificationEnabled: UserInfo?.isNotificationEnabled,
                    imageAddress: UserImage,
                    age: parseInt(UserInfo?.age),
                    genders: UserInfo?.genders,
                    ethnicity: UserInfo?.ethnicity,
                    city: UserInfo?.location,
                    zipCode: UserInfo?.zipCode,
                    educationLevel: UserInfo?.educationLevel,
                    howFarAreYouWillingToTravelToGetCertified:
                        UserInfo?.howFarAreYouWillingToTravelToGetCertified,
                    whereDidYouHearAboutOnedegreeCareers:
                        UserInfo?.whereDidYouHearAboutOnedegreeCareers,
                    annuallyAmount: UserInfo?.annuallyAmount,
                    monthlyAmount: UserInfo?.monthlyAmount,
                    hourlyAmount: UserInfo?.hourlyAmount,
                    amountType: UserInfo?.amountType,
                },
                {
                    onSuccess: (data) => {
                        if (data?.user_updateProfile?.status == 'SUCCESS') {
                            queryClient.invalidateQueries('getMyProfile');
                            setUserName(
                                `${data?.user_updateProfile?.result?.firstName} ${data?.user_updateProfile?.result?.lastName}`,
                            );
                            showMessage({
                                message: `Profile updated successfully`,
                                type: 'success',
                            });
                            navigate('MyProfile');
                        }
                    },
                },
            );
        };

        return (
            <SafeAreaView style={styles.Profile4}>
                <MLoading
                    size="large"
                    color={COLORS.Color323}
                    isLoading={IsLoading || isLoading}
                />
                <ScrollView>
                    <SectionTop01 title="Profile" rightView />

                    <View style={COMMON.SectionPaddingProfile421}>
                        <MImagePicker
                            getImage={(image) => setUserImage(image)}
                            closeOverlay={(x) => setIsLoading(x)}>
                            {({ chooseImage, captureImage }) => (
                                <View
                                    style={{
                                        alignSelf: 'center',
                                    }}>
                                    {UserImage ? (
                                        <View
                                            style={{
                                                overflow: 'hidden',
                                                borderRadius: 100,
                                            }}>
                                            <MImage
                                                imageSource={{ uri: UserImage }}
                                                style={styles.imageWrapper}
                                            />
                                        </View>
                                    ) : (
                                        <View
                                            style={[
                                                styles.imageWrapper,
                                                styles.emptyImage,
                                            ]}>
                                            <MIcon
                                                name={'account'}
                                                color={COLORS.Color267}
                                                size={scale(30)}
                                            />
                                        </View>
                                    )}

                                    <MButton
                                        onPress={chooseImage}
                                        style={COMMON.tabStyle}
                                        containerStyle={COMMON.editPic}
                                        icon={{
                                            name: 'edit',
                                            color: COLORS.white,
                                            size: scale(20),
                                            Component: MaterialCommunityIcons,
                                        }}
                                    />
                                </View>
                            )}
                        </MImagePicker>
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
                            // placeholder={
                            //     UserInfo?.firstName ? UserInfo?.firstName : ''
                            // }
                            placeholderColor={COLORS.Color280}
                            onChangeText={(FName) =>
                                setUserInfo({ ...UserInfo, firstName: FName })
                            }
                            value={UserInfo?.firstName}
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
                            // placeholder={
                            //     UserInfo?.lastName ? UserInfo?.lastName : ''
                            // }
                            placeholderColor={COLORS.Color280}
                            onChangeText={(LName) =>
                                setUserInfo({ ...UserInfo, lastName: LName })
                            }
                            value={UserInfo?.lastName}
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
                            // placeholder={UserInfo?.location}
                            placeholderColor={COLORS.Color280}
                            onChangeText={(loc) =>
                                setUserInfo({ ...UserInfo, location: loc })
                            }
                            value={UserInfo?.location}
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
                                data={CONSTANTS.gender}
                                onValueChange={(item) => {
                                    setUserInfo({
                                        ...UserInfo,
                                        genders: item,
                                    });
                                }}
                                value={UserInfo?.genders} //change label
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
                        <MInput
                            inputStyle={COMMON.InputRect86}
                            containerStyle={COMMON.Input85}
                            // placeholder={UserInfo?.age?.toString()}
                            placeholderColor={COLORS.Color280}
                            onChangeText={(age) =>
                                setUserInfo({ ...UserInfo, age: age })
                            }
                            value={UserInfo?.age.toString()}
                            // error={errors && errors.email}
                            keyboardType="number-pad"
                            maxLength={2}
                            textStyle={COMMON.TextsInput29}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(53)}
                        />
                        <MText textStyle={COMMON.TxtSectionSignIn271}>
                            Ethnicity{' '}
                        </MText>
                        <MView style={COMMON.DropDown10}>
                            <MDropDown
                                mb={verticalScale(24)}
                                data={CONSTANTS.ethnicity}
                                onValueChange={(item) => {
                                    setUserInfo({
                                        ...UserInfo,
                                        ethnicity: item,
                                    });
                                }}
                                value={UserInfo?.ethnicity} //change label
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
                        {console.log('....', UserInfo?.educationLevel)}
                        <MView style={COMMON.DropDown10}>
                            <MDropDown
                                mb={verticalScale(24)}
                                data={CONSTANTS.educationLevel}
                                onValueChange={(item) => {
                                    setUserInfo({
                                        ...UserInfo,
                                        educationLevel: item,
                                    });
                                }}
                                value={UserInfo?.educationLevel} //change label
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
                            inputStyle={COMMON.InputRect126}
                            containerStyle={COMMON.Input85}
                            // placeholder={UserInfo?.currentIncome}
                            placeholderColor={COLORS.Color280}
                            onChangeText={(x) =>
                                setUserInfo({ ...UserInfo, currentIncome: x })
                            }
                            value={UserInfo?.currentIncome.toString()}
                            // error={errors && errors.email}
                            textStyle={COMMON.TextsInput29}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(53)}
                            dolorSign={'USD'}
                            keyboardType="number-pad"
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
    emptyImage: {
        backgroundColor: COLORS.Color321,
        justifyContent: 'center',
        borderRadius: 1000,
    },
    imageWrapper: {
        width: scale(100),
        height: scale(100),
    },
});

export default EditProfile;
