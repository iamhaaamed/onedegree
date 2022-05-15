import { MButton, MIcon, MImage, MLoading, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { ProfileTab, SectionInfo, SectionTop01 } from 'components/Sections';
import { COLORS } from 'constants/common';
import { useGetProfile } from 'hooks/profile';
import useTheme from 'hooks/useTheme';
import { navigate } from 'navigation/methods';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { scale, toPascalCase, verticalScale } from 'utils';
import { authStore } from '../../../store';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ProfileScreen = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const { isLoading, data } = useGetProfile();
        const [user, setUser] = useState();
        const [StateName, setStateName] = useState('');
        const [isLoading2, setIsLoading2] = useState(false);
        const [points, setPoints] = useState(8);
        const MAX_POINTS = 13;
        console.log('u:   ', user);
        const { UserName } = authStore((state) => state);
        useEffect(() => {
            setUser(data?.user_login?.result);
            setIsLoading2(true);

            // axios
            //     .get(
            //         `https://geocode.xyz/${data?.user_login?.result?.latitude},${data?.user_login?.result?.longitude}?json=1`,
            //     )
            //     .then(function (response) {
            //         console.log('///////////', response);
            //         if (response?.data) {
            //             setStateName(response?.data?.statename);
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log('///////////', error);
            //         // showMessage({
            //         //     message: `Something went wrong: ${error.message}`,
            //         //     type: 'danger',
            //         // });
            //     })
            //     .then(function () {
            //         // always executed
            //     });

            setIsLoading2(false);
        }, [data]);

        // https://geocode.xyz/35.7219,51.3347?json=1
        //         fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + myLat + ',' + myLon + '&key=' + myApiKey)
        //         .then((response) => response.json())
        //         .then((responseJson) => {
        //             console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
        // })
        const fill = (points / MAX_POINTS) * 100;
        return (
            <SafeAreaView style={styles.Profile4}>
                <MLoading
                    isLoading={isLoading || isLoading2}
                    size="large"
                    color={COLORS.Color323}
                    style={{ top: '50%' }}
                />
                <ScrollView>
                    <SectionTop01 title="Profile" noIcon rightView />
                    <ProfileTab page="profilePage" />

                    <View style={COMMON.SectionPaddingProfile421}>
                        <AnimatedCircularProgress
                            size={scale(130)}
                            width={4}
                            fill={fill}
                            padding={10}
                            rotation={360}
                            dashedBackground="yellow"
                            style={{
                                alignSelf: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginVertical: verticalScale(20),
                            }}
                            tintColor="#84CC17"
                            backgroundColor={COLORS.transparent}>
                            {(fill) => (
                                <>
                                    {user?.imageAddress ? (
                                        <MImage
                                            imageSource={{
                                                uri: user?.imageAddress,
                                            }}
                                            style={COMMON.image222}
                                            customWidth={scale(326)}
                                            customHeight={scale(94)}
                                        />
                                    ) : (
                                        <View
                                            style={[
                                                COMMON.image22,
                                                styles.emptyImage,
                                            ]}>
                                            <MIcon
                                                name={'account'}
                                                color={COLORS.Color267}
                                                size={scale(30)}
                                            />
                                        </View>
                                    )}
                                </>
                            )}
                        </AnimatedCircularProgress>
                        <Text style={styles.persent}>{parseInt(fill)}%</Text>
                        <MText textStyle={COMMON.TxtProfile423}>
                            {user?.firstName
                                ? `${user?.firstName} ${user?.lastName}`
                                : UserName}
                        </MText>
                        <MButton
                            onPress={() =>
                                navigate('EditProfile', {
                                    user,
                                    StateName,
                                    UserName,
                                })
                            }
                            style={COMMON.ButtonRect25}
                            containerStyle={COMMON.Button24}
                            text="Complete Profile"
                            textStyle={COMMON.TextsButton26}
                            color={COLORS.Color977}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Location"
                            data={StateName || user?.city || 'New York'}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Age"
                            data={user?.age || ' '}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Ethnicity"
                            data={user?.ethnicity || 'White'}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Gender"
                            data={toPascalCase(user?.genders) || 'Male'}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Education Level "
                            data={user?.educationLevel || ' '}
                        />
                        <SectionInfo
                            style={COMMON.EleProfile430}
                            title="Current Income"
                            data={user?.currentIncome || ' '}
                        />
                        <MButton
                            onPress={() =>
                                navigate('EditProfile', {
                                    user,
                                    StateName,
                                    UserName,
                                })
                            }
                            style={COMMON.ButtonRect36}
                            containerStyle={COMMON.Button35}
                            text="Edit"
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
    persent: {
        color: '#84CC17',
        alignSelf: 'center',
        fontFamily: 'Muli',
        marginTop: '-5%',
        marginBottom: '5%',
    },
});

export default ProfileScreen;
