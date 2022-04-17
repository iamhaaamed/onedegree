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
import { SectionTop01 } from 'components/Sections';
import { SectionRow } from 'components/Sections';
const MoreInfo = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

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
                            Photographer{' '}
                        </MText>
                        <MText textStyle={COMMON.TxtMoreInfo213}>
                            Possible yearly income : $38,970{' '}
                        </MText>
                        <MText textStyle={COMMON.TxtMoreInfo214}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do{' '}
                        </MText>
                    </View>
                    <View style={COMMON.RowItemMoreInfo26}>
                        <SectionRow />
                        <SectionRow />
                        <SectionRow />
                        <SectionRow />
                        <SectionRow />
                        <SectionRow />
                        <SectionRow />
                        <SectionRow />
                        <SectionRow />
                        <View style={COMMON.SectionPaddingMoreInfo218}>
                            <MImage
                                imageSource={IMAGES.image7104}
                                style={COMMON.image19}
                                customWidth={scale(326)}
                                customHeight={scale(169)}
                            />
                        </View>
                    </View>
                    <View style={COMMON.SectionPaddingMoreInfo220}>
                        <MButton
                            onPress={onPress}
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
});
export default MoreInfo;
