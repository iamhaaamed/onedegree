import React, { useEffect, useLayoutEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from 'react-native';
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
import { Container, SectionTop01 } from 'components/Sections';
import { SectionEvent } from 'components/Sections';
import { useGetNotifications, useReadNotification } from 'hooks/notification';

const Notification1 = createScreen(
    ({ navigation }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const { mutate } = useReadNotification();
        const {
            isLoading,
            data: notificationsData,
            fetchNextPage,
            hasNextPage,
            isRefetching,
            refetch,
        } = useGetNotifications({
            where: {
                isReaded: { eq: false },
            },
            order: [{ createdAt: 'DESC' }],
        });
        const renderFooter = () => {
            return hasNextPage ? (
                <ActivityIndicator size={scale(50)} color={COLORS.Color323} />
            ) : null;
        };
        useEffect(() => {
            mutate(
                {},
                {
                    onSuccess: (data) => {},
                },
            );
        }, []);
        return (
            <Container style={styles.Search}>
                <SectionTop01
                    style={COMMON.EleSearch4}
                    title={'Notification'}
                />
                <MLoading
                    size="large"
                    isLoading={isLoading}
                    style={{ top: '50%' }}
                    color={COLORS.Color323}
                />
                <View style={COMMON.SectionPaddingSearch5}>
                    {notificationsData?.pages?.length > 0 ? (
                        <FlatList
                            onRefresh={refetch}
                            data={notificationsData?.pages}
                            refreshing={isRefetching}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                item ? <SectionEvent data={item} /> : null
                            }
                            keyExtractor={(item, index) =>
                                item?.id
                                    ? item?.id?.toString()
                                    : index.toString()
                            }
                            ListFooterComponent={renderFooter}
                            ListFooterComponentStyle={{
                                height: verticalScale(50),
                            }}
                            onEndReachedThreshold={0.9}
                            onEndReached={() => {
                                if (hasNextPage) {
                                    fetchNextPage();
                                }
                            }}
                        />
                    ) : (
                        <MText textStyle={styles.emptyTxt}>
                            You did not receive message
                        </MText>
                    )}
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
    Notification1: {
        backgroundColor: COLORS.Color197,
        flex: 1,
    },
    emptyTxt: {
        fontSize: verticalScale(15),
        fontFamily: 'Muli',
        lineHeight: verticalScale(24),
        color: COLORS.Color786,
        alignSelf: 'center',
        top: '60%',
    },
});
export default Notification1;
