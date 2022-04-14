import React, { useState, useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { StyleSheet, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import { authStore } from '../../../store';
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
import { SectionRowCenter } from 'components/Sections';
import { navigate } from 'navigation/methods';
const intro6 = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        // const clickCounter = useRef(0);
        const onPress = () => {
            // console.log(`Clicked! ${clickCounter.current}`);
            move(viewPager, page, +1);
        };
        const [page, setPage] = useState(0);

        const viewPager = useRef(null);

        const move = (pager: any, pageNumber: number, delta: any) => {
            pager.current.setPage(pageNumber + delta);
        };

        const { setIsOnboardingViewed } = authStore((state) => state);

        const onPressDone = () => {
            setIsOnboardingViewed(true);
        };
        const data = [
            {
                imageUrl: IMAGES.image5606,
                imageBack: IMAGES.imageBack2,
                subtitle:
                    " We help you explore careers that are high-paying and don't require college.",
            },
            {
                imageUrl: IMAGES.intro2,
                imageBack: IMAGES.imageBack2,
                subtitle:
                    'Our unique support process helps you easily pick a new career path and avoid college debt.',
            },
            {
                imageUrl: IMAGES.intro3,
                imageBack: IMAGES.imageBack1,
                subtitle:
                    'We connect you to the best training programs in your area so you can confidently pursue your new career.',
            },
            {
                imageUrl: IMAGES.intro4,
                imageBack: IMAGES.imageBack1,
                subtitle:
                    'We connect you to the best training programs in your area so you can confidently pursue your new career.',
            },
        ];
        return (
            <View style={styles.intro6}>
                <ScrollView>
                    <MImage
                        imageSource={IMAGES.image7436}
                        style={COMMON.imagelogo0}
                        customWidth={'100%'}
                        customHeight={scale(52)}
                    />
                    <MImage
                        imageSource={
                            page == 1 ? IMAGES.imageBack1 : IMAGES.imageBack2
                        }
                        style={COMMON.imagevector2}
                        customWidth={'90%'}
                        customHeight={scale(400)}
                    />
                    <PagerView
                        style={{
                            width: '100%',
                            height: scale(600),
                        }}
                        ref={viewPager}
                        initialPage={0}
                        onPageSelected={(e) => setPage(e.nativeEvent.position)}>
                        {data.map(
                            ({ imageBack, subtitle, imageUrl }, index) => {
                                return (
                                    <View>
                                        <MImage
                                            imageSource={imageUrl}
                                            style={COMMON.imagevector1}
                                            resizeMode={
                                                index == 2 ? 'contain' : null
                                            }
                                            customWidth={scale(390)}
                                            customHeight={scale(232)}
                                        />

                                        <View
                                            style={
                                                COMMON.SectionPaddingintro62
                                            }>
                                            <MText
                                                textStyle={COMMON.Txtintro63}>
                                                {subtitle}
                                            </MText>
                                            {index == 0 ? (
                                                <MButton
                                                    onPress={onPress}
                                                    style={COMMON.buttonRect5}
                                                    containerStyle={
                                                        COMMON.button4
                                                    }
                                                    text="Get started"
                                                    textStyle={
                                                        COMMON.Textsbutton6
                                                    }
                                                    color={COLORS.Color611}
                                                    iconSide
                                                    iconTop={{
                                                        name:
                                                            'arrow-forward-sharp',
                                                        color: COLORS.Color378,
                                                    }}
                                                />
                                            ) : (
                                                <SectionRowCenter
                                                    nextPress={() => {
                                                        if (
                                                            page !==
                                                            data.length - 1
                                                        ) {
                                                            move(
                                                                viewPager,
                                                                page,
                                                                1,
                                                            );
                                                        } else {
                                                            onPressDone();
                                                        }
                                                    }}
                                                    backPress={() =>
                                                        move(
                                                            viewPager,
                                                            page,
                                                            -1,
                                                        )
                                                    }
                                                    intro
                                                />
                                            )}
                                        </View>
                                    </View>
                                );
                            },
                        )}
                    </PagerView>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        {data.map((_, index: number) => (
                            <View
                                key={index}
                                style={{
                                    backgroundColor:
                                        index === page
                                            ? COLORS.white
                                            : 'transparent',
                                    width: scale(10),
                                    height: scale(10),
                                    borderRadius: scale(30),
                                    borderColor:
                                        index === page
                                            ? 'transparent'
                                            : COLORS.white,
                                    borderWidth: index === page ? 0 : 0.5,
                                    marginHorizontal: scale(10),
                                }}
                            />
                        ))}
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
    intro6: {
        backgroundColor: COLORS.Color611,
        height: '100%',
    },
});
export default intro6;
