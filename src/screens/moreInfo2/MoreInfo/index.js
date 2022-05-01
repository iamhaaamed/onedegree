import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import ActionSheet from 'react-native-actions-sheet';
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
    MVideo,
} from 'components/common';
import { SectionTop01 } from 'components/Sections';
import { SectionRow, SectionModalRemoveSave } from 'components/Sections';
import futsal from '../../../assets/video/futsal.mp4';
import { navigate } from 'navigation/methods';
const MoreInfo = createScreen(
    ({ route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        console.log('rrrrrr', route?.params?.data);
        const Info = route?.params?.data;
        const refActionSheet = useRef(null);
        const showActionSheet = () => {
            if (refActionSheet.current) {
                refActionSheet.current?.setModalVisible();
            }
        };
        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        return (
            <View style={styles.MoreInfo2}>
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
                                    backgroundColor: COLORS.backMainIcon,
                                    width: '150%',
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
                                        imageSource={IMAGES.image7104}
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
                                        onPress={onPress}
                                        style={COMMON.ButtonRect9}
                                        containerStyle={COMMON.Button8}
                                        color={COLORS.Color327}
                                        iconLeft={{
                                            name: 'heart-outline',
                                            color: COLORS.Color756,
                                            Component: MaterialCommunityIcons,
                                        }}
                                    />
                                </View>
                                <View style={{ width: '10%' }}>
                                    <MButton
                                        onPress={onPress}
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
                            Possible yearly income : $
                            {Info?.career?.possibleYearlyIncome}
                        </MText>
                        <MText textStyle={COMMON.TxtMoreInfo214}>
                            {Info?.career?.description}
                        </MText>
                    </View>
                    <View style={COMMON.RowItemMoreInfo26}>
                        <SectionRow
                            style={{ backgroundColor: COLORS.backMore }}
                            title="certification cost"
                            data={'$' + Info?.career?.maxCertificationCost}
                        />
                        <SectionRow
                            title="Months To Pay Off"
                            infoIcon
                            data={Info?.career?.monthsToPayOffNumber}
                        />
                        <SectionRow
                            style={{ backgroundColor: COLORS.backMore }}
                            title="Work Hours"
                            data={Info?.career?.workHours}
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
                            data={Info?.career?.tenYearGrowth}
                        />
                        <SectionRow
                            title="Type Of Work"
                            data={Info?.career?.typeOfWork}
                            textStyle={styles?.text}
                        />
                        <SectionRow
                            style={{
                                backgroundColor: COLORS.backMore,
                            }}
                            textStyle={styles?.text}
                            title="Other Perks"
                            data={Info?.career?.otherPerks}
                        />
                        <View style={COMMON.SectionPaddingMoreInfo218}>
                            <MVideo source={futsal} style={COMMON.image19} />
                        </View>
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
                    <ActionSheet
                        ref={refActionSheet}
                        containerStyle={styles.action}>
                        <SectionModalRemoveSave
                            showModal={() =>
                                refActionSheet.current?.setModalVisible()
                            }
                        />
                    </ActionSheet>
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
    MoreInfo2: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        height: scale(200),
    },
    text: {
        textAlign: 'left',
        width: scale(250),
        paddingHorizontal: 5,
        alignSelf: 'center',
    },
});
export default MoreInfo;
