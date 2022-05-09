import React from 'react';
import { useRef, useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod } from 'components/common/MDateTimePicker';
import ActionSheet from 'react-native-actions-sheet';
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
import {
    SectionTop01,
    SectionModalRemoveSave,
    Container,
} from 'components/Sections';
import { useGetCareers } from 'hooks/save';
import { navigate } from 'navigation/methods';
const Save = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [CareerId, setCareerId] = useState();
        const {
            isLoading,
            data: careers,
            fetchNextPage,
            hasNextPage,
            isRefetching,
            refetch,
        } = useGetCareers({ where: { isLiked: { eq: true } } });

        const refActionSheet = useRef(null);
        const showActionSheet = (item) => {
            if (refActionSheet.current) {
                refActionSheet.current?.setModalVisible();
            }
        };
        {
            console.log('e!!!!', hasNextPage);
        }
        const renderFooter = () => {
            return hasNextPage ? (
                <ActivityIndicator size={scale(50)} color={COLORS.Color323} />
            ) : null;
        };
        return (
            <Container style={styles.Save1}>
                <MLoading
                    isLoading={isLoading}
                    size="large"
                    color={COLORS.Color323}
                    style={{ top: '50%' }}
                />
                <ScrollView>
                    <SectionTop01
                        style={COMMON.EleSave14}
                        title="Saved Careers"
                    />
                    <View style={COMMON.SectionPaddingSave15}>
                        <MInput
                            containerStyle={COMMON.Input6}
                            placeholder=" Search"
                            textStyle={COMMON.TextsInput7}
                            backgroundColor={COLORS.white}
                            height={verticalScale(51)}
                            iconLeft={{
                                name: 'magnify',
                                color: COLORS.Color565,
                                size: scale(25),
                                Component: MaterialCommunityIcons,
                            }}
                        />
                        <FlatList
                            numColumns={2}
                            data={careers?.pages}
                            style={{ width: '100%' }}
                            refreshing={isRefetching}
                            onRefresh={refetch}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        navigate('MoreInfo', {
                                            data: item,
                                            Like: true,
                                        })
                                    }
                                    style={{
                                        width: '48%',
                                        marginVertical: scale(20),
                                        marginHorizontal: 5,
                                    }}>
                                    <MImageBackground
                                        imageSource={{
                                            uri: item?.career?.imageAddress,
                                        }}
                                        style={COMMON.image10}
                                        // customWidth={scale(154)}
                                        // customHeight={scale(150)}
                                    >
                                        <View
                                            style={{
                                                width: '95%',
                                                alignSelf: 'center',
                                                top: '80%',
                                            }}>
                                            <MText
                                                textStyle={COMMON.TxtSave112}
                                                numberOfLines={1}>
                                                {item?.career?.title}
                                            </MText>
                                        </View>
                                        <View
                                            style={{
                                                width: '25%',
                                                alignSelf: 'flex-end',
                                                top: '70%',
                                            }}>
                                            <MButton
                                                onPress={() => {
                                                    setCareerId(
                                                        item?.career?.id,
                                                    );
                                                    showActionSheet();
                                                }}
                                                style={COMMON.ButtonRect14}
                                                containerStyle={COMMON.Button13}
                                                color={COLORS.Color647}
                                                iconRight={{
                                                    name: 'heart',
                                                    color: COLORS.Color537,
                                                    Component: MaterialCommunityIcons,
                                                }}
                                            />
                                        </View>
                                    </MImageBackground>
                                </TouchableOpacity>
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
                    </View>
                    <ActionSheet
                        ref={refActionSheet}
                        containerStyle={styles.action}>
                        <SectionModalRemoveSave
                            CareerId={CareerId}
                            showModal={() =>
                                refActionSheet.current?.setModalVisible()
                            }
                        />
                    </ActionSheet>
                </ScrollView>
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
    Save1: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        height: scale(200),
    },
});
export default Save;
