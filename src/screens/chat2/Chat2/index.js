import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
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
import { SectionProgram } from 'components/Sections';
import { useGetMessages } from 'hooks/messages';
const Chat2 = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const {
            isLoading,
            data: notificationsData,
            fetchNextPage,
            hasNextPage,
            isRefetching,
            refetch,
        } = useGetMessages({
            // where: {
            //     isReaded: { eq: false },
            // },
            order: [{ latestMessageDate: 'DESC' }],
        });

        const renderFooter = () => {
            return hasNextPage ? (
                <ActivityIndicator size={scale(50)} color={COLORS.Color323} />
            ) : null;
        };
        return (
            <Container style={styles.Chat2}>
                <MLoading
                    size="large"
                    isLoading={isLoading}
                    style={{ top: '50%' }}
                    color={COLORS.Color323}
                />
                <SectionTop01
                    style={COMMON.EleNotification122}
                    title={'Chat'}
                />
                <View style={COMMON.SectionPaddingNotification123}>
                    {notificationsData?.pages.length > 0 ? (
                        <FlatList
                            onRefresh={refetch}
                            data={notificationsData?.pages}
                            refreshing={isRefetching}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <SectionProgram data={item} />
                            )}
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
                        <SectionProgram />
                        // <MText textStyle={styles.emptyTxt}>
                        //     You did not receive message!
                        // </MText>
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
    Chat2: {
        backgroundColor: COLORS.Color197,
        flex: 1,
    },
    emptyTxt: {
        fontSize: verticalScale(15),
        fontFamily: 'Muli',
        lineHeight: verticalScale(24),
        color: COLORS.Color786,
        alignSelf: 'center',
        top: '50%',
    },
});
export default Chat2;
