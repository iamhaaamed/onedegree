import React, { useEffect } from 'react';
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
import { scrollInterpolators, animatedStyles } from './animations';
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
import { useLogin } from 'hooks/auth';
import { SectionTophome, Sectionhome } from 'components/Sections';
import Carousel from 'react-native-snap-carousel';
import { useGetCareers } from 'hooks/careers';
import { showMessage } from 'react-native-flash-message';
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
        const [
            onEndReachedCalledDuringMomentum,
            setonEndReachedCalledDuringMomentum,
        ] = useState(true);
        const [user, setUser] = useState();
        const [isLoading2, setIsLoading2] = useState(false);
        const { mutate } = useLogin();
        useEffect(() => {
            setIsLoading2(true);
            try {
                mutate(
                    {},
                    {
                        onSuccess: (data) => {
                            if (data?.user_login?.status == 'SUCCESS')
                                setUser(data?.user_login?.result);
                        },
                    },
                );
            } catch (e) {
                console.log(e, 'e!!!!');
                if (e === 'NOT_FOUND') {
                    showMessage({
                        message: 'You are not registered!',
                        type: 'danger',
                    });
                }
            }
            setIsLoading2(false);
        }, []);
        const {
            isLoading,
            data: careers,
            fetchNextPage,
            hasNextPage,
            isRefetching,
            refetch,
        } = useGetCareers({});

        let Careers = careers?.pages;
        const renderItem = ({ item, index }) => {
            return <Sectionhome data={item} />;
        };
        console.log('hasNextPage', hasNextPage);
        return (
            <View style={styles.Home2}>
                <MLoading
                    isLoading={isLoading || isLoading2}
                    size="large"
                    color={COLORS.Color323}
                />
                <SectionTophome style={COMMON.EleHome265} />
                <View style={COMMON.SectionPaddingHome266}>
                    <MText textStyle={COMMON.TxtHome267}>
                        Hello,{user?.email} !{' '}
                    </MText>
                    <Carousel
                        // ref={(c) => {
                        //     this.carousel = c;
                        // }}
                        enableSnap={true}
                        enableMomentum={true}
                        maxToRenderPerBatch={8}
                        initialNumToRender={4}
                        data={Careers}
                        refreshing={isRefetching}
                        onRefresh={refetch}
                        renderItem={({ item, index }) =>
                            renderItem({ item, index })
                        }
                        lockScrollWhileSnapping
                        // sliderWidth={scale(320)}
                        itemWidth={scale(300)}
                        itemHeight={scale(500)}
                        sliderHeight={scale(570)}
                        containerCustomStyle={styles.carouselContainer}
                        contentContainerCustomStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '-5%',
                        }}
                        // inactiveSlideShift={100}
                        onSnapToItem={() => {
                            if (hasNextPage) {
                                fetchNextPage();
                            }
                        }}
                        // scrollInterpolator={scrollInterpolator}
                        // slideInterpolatedStyle={animatedStyles}
                        layout={'tinder'}
                        layoutCardOffset={`18`}
                        // scrollInterpolator={
                        //     scrollInterpolators[`scrollInterpolator${1}`]
                        // }
                        // slideInterpolatedStyle={
                        //     animatedStyles[`animatedStyles${1}`]
                        // }
                        useScrollView={true}
                        vertical={true}
                        onEndReachedThreshold={0.9}
                        onEndReached={() => {
                            if (hasNextPage) {
                                fetchNextPage();
                            }
                        }}
                        // activeAnimationOptions={{
                        //     friction: 4,
                        //     tension: 40,
                        // }}
                        keyExtractor={(item, index) => index.toString()}
                        onMomentumScrollBegin={() => {
                            setonEndReachedCalledDuringMomentum(false);
                        }}
                    />
                </View>
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
        alignSelf: 'center',
        width: scale(370),
    },
});
export default Home2;
