import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod } from 'components/common/MDateTimePicker';
import ActionSheet from 'react-native-actions-sheet';
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
import { SectionTop01, SectionModalRemoveSave } from 'components/Sections';
const Save = createScreen(
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
        const refActionSheet = useRef(null);
        const showActionSheet = () => {
            if (refActionSheet.current) {
                refActionSheet.current?.setModalVisible();
            }
        };
        const Data = [{}, {}, {}];
        return (
            <View style={styles.Save1}>
                <ScrollView>
                    <SectionTop01
                        style={COMMON.EleSave14}
                        title="Saved Careers"
                    />
                    <View style={COMMON.SectionPaddingSave15}>
                        <MInput
                            containerStyle={COMMON.Input6}
                            placeholder=" Search"
                            textStyle={COMMON.TextsInput7}
                            backgroundColor={COLORS.white}
                            height={verticalScale(51)}
                            iconLeft={{
                                name: 'magnify',
                                color: COLORS.Color565,
                                size: scale(25),
                                Component: MaterialCommunityIcons,
                            }}
                        />
                        <FlatList
                            numColumns={2}
                            data={Data}
                            style={{ width: '100%' }}
                            renderItem={({ item, index }) => (
                                <View
                                    style={{
                                        width: '48%',
                                        marginVertical: 10,
                                        marginHorizontal: 5,
                                    }}>
                                    <MImage
                                        imageSource={IMAGES.intro3}
                                        style={COMMON.image10}
                                        // customWidth={scale(154)}
                                        // customHeight={scale(150)}
                                    />

                                    <View
                                        style={[
                                            COMMON.RowItem,
                                            { alignItems: 'center' },
                                        ]}>
                                        <View style={{ width: '75%' }}>
                                            <MText
                                                textStyle={COMMON.TxtSave112}>
                                                bike delivery{' '}
                                            </MText>
                                        </View>
                                        <View style={{ width: '25%' }}>
                                            <MButton
                                                onPress={() =>
                                                    showActionSheet()
                                                }
                                                style={COMMON.ButtonRect14}
                                                containerStyle={COMMON.Button13}
                                                color={COLORS.Color647}
                                                iconRight={{
                                                    name: 'heart',
                                                    color: COLORS.Color537,
                                                    Component: MaterialCommunityIcons,
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )}
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
    Save1: {
        backgroundColor: COLORS.Color875,
        height: '100%',
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        height: scale(200),
    },
});
export default Save;
