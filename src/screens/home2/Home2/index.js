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
import { SectionTophome, Sectionhome } from 'components/Sections';
import Carousel from 'react-native-snap-carousel';
const Home2 = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const data = [{}, {}, {}, {}];
        const renderItem = ({ item, index }) => {
            return <Sectionhome />;
        };
        return (
            <View style={styles.Home2}>
                <SectionTophome style={COMMON.EleHome265} />
                {/* <ScrollView> */}
                <View style={COMMON.SectionPaddingHome266}>
                    <MText textStyle={COMMON.TxtHome267}>Hello,Jen! </MText>
                    <Carousel
                        // ref={(c) => {
                        //     this.carousel = c;
                        // }}
                        data={data}
                        renderItem={({ item, index }) =>
                            renderItem({ item, index })
                        }
                        sliderWidth={scale(320)}
                        itemWidth={scale(300)}
                        containerCustomStyle={styles.carouselContainer}
                        inactiveSlideShift={100}
                        // onSnapToItem={(index) => this.setState({ index })}
                        // scrollInterpolator={scrollInterpolator}
                        // slideInterpolatedStyle={animatedStyles}
                        layout={'tinder'}
                        layoutCardOffset={`18`}
                        useScrollView={true}
                    />
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
    Home2: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
    carouselContainer: {
        // marginTop: 10,
        // marginBottom: 10,
        alignSelf: 'center',
        height: '100%',
        width: scale(390),
        // backgroundColor: 'red',
    },
});
export default Home2;
