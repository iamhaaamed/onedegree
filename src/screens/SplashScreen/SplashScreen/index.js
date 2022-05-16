import { StackActions, useNavigation } from '@react-navigation/native';
import { MImage } from 'components/common';
import { createScreen } from 'components/elements';
import { Container } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { scale } from 'utils';
import { authStore } from '../../../store';
import graphQLClient from '../../../graphql/graphQLClient';

const SplashScreen = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const { isOnboardingViewed, token, AnswerQuestion, verify } = authStore(
            (state) => state,
        );

        const navigation = useNavigation();

        useEffect(() => {
            // navigation.dispatch(StackActions.replace('AuthStack'));
            setTimeout(() => {
                if (token) {
                    graphQLClient.setHeader('authorization', 'Bearer ' + token);
                    if (AnswerQuestion && verify)
                        navigation.dispatch(StackActions.replace('MainStack'));
                    else if (verify) {
                        navigation.dispatch(
                            StackActions.replace('AuthStack', {
                                screen: 'Hiquestion2',
                            }),
                        );
                    } else {
                        navigation.dispatch(
                            StackActions.replace('AuthStack', {
                                screen: 'Forgetpassword1',
                            }),
                        );
                    }
                } else if (isOnboardingViewed) {
                    navigation.dispatch(StackActions.replace('AuthStack'));
                } else {
                    navigation.dispatch(StackActions.replace('Onboarding'));
                }
            }, 3000);
        }, [isOnboardingViewed, token, navigation]);

        return (
            <Container style={styles.splash7}>
                <Animatable.View
                    animation="fadeInDown"
                    easing="ease-out"
                    duration={200}
                    style={styles.fillCenter}>
                    <MImage
                        imageSource={IMAGES.image2834}
                        style={COMMON.image1190}
                        customWidth={scale(390)}
                        customHeight={scale(130)}
                    />
                </Animatable.View>
                <Animatable.View
                    animation="fadeInDown"
                    easing="ease-out"
                    duration={200}
                    delay={200}
                    style={styles.fillCenter2}>
                    <MImage
                        imageSource={IMAGES.splash2}
                        style={styles.splash2}
                        customWidth={scale(390)}
                        customHeight={scale(130)}
                    />
                </Animatable.View>
                <Animatable.View
                    animation="fadeInDown"
                    easing="ease-out"
                    duration={200}
                    delay={400}
                    style={styles.fillCenter3}>
                    <MImage
                        imageSource={IMAGES.splash4}
                        style={styles.splash4}
                        customWidth={scale(390)}
                        customHeight={scale(130)}
                    />
                </Animatable.View>
                <MImage
                    imageSource={IMAGES.image6011}
                    style={COMMON.image320}
                    customWidth={scale(390)}
                    customHeight={scale(175)}
                />
                <Animatable.View
                    animation="fadeInUp"
                    easing="ease-out"
                    duration={200}
                    delay={400}
                    style={styles.fillCenter6}>
                    <MImage
                        imageSource={IMAGES.splash3}
                        style={styles.splash3}
                        customWidth={scale(390)}
                        customHeight={scale(130)}
                    />
                </Animatable.View>
                <Animatable.View
                    animation="fadeInUp"
                    easing="ease-out"
                    duration={200}
                    delay={200}
                    style={styles.fillCenter5}>
                    <MImage
                        imageSource={IMAGES.splash1}
                        style={styles.splash1}
                        customWidth={scale(390)}
                        customHeight={scale(130)}
                    />
                </Animatable.View>
                <Animatable.View
                    animation="fadeInUp"
                    easing="ease-out"
                    duration={200}
                    style={styles.fillCenter4}>
                    <MImage
                        imageSource={IMAGES.image6462}
                        style={COMMON.image221}
                        customWidth={scale(390)}
                        customHeight={scale(144)}
                    />
                </Animatable.View>
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
    splash7: {
        backgroundColor: COLORS.Color611,
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    fillCenter: {
        alignSelf: 'center',
        top: 0,
        position: 'absolute',
        left: 0,
    },
    fillCenter2: {
        alignSelf: 'center',
        top: '5%',
        position: 'absolute',
        left: '-3%',
    },
    fillCenter3: {
        alignSelf: 'center',
        top: '-12%',
        position: 'absolute',
        left: '-20%',
    },
    fillCenter4: {
        bottom: '20%',
        // right: '0%',
        position: 'absolute',
    },
    fillCenter5: {
        bottom: '28%',
        left: '40%',

        zIndex: 300,
        position: 'absolute',
    },
    fillCenter6: {
        bottom: '32%',
        left: '32%',
        zIndex: 300,
        position: 'absolute',
    },
    splash2: {
        width: scale(360),
        height: scale(300),
        // position: 'absolute',
        // zIndex: -30,
        top: '-42%',
        left: '-15%',
    },
    splash1: {
        width: scale(390),
        height: scale(300),
        position: 'absolute',
        zIndex: 30,
        // bottom: '-9%',
        // right: '-45%',
    },
    splash3: {
        width: scale(420),
        height: scale(300),
        position: 'absolute',
        zIndex: 30,
        // bottom: '-8%',
        // right: '-45%',
    },
    splash4: {
        width: scale(390),
        height: scale(350),
        position: 'absolute',
        zIndex: 30,
        top: '-9%',
        left: '-15%',
    },
});
export default SplashScreen;
