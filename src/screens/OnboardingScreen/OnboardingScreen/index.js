import concat from 'lodash/concat';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { authStore } from '../../../store';
import React, { useRef, useState } from 'react';
import { MButton, MText } from 'components/common';
import { height, verticalScale, width } from 'utils';
import { SectionRowCenter } from 'components/Sections';
import { StackActions, useNavigation } from '@react-navigation/native';
import {
    View,
    Image,
    Animated,
    ScrollView,
    StyleSheet,
    ImageBackground,
} from 'react-native';

const data = [
    {
        imageUrl: require('assets/images/intro-1.png'),
        subtitle:
            "We Help You Explore Careers That Are High-Paying And Don't Require College.",
    },
    {
        imageUrl: require('assets/images/intro-2.png'),
        subtitle:
            'Our Unique Support Process Helps You Easily Pick A New Career Path And Avoid College Debt.',
    },
    {
        imageUrl: require('assets/images/intro-3.png'),
        subtitle:
            'We Connect You To The Best Training Programs In Your Area So You Can Confidently Pursue Your New Career.',
    },
];

const intro6 = () => {
    const navigation = useNavigation();
    const { IMAGES, COMMON } = useTheme();
    const { setIsOnboardingViewed } = authStore((state) => state);

    const scrollRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [scrollX] = useState(new Animated.Value(0));

    const nextPage = () => {
        const currentTo = current + 1;
        if (currentTo == data.length) {
            onPressDone();
        } else {
            if (scrollRef?.current?.scrollTo) {
                setCurrent(currentTo);
                scrollRef.current.scrollTo({
                    x: currentTo * width,
                    y: 0,
                    animated: true,
                });
            }
        }
    };

    const prevPage = () => {
        const currentTo = current - 1;
        if (currentTo >= 0) {
            if (scrollRef?.current?.scrollTo) {
                setCurrent(currentTo);
                scrollRef.current.scrollTo({
                    x: currentTo * width,
                    y: 0,
                    animated: true,
                });
            }
        }
    };

    const position = Animated.divide(scrollX, width);
    let dots = [];

    for (let i = 0; i < data.length; i++) {
        const inputRange = [i - 1, i, i + 1];
        let sizeDot = position.interpolate({
            inputRange: inputRange,
            outputRange: [10, 10, 10],
            extrapolate: 'clamp',
        });
        let colorDot = position.interpolate({
            inputRange: inputRange,
            outputRange: [
                'rgba(255,255,255,0.1)',
                '#fff',
                'rgba(255,255,255,0.1)',
            ],
            extrapolate: 'clamp',
        });
        dots = concat(
            dots,
            <Animated.View
                key={i}
                style={[
                    styles.dot,
                    {
                        width: sizeDot,
                        backgroundColor: colorDot,
                    },
                ]}
            />,
        );
    }

    const onPressDone = () => {
        setIsOnboardingViewed(true);
        navigation.dispatch(StackActions.replace('AuthStack'));
    };

    return (
        <View style={[styles.container, { backgroundColor: COLORS.Color611 }]}>
            <Image style={COMMON.imagelogo0} source={IMAGES.image7436} />
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    ref={scrollRef}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false },
                    )}>
                    {data.map(({ subtitle, imageUrl }, index) => {
                        return (
                            <View key={index} style={styles.imageWrapper}>
                                <Image
                                    source={imageUrl}
                                    resizeMode="contain"
                                    style={styles.image}
                                />
                                <View style={styles.bgWrapper}>
                                    <ImageBackground
                                        source={require('assets/images/intro-bg-2.png')}
                                        resizeMode="stretch"
                                        style={[
                                            styles.bg,
                                            index == 1 && styles.rotateY,
                                        ]}>
                                        <View
                                            style={[
                                                index == 1 && styles.rotateY,
                                                { paddingHorizontal: 24 },
                                            ]}>
                                            <MText
                                                textStyle={[COMMON.Txtintro63]}>
                                                {subtitle}
                                            </MText>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <View style={styles.footer}>
                {current == 0 ? (
                    <MButton
                        text="Get started"
                        onPress={nextPage}
                        color={COLORS.Color611}
                        style={COMMON.buttonRect5}
                        containerStyle={COMMON.button4}
                        textStyle={COMMON.Textsbutton6}
                    />
                ) : (
                    <SectionRowCenter
                        intro
                        nextPress={nextPage}
                        backPress={prevPage}
                        style={{ marginBottom: verticalScale(28) }}
                    />
                )}
                <View style={styles.viewDot}>{dots.map((dot) => dot)}</View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageWrapper: {
        width,
        height: '100%',
        alignItems: 'center',
    },
    image: {
        width: width / 1.7,
        height: width / 1.7,
    },
    bgWrapper: {
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        height: height / 1.8,
    },
    bg: {
        top: 0,
        width: width + 3,
        height: height / 1.8,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rotateY: {
        transform: [{ rotateY: '180deg' }],
    },
    footer: {
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        position: 'absolute',
        alignItems: 'center',
    },
    viewDot: {
        flexDirection: 'row',
        marginBottom: 18,
    },
    dot: {
        height: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFF',
        marginHorizontal: 3,
    },
});
export default intro6;
