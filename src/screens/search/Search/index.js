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
import ActionSheet from 'react-native-actions-sheet';
import { Container, SearchFilter, SectionTop01 } from 'components/Sections';
const Search = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
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
            <Container style={styles.Search}>
                <ScrollView>
                    <SectionTop01
                        style={COMMON.EleSearch4}
                        title={'Search'}
                        noIcon
                    />
                    <View style={COMMON.SectionPaddingSearch5}>
                        <View style={[COMMON.RowItem, COMMON.RowItemSearch6]}>
                            <View
                                style={{
                                    width: '80%',
                                }}>
                                <MInput
                                    containerStyle={COMMON.InputRect9}
                                    placeholder=" Search"
                                    textStyle={COMMON.TextsInput8}
                                    backgroundColor={COLORS.white}
                                    height={verticalScale(51)}
                                    iconLeft={{
                                        name: 'magnify',
                                        color: COLORS.Color321,
                                        size: scale(23),
                                        Component: MaterialCommunityIcons,
                                    }}
                                />
                            </View>
                            <View style={{ width: '20%' }}>
                                <MButton
                                    onPress={() => showActionSheet()}
                                    style={COMMON.ButtonRect11}
                                    containerStyle={COMMON.Button10}
                                    color={COLORS.white}
                                    iconRight={{
                                        name: 'filter',
                                        color: COLORS.Color424,
                                        Component: MaterialCommunityIcons,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={COMMON.SectionPaddingSearch12}>
                            <View style={[COMMON.RowItem, COMMON.SectionEvent]}>
                                <View style={{ width: '20%' }}>
                                    <MImage
                                        imageSource={IMAGES.intro4}
                                        style={COMMON.image14}
                                        customWidth={scale(59)}
                                        customHeight={scale(69)}
                                    />
                                </View>
                                <View
                                    style={{
                                        width: '60%',
                                        marginLeft: scale(10),
                                    }}>
                                    <MText textStyle={COMMON.TxtSearch15}>
                                        Photographer{' '}
                                    </MText>
                                    <MText textStyle={COMMON.TxtSearch16}>
                                        Possible Yearly Income{' '}
                                    </MText>
                                </View>
                                <View
                                    style={{
                                        alignItems: 'flex-end',
                                        marginRight: scale(11),
                                    }}>
                                    <MIcon
                                        IconComponent={MaterialCommunityIcons}
                                        name="heart"
                                        size={scale(25)}
                                        style={{ paddingVertical: scale(10) }}
                                        color={COLORS.Color508}
                                    />
                                    <MText textStyle={COMMON.TxtSearch17}>
                                        $85,711{' '}
                                    </MText>
                                </View>
                            </View>
                        </View>
                    </View>
                    <ActionSheet
                        ref={refActionSheet}
                        containerStyle={styles.action}>
                        <SearchFilter
                            showModal={() =>
                                refActionSheet.current?.setModalVisible()
                            }
                        />
                    </ActionSheet>
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
    Search: {
        backgroundColor: COLORS.Color780,
        height: '100%',
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        maxHeight: scale(600),
    },
});
export default Search;
