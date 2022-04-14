import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';
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
import { SectionTopchat } from 'components/Sections';
import { SectionChat } from 'components/Sections';
const Chat3 = createScreen(
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
            <View style={styles.Chat3}>
                {/* <ScrollView> */}
                <SectionTopchat style={COMMON.EleChat330} />
                <ScrollView style={COMMON.SectionPaddingChat331}>
                    <View style={COMMON.SectionPaddingChat332}>
                        <SectionChat style={COMMON.EleChat334} />
                        <MText textStyle={COMMON.TxtChat335}>11:25 AM </MText>
                    </View>
                    <View style={COMMON.SectionPaddingChat336}>
                        <SectionChat style={COMMON.EleChat337} user />
                        <MText textStyle={COMMON.TxtChat338}>11:25 AM </MText>
                    </View>
                    {/* <View style={COMMON.SectionPaddingChat339}>
                        <SectionChat style={COMMON.EleChat340} />
                        <MText textStyle={COMMON.TxtChat341}>11:25 AM </MText>
                    </View>
                    <View style={COMMON.SectionPaddingChat342}>
                        <SectionChat style={COMMON.EleChat343} />
                        <MText textStyle={COMMON.TxtChat344}>11:25 AM </MText>
                    </View> */}
                </ScrollView>
                <View
                    style={[
                        COMMON.RowItem,
                        { justifyContent: 'center', alignItems: 'center' },
                    ]}>
                    <View style={{ width: '80%' }}>
                        <MInput
                            // style={COMMON.InputRect48}
                            multiline
                            containerStyle={COMMON.Input46}
                            placeholder="Lorem Ipsum Dolor Sit"
                            textStyle={COMMON.TextsInput47}
                            backgroundColor={COLORS.white}
                            height={verticalScale(48)}
                            iconRight={{
                                name: 'paperclip',
                                color: COLORS.Color700,
                                Component: MaterialCommunityIcons,
                            }}
                        />
                    </View>
                    <View style={{ width: '15%' }}>
                        <MButton
                            onPress={onPress}
                            style={COMMON.ButtonRect50}
                            containerStyle={COMMON.Button49}
                            color={COLORS.Color148}
                            iconLeft={{
                                name: 'send',
                                color: COLORS.white,
                                Component: MaterialCommunityIcons,
                            }}
                        />
                    </View>
                </View>
                {/* </ScrollView> */}
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
    Chat3: {
        backgroundColor: COLORS.Color596,
        height: '100%',
    },
});
export default Chat3;
