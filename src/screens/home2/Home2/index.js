import { scale } from 'utils';
import useTheme from 'hooks/useTheme';
import { useLogin } from 'hooks/auth';
import { COLORS } from 'constants/common';
import { authStore } from '../../../store';
import { useGetCareers } from 'hooks/careers';
import Carousel from 'react-native-snap-carousel';
import React, { useEffect, useState } from 'react';
import { createScreen } from 'components/elements';
import { MLoading, MText } from 'components/common';
import { showMessage } from 'react-native-flash-message';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Sectionhome, SectionTophome } from 'components/Sections';

const Home2 = createScreen(
    () => {
        const { COMMON } = useTheme();
        const [
            onEndReachedCalledDuringMomentum,
            setonEndReachedCalledDuringMomentum,
        ] = useState(true);
        const [user, setUser] = useState();
        const [isLoading2, setIsLoading2] = useState(false);
        const { mutate } = useLogin();
        const { UserName, token } = authStore((state) => state);

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
            error,
        } = useGetCareers({});

        let Careers = careers?.pages;

        const renderItem = ({ item }) => {
            return item ? <Sectionhome data={item} /> : null;
        };

        return (
            <SafeAreaView style={styles.Home2}>
                <MLoading
                    isLoading={isLoading || isLoading2}
                    size="large"
                    color={COLORS.Color323}
                    style={{ top: '50%' }}
                />
                <SectionTophome style={COMMON.EleHome265} />
                <View style={COMMON.SectionPaddingHome266}>
                    <MText textStyle={COMMON.TxtHome267}>
                        Hello,{UserName ? UserName : user?.email} !
                    </MText>
                    <Carousel
                        // ref={(c) => {
                        //     this.carousel = c;
                        // }}
                        enableSnap={true}
                        enableMomentum={true}
                        data={Careers}
                        // refreshing={isRefetching}
                        // onRefresh={refetch}
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
                        layoutCardOffset={18}
                        // scrollInterpolator={
                        //     scrollInterpolators[`scrollInterpolator${1}`]
                        // }
                        // slideInterpolatedStyle={
                        //     animatedStyles[`animatedStyles${1}`]
                        // }
                        useScrollView={true}
                        vertical={true}
                        // onEndReachedThreshold={0.9}
                        // onEndReached={() => {
                        //     if (hasNextPage) {
                        //         fetchNextPage();
                        //     }
                        // }}
                        // activeAnimationOptions={{
                        //     friction: 4,
                        //     tension: 40,
                        // }}
                        // keyExtractor={(item, index) => index.toString()}
                        onMomentumScrollBegin={() => {
                            setonEndReachedCalledDuringMomentum(false);
                        }}
                    />
                </View>
            </SafeAreaView>
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
        flex: 1,
    },
    carouselContainer: {
        alignSelf: 'center',
        width: scale(370),
    },
});
export default Home2;
