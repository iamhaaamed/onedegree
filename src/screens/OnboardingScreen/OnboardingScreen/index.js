import { StackActions, useNavigation } from '@react-navigation/native';
import { MButton, MImage, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { Container, SectionRowCenter } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { scale } from 'utils';
import { authStore } from '../../../store';

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
        const [TextStyle, setTextStyle] = useState(false);
        const viewPager = useRef(null);

        const move = (pager: any, pageNumber: number, delta: any) => {
            pager.current.setPage(pageNumber + delta);
        };

        const { setIsOnboardingViewed } = authStore((state) => state);
        const navigation = useNavigation();

        const onPressDone = () => {
            setIsOnboardingViewed(true);
            navigation.dispatch(StackActions.replace('AuthStack'));
        };
        const data = [
            {
                imageUrl: IMAGES.image5606,
                imageBack: IMAGES.imageBack2,
                subtitle:
                    "We Help You Explore Careers That Are High-Paying And Don't Require College.",
            },
            {
                imageUrl: IMAGES.intro2,
                imageBack: IMAGES.imageBack2,
                subtitle:
                    'Our Unique Support Process Helps You Easily Pick A New Career Path And Avoid College Debt.',
            },
            {
                imageUrl: IMAGES.intro4,
                imageBack: IMAGES.imageBack1,
                subtitle:
                    'We Connect You To The Best Training Programs In Your Area So You Can Confidently Pursue Your New Career.',
            },
            // {
            //     imageUrl: IMAGES.intro3,
            //     imageBack: IMAGES.imageBack1,
            //     subtitle:
            //         'We Connect You To The Best Training Programs In Your Area So You Can Confidently Pursue Your New Career.',
            // },
        ];
        return (
            <Container style={styles.intro6}>
                <MImage
                    imageSource={IMAGES.image7436}
                    style={COMMON.imagelogo0}
                    customWidth={'100%'}
                    customHeight={scale(52)}
                />
                {/* {page != 0 && ( */}
                <MImage
                    imageSource={
                        page == 2 ? IMAGES.imageBack2 : IMAGES.imageBack1
                    }
                    style={COMMON.imagevector2}
                    customWidth={'90%'}
                    customHeight={scale(400)}
                />
                {/* )} */}
                <PagerView
                    style={{
                        flex: 1,
                        width: '100%',
                    }}
                    ref={viewPager}
                    initialPage={0}
                    onPageSelected={(e) => setPage(e.nativeEvent.position)}>
                    {data.map(({ imageBack, subtitle, imageUrl }, index) => {
                        return (
                            <View key={index}>
                                <MImage
                                    imageSource={imageUrl}
                                    resizeMode={'contain'}
                                    style={COMMON.imagevector1}
                                />

                                <View style={COMMON.SectionPaddingintro62}>
                                    <MText
                                        textStyle={[
                                            COMMON.Txtintro63,
                                            {
                                                color:
                                                    // page == 0
                                                    //     ? 'black'
                                                    // :
                                                    'white',
                                            },
                                        ]}>
                                        {subtitle}
                                    </MText>
                                </View>
                            </View>
                        );
                    })}
                </PagerView>
                {page == 0 ? (
                    <MButton
                        onPress={onPress}
                        style={COMMON.buttonRect5}
                        containerStyle={[
                            COMMON.button4,
                            { marginBottom: '5%' },
                        ]}
                        text="Get started"
                        textStyle={COMMON.Textsbutton6}
                        color={COLORS.Color611}
                        // iconSide
                        // iconTop={{
                        //     name: 'arrow-forward-sharp',
                        //     color: COLORS.Color378,
                        // }}
                    />
                ) : (
                    <SectionRowCenter
                        style={{ marginBottom: '5%' }}
                        nextPress={() => {
                            if (page !== data.length - 1) {
                                move(viewPager, page, 1);
                            } else {
                                onPressDone();
                            }
                        }}
                        backPress={() => move(viewPager, page, -1)}
                        intro
                    />
                )}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        justifyContent: 'center',
                    }}>
                    {data.map((_, index) => (
                        <View
                            key={index}
                            style={{
                                backgroundColor:
                                    index === page
                                        ? //  page == 0
                                          //     ? '#ccc'
                                          //     :
                                          COLORS.white
                                        : 'transparent',
                                width: scale(10),
                                height: scale(10),
                                borderRadius: scale(30),
                                borderColor:
                                    index === page
                                        ? 'transparent'
                                        : page == 0
                                        ? '#ccc'
                                        : COLORS.white,
                                borderWidth: index === page ? 0 : 0.5,
                                marginHorizontal: scale(10),
                            }}
                        />
                    ))}
                </View>
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
    intro6: {
        backgroundColor: COLORS.Color611,
        height: '100%',
    },
});
export default intro6;
