import axios from 'axios';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { authStore } from '../../../store';
import { useGetProfile } from 'hooks/profile';
import { navigate } from 'navigation/methods';
import { SectionInfo } from 'components/Sections';
import React, { useEffect, useState } from 'react';
import { createScreen } from 'components/elements';
import { scale, toPascalCase, verticalScale } from 'utils';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MButton, MIcon, MImage, MLoading, MText } from 'components/common';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const UserProfile = createScreen(
    () => {
        const { COMMON } = useTheme();
        const { data } = useGetProfile();
        const [user, setUser] = useState();
        const [StateName, setStateName] = useState('');
        console.log('sssss', StateName);
        const [isLoading2, setIsLoading2] = useState(false);
        const [points, setPoints] = useState(8);
        const MAX_POINTS = 13;

        const { UserName } = authStore((state) => state);
        const setCityName = authStore((state) => state.setCityName);
        useEffect(() => {
            setUser(data?.user_login?.result);
            setIsLoading2(true);

            if (data?.user_login?.result?.latitude !== undefined) {
                // console.log(
                //     '2222',
                //     `https://geocode.xyz/${data?.user_login?.result?.longitude},${data?.user_login?.result?.latitude}?json=1`,
                // );
                const latLang = `https://geocode.xyz/${data?.user_login?.result?.latitude},${data?.user_login?.result?.longitude}?json=1&auth=917299173845068219122x24146`;
                // const params = {
                //     // auth: 'your auth code',
                //     locate: '58.41032,15.62162',
                //     json: '1',
                // };
                console.log('laaaaaaaa', latLang);
                axios
                    .get(latLang)
                    .then(function (response) {
                        console.log('///////////', response?.data?.statename);
                        if (response?.data) {
                            setStateName(
                                response?.data?.statename ||
                                    data?.user_login?.result?.city,
                            );
                            setCityName(response?.data?.statename);
                        }
                    })
                    .catch(function (error) {
                        // console.log('///////////', error);
                        // showMessage({
                        //     message: `Something went wrong: ${error.message}`,
                        //     type: 'danger',
                        // });
                    })
                    .then(function () {
                        // always executed
                    });
            }
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
                    isLoading={isLoading2}
                    size="large"
                    color={COLORS.Color323}
                    style={{ top: '50%' }}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={COMMON.SectionPaddingProfile421}>
                        <AnimatedCircularProgress
                            width={4}
                            fill={fill}
                            padding={10}
                            rotation={360}
                            size={scale(100)}
                            dashedBackground="yellow"
                            style={{
                                alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: verticalScale(20),
                            }}
                            tintColor="#84CC17"
                            backgroundColor={COLORS.transparent}>
                            {(fill) => (
                                <>
                                    {user?.imageAddress ? (
                                        <View
                                            style={{
                                                width: '85%',
                                                height: '85%',
                                            }}>
                                            <MImage
                                                imageSource={{
                                                    uri: user?.imageAddress,
                                                }}
                                                style={COMMON.image222}
                                            />
                                        </View>
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
                            data={StateName || user?.city}
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

export default UserProfile;
