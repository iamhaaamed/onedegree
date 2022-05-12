import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { useGetCareers } from 'hooks/careers';
import { scale, verticalScale } from 'utils';
import { useDebounce } from 'hooks/useDebounce';
import React, { useRef, useState } from 'react';
import { createScreen } from 'components/elements';
import ActionSheet from 'react-native-actions-sheet';
import { Container, SearchFilter, SectionTop01 } from 'components/Sections';
import { MButton, MImage, MInput, MLoading, MText } from 'components/common';
import {
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { navigate } from 'navigation/methods';

const Search = createScreen(
    () => {
        const { COMMON } = useTheme();

        const refActionSheet = useRef(null);

        const showActionSheet = () => {
            if (refActionSheet.current) {
                refActionSheet.current?.setModalVisible();
            }
        };

        // ? search term state
        const [searchTerm, setSearchTerm] = useState('');

        // ? debouncing search term with delay
        const debouncedSearchTerm = useDebounce(searchTerm, 500);

        const {
            isLoading,
            data: careers,
            fetchNextPage,
            hasNextPage,
            isRefetching,
            refetch,
        } = useGetCareers({
            ...(debouncedSearchTerm.length && {
                where: {
                    career: {
                        title: { contains: debouncedSearchTerm },
                    },
                },
            }),
        });

        const renderFooter = () => {
            return hasNextPage ? (
                <ActivityIndicator size={scale(50)} color={COLORS.Color323} />
            ) : null;
        };

        return (
            <Container style={styles.Search}>
                <SectionTop01
                    style={COMMON.EleSearch4}
                    title={'Search'}
                    noIcon
                />
                <MLoading
                    size="large"
                    isLoading={isLoading}
                    style={{ top: '50%' }}
                    color={COLORS.Color323}
                />
                <View style={COMMON.SectionPaddingSearch5}>
                    <View style={[COMMON.RowItem, COMMON.RowItemSearch6]}>
                        <View style={{ width: '85%' }}>
                            <MInput
                                onChangeText={(text) => setSearchTerm(text)}
                                containerStyle={COMMON.InputRect9}
                                placeholder="Search"
                                textStyle={COMMON.TextsInput8}
                                backgroundColor={COLORS.white}
                                height={verticalScale(51)}
                                iconLeft={{
                                    name: 'magnify',
                                    size: scale(23),
                                    color: COLORS.Color321,
                                    Component: MaterialCommunityIcons,
                                }}
                            />
                        </View>
                        <View style={{ width: '20%' }}>
                            <MButton
                                onPress={() => showActionSheet()}
                                style={COMMON.ButtonRect11}
                                containerStyle={COMMON.Button10}
                                color={COLORS.white}
                                iconRight={{
                                    name: 'filter',
                                    color: COLORS.Color424,
                                    Component: MaterialCommunityIcons,
                                }}
                            />
                        </View>
                    </View>
                    <FlatList
                        onRefresh={refetch}
                        data={careers?.pages}
                        refreshing={isRefetching}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={COMMON.SectionPaddingSearch12}
                                activeOpacity={1}
                                onPress={() =>
                                    navigate('MoreInfo', {
                                        data: item,
                                        Like: item?.isLiked,
                                    })
                                }>
                                <View
                                    style={[
                                        COMMON.RowItem,
                                        COMMON.SectionEvent,
                                    ]}>
                                    <View style={{ width: '20%' }}>
                                        <MImage
                                            style={COMMON.image14}
                                            imageSource={{
                                                uri: item?.career?.imageAddress,
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            width: '58%',
                                            marginLeft: scale(10),
                                        }}>
                                        <MText
                                            numberOfLines={1}
                                            textStyle={COMMON.TxtSearch15}>
                                            {item?.career?.title}
                                        </MText>
                                        <MText textStyle={COMMON.TxtSearch16}>
                                            Possible Yearly Income{' '}
                                        </MText>
                                    </View>
                                    <View
                                        style={{
                                            alignItems: 'flex-end',
                                            marginRight: scale(11),
                                        }}>
                                        <MButton
                                            onPress={() => {}}
                                            color={COLORS.white}
                                            iconLeft={{
                                                size: scale(25),
                                                name: item?.isLiked
                                                    ? 'heart'
                                                    : 'heart-outline',
                                                color: COLORS.Color508,
                                                Component: MaterialCommunityIcons,
                                            }}
                                        />
                                        <MText textStyle={COMMON.TxtSearch17}>
                                            $
                                            {item?.career?.possibleYearlyIncome}
                                        </MText>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) =>
                            item?.id ? item?.id?.toString() : index.toString()
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
                    // gestureEnabled
                    // indicatorStyle={{
                    //     width: '30%',
                    //     marginTop: 16,
                    //     borderRadius: 5,
                    //     backgroundColor: COLORS.Color321,
                    // }}
                    ref={refActionSheet}
                    containerStyle={styles.action}>
                    <SearchFilter
                        showModal={() =>
                            refActionSheet.current?.setModalVisible()
                        }
                    />
                </ActionSheet>
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
    Search: {
        flex: 1,
        backgroundColor: COLORS.Color780,
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        maxHeight: scale(600),
    },
});
export default Search;
