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
import { SectionRowCenter } from 'components/Sections';
const question6 = createScreen(
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
            <View style={styles.question6}>
                <ScrollView>
                    <SectionTop />
                    <MImage
                        imageSource={IMAGES.image2773}
                        style={COMMON.Image102}
                        customWidth={scale(381)}
                        customHeight={scale(82)}
                    />

                    <View style={COMMON.SectionPaddingquestion6103}>
                        <MText textStyle={COMMON.Txtquestion6104}>
                            Where Do You Currently Live?{' '}
                        </MText>
                        <MText textStyle={COMMON.Txtquestion6105}>
                            ZIP Code*{' '}
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect108}
                            containerStyle={COMMON.Input106}
                            placeholder="Please enter ZIP Code"
                            placeholderColor={COLORS.Color267}
                            textStyle={COMMON.TextsInput107}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(48)}
                        />
                        <MText textStyle={COMMON.Txtquestion6109}>
                            ! Entering the zip code will help us to training
                            programs{' '}
                        </MText>
                    </View>
                    <SectionRowCenter
                        backPress={() => goBack()}
                        nextPress={() => navigate('Gettingstarted3')}
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
