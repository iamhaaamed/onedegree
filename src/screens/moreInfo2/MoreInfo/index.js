import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { COLORS } from 'constants/common';
import { navigate } from 'navigation/methods';
import { createScreen } from 'components/elements';
import { SectionRow, SectionTop01 } from 'components/Sections';
import { useLikeCareer, useUnlikeCareer } from 'hooks/careers';
import { MButton, MImage, MText, MVideo } from 'components/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    View,
    Share,
    ScrollView,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {
    scale,
    toPascalCase,
    convertFirstCharacterAllWordsToUppercase,
    getDateXDaysAgo,
} from 'utils';

const MoreInfo = createScreen(
    ({ route }) => {
        const { COMMON } = useTheme();
        const [Like, setLike] = useState(route?.params?.Like);
        const Info = route?.params?.data;
        const { mutate: LikeMutate } = useLikeCareer();
        const { mutate: UnLikeMutate } = useUnlikeCareer();
        const OnShare = async (data) => {
            try {
                // let img = data.images_link[0]?.replace(":3000", "")
                const result = await Share.share({
                    message: Info?.career?.title,
                });
                if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                        // shared with activity type of result.activityType
                    } else {
                        // shared
                    }
                } else if (result.action === Share.dismissedAction) {
                    // dismissed
                }
            } catch (error) {}
        };
        return (
            <SafeAreaView style={styles.MoreInfo2}>
                <ScrollView>
                    <SectionTop01
                        style={COMMON.EleMoreInfo24}
                        title={'More Info'}
                    />
                    <View style={COMMON.SectionPaddingMoreInfo25}>
                        <View
                            style={{
                                height: scale(180),
                                justifyContent: 'center',
                            }}>
                            <View
                                style={{
                                    height: '50%',
                                    width: '150%',
                                    backgroundColor: '#eef2f9',
                                    alignSelf: 'center',
                                    zIndex: -2,
                                }}
                            />
                            <View
                                style={{
                                    height: '50%',
                                    width: '150%',
                                    alignSelf: 'center',
                                    zIndex: -2,
                                }}
                            />
                            <View
                                style={[
                                    COMMON.RowItem,
                                    COMMON.RowItemMoreInfo26,
                                    {
                                        position: 'absolute',
                                        // marginVertical: 10,
                                    },
                                ]}>
                                <View style={{ width: '75%' }}>
                                    <MImage
                                        imageSource={{
                                            uri: Info?.career?.imageAddress,
                                        }}
                                        style={COMMON.image7}
                                        customWidth={scale(137)}
                                        customHeight={scale(137)}
                                    />
                                </View>
                                <View
                                    style={{
                                        width: '10%',
                                    }}>
                                    <MButton
                                        onPress={() => {
                                            if (Like)
                                                UnLikeMutate(Info?.career?.id, {
                                                    onSuccess: (data) => {
                                                        if (
                                                            data?.career_unlike
                                                                ?.status ==
                                                            'SUCCESS'
                                                        ) {
                                                            setLike(false);
                                                        }
                                                    },
                                                });
                                            else
                                                LikeMutate(Info?.career?.id, {
                                                    onSuccess: (data) => {
                                                        if (
                                                            data?.career_like
                                                                ?.status ==
                                                            'SUCCESS'
                                                        )
                                                            setLike(true);
                                                    },
                                                });
                                        }}
                                        style={COMMON.ButtonRect9}
                                        containerStyle={COMMON.Button8}
                                        color={COLORS.Color327}
                                        iconLeft={{
                                            name: Like
                                                ? 'heart'
                                                : 'heart-outline',
                                            color: Like
                                                ? COLORS.Color134
                                                : COLORS.Color756,
                                            Component: MaterialCommunityIcons,
                                        }}
                                    />
                                </View>
                                <View style={{ width: '10%' }}>
                                    <MButton
                                        onPress={() => OnShare()}
                                        style={COMMON.ButtonRect9}
                                        containerStyle={COMMON.Button8}
                                        color={COLORS.Color327}
                                        iconRight={{
                                            name: 'share-variant',
                                            color: COLORS.Color756,
                                            Component: MaterialCommunityIcons,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <MText textStyle={COMMON.TxtMoreInfo212}>
                            {Info?.career?.title}
                        </MText>
                        <MText textStyle={COMMON.TxtMoreInfo213}>
                            Possible Yearly Income : $
                            {Info?.career?.possibleYearlyIncome}
                        </MText>
                        <MText textStyle={COMMON.TxtMoreInfo214}>
                            {convertFirstCharacterAllWordsToUppercase(
                                Info?.career?.description,
                            )}
                        </MText>
                    </View>
                    <View style={COMMON.RowItemMoreInfo26}>
                        <SectionRow
                            style={{ backgroundColor: COLORS.backMore }}
                            title="Certification Cost"
                            data={'$' + Info?.career?.maxCertificationCost}
                        />
                        <SectionRow
                            title="Months To Pay Off"
                            infoIcon
                            textStyle={styles?.text}
                            data={Info?.career?.monthsToPayOffNumber + ' Years'}
                        />
                        <SectionRow
                            style={{ backgroundColor: COLORS.backMore }}
                            title="Work Hours"
                            data={toPascalCase(Info?.career?.workHours)}
                        />
                        <SectionRow
                            title="100% Remote"
                            data={
                                Info?.career?.is100PercentRemote ? 'Yes' : 'No'
                            }
                        />
                        <SectionRow
                            style={{ backgroundColor: COLORS.backMore }}
                            title="Typical Salary"
                            data={'$' + Info?.career?.typicalSalary}
                        />
                        <SectionRow
                            title="Starting Salary"
                            data={'$' + Info?.career?.startingSalary}
                        />
                        <SectionRow
                            style={{ backgroundColor: COLORS.backMore }}
                            title="10-Year Growth"
                            data={Info?.career?.tenYearGrowth + '%'}
                        />
                        <SectionRow
                            title="Type Of Work"
                            data={toPascalCase(Info?.career?.typeOfWork)}
                            textStyle={styles?.text}
                        />
                        <SectionRow
                            style={{
                                backgroundColor: COLORS.backMore,
                            }}
                            textStyle={styles?.text}
                            title="Other Perks"
                            data={toPascalCase(Info?.career?.otherPerks)}
                        />
                        {Info?.career?.videoAddress && (
                            <View style={COMMON.SectionPaddingMoreInfo218}>
                                <MVideo
                                    source={{ uri: Info?.career?.videoAddress }}
                                    style={COMMON.image19}
                                />
                            </View>
                        )}
                    </View>
                    <View style={COMMON.SectionPaddingMoreInfo220}>
                        <MButton
                            onPress={() => navigate('ChatScreen')}
                            style={COMMON.ButtonRect22}
                            containerStyle={COMMON.Button21}
                            text="Ask Question"
                            textStyle={COMMON.TextsButton23}
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
    MoreInfo2: {
        backgroundColor: COLORS.Color197,
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        height: scale(200),
    },
    text: {
        textAlign: 'right',
        // maxWidth: scale(250),
        // paddingHorizontal: 5,
        alignSelf: 'flex-start',
    },
});
export default MoreInfo;
