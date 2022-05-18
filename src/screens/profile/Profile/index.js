import UserProfile from './user-profile';
import { COLORS } from 'constants/common';
import { Loading } from 'components/common';
import { Question } from 'screens/question';
import { useGetProfile } from 'hooks/profile';
import { scale, verticalScale } from 'utils';
import { SectionTop01 } from 'components/Sections';
import React, { useMemo, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Text,
    View,
    Animated,
    Dimensions,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
    const PAGES = useMemo(() => ['Profile', 'Questions'], []);

    const scrollViewRef = useRef();
    const [active, setActive] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const { isLoading } = useGetProfile();

    const onCLick = (i) => {
        setActive(i);
        scrollViewRef.current.scrollTo({ x: i * width });
    };

    return (
        <SafeAreaView style={styles.profileContainer}>
            <SectionTop01 title="Profile" noIcon rightView />
            <View style={styles.container}>
                <View style={{ padding: 5, paddingTop: 0 }}>
                    <ButtonContainer
                        active={active}
                        buttons={PAGES}
                        onClick={onCLick}
                        scrollX={scrollX}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        ref={scrollViewRef}
                        scrollEventThrottle={10}
                        decelerationRate="fast"
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent: {
                                        contentOffset: { x: scrollX },
                                    },
                                },
                            ],
                            { useNativeDriver: false },
                        )}>
                        <View style={[styles.card]}>
                            <UserProfile />
                        </View>
                        <View style={[styles.card]}>
                            <Question />
                        </View>
                    </ScrollView>
                </View>
            </View>
            {isLoading && <Loading />}
        </SafeAreaView>
    );
};

const TabIcon = ({ active, index }) => (
    <>
        {console.log('active', active)}
        {index == 0 ? (
            <MaterialCommunityIcons
                size={scale(24)}
                name="account-outline"
                style={{ marginRight: 8 }}
                color={active == 0 ? COLORS.white : COLORS.Color267}
            />
        ) : (
            <FontAwesome
                size={scale(24)}
                name="question"
                style={{ marginRight: 8 }}
                color={active == 1 ? COLORS.white : COLORS.Color267}
            />
        )}
    </>
);

function ButtonContainer({ buttons, onClick, scrollX, active }) {
    const [btnContainerWidth, setWidth] = useState(0);
    const btnWidth = btnContainerWidth / buttons.length;

    const translateX = scrollX.interpolate({
        inputRange: [0, width],
        outputRange: [0, btnWidth],
    });

    const translateXOpposit = scrollX.interpolate({
        inputRange: [0, width],
        outputRange: [0, -btnWidth],
    });

    return (
        <View
            style={styles.btnContainer}
            onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
            {buttons.map((btn, i) => (
                <TouchableOpacity
                    key={btn}
                    style={styles.btn}
                    onPress={() => onClick(i)}>
                    <TabIcon index={i} active={active} />
                    <Text style={styles.btnTextDeActive}>{btn}</Text>
                </TouchableOpacity>
            ))}
            <Animated.View
                style={[
                    styles.animatedBtnContainer,
                    { width: btnWidth, transform: [{ translateX }] },
                ]}>
                {buttons.map((btn, i) => (
                    <Animated.View
                        key={btn}
                        style={[
                            styles.animatedBtn,
                            {
                                width: btnWidth,
                                transform: [{ translateX: translateXOpposit }],
                            },
                        ]}>
                        <LinearGradient
                            colors={[
                                COLORS.Color424,
                                COLORS.Color425,
                                COLORS.Color426,
                                COLORS.Color427,
                                COLORS.Color428,
                            ]}
                            start={{
                                x: -0.15500132739543915,
                                y: 0.6157848834991455,
                            }}
                            end={{
                                x: 1.014054298400879,
                                y: 0.17686034739017487,
                            }}
                            style={{
                                height: '100%',
                                borderRadius: 24,
                                flexDirection: 'row',
                                width: btnWidth - 24,
                                alignItems: 'center',
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                            }}>
                            <TabIcon index={i} active={active} />
                            <Text style={styles.btnTextActive}>{btn}</Text>
                        </LinearGradient>
                    </Animated.View>
                ))}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.Color596,
    },
    container: {
        flex: 1,
        paddingVertical: 5,
    },
    btnContainer: {
        height: 70,
        width: '85%',
        borderRadius: 35,
        overflow: 'hidden',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(20),
        backgroundColor: COLORS.backMainIcon,
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animatedBtnContainer: {
        height: 40,
        flexDirection: 'row',
        position: 'absolute',
        overflow: 'hidden',
    },
    animatedBtn: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTextDeActive: {
        fontFamily: 'Muli',
        fontSize: scale(17),
    },
    btnTextActive: {
        color: '#fff',
        fontFamily: 'Muli',
        fontSize: scale(17),
    },
    card: {
        width: width,
        height: '100%',
    },
});

export default ProfileScreen;
