import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { scale, verticalScale } from 'utils';
import { navigate } from 'navigation/methods';
import { useGetCareers } from 'hooks/careers';
import { useDebounce } from 'hooks/useDebounce';
import React, { useRef, useState } from 'react';
import { createScreen } from 'components/elements';
import ActionSheet from 'react-native-actions-sheet';
import {
    Container,
    SearchFilter,
    SectionTop01,
    SectionSearch,
} from 'components/Sections';
import { MButton, MImage, MInput, MLoading, MText } from 'components/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import {
    useLikeCareer,
    useUnlikeCareer,
    useGetLikeCareers,
} from 'hooks/careers';

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
        const { mutate: LikeMutate } = useLikeCareer();
        const { mutate: UnLikeMutate } = useUnlikeCareer();

        const {
            isLoading,
            data: careers,
            fetchNextPage,
            hasNextPage,
            isRefetching,
            refetch,
        } = useGetCareers({
            where: { career: { isActive: { eq: true } } },
            ...(debouncedSearchTerm.length && {
                where: {
                    career: {
                        title: { contains: debouncedSearchTerm },
                        isActive: { eq: true },
                    },
                },
            }),
        });

        const renderFooter = () => {
            return hasNextPage ? (
                <ActivityIndicator size={scale(50)} color={COLORS.Color323} />
            ) : null;
        };
        const renderItem = ({ item }) => {
            return item ? <SectionSearch data={item} /> : null;
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
                <View
                    style={[
                        COMMON.SectionPaddingSearch5,
                        { marginTop: '-5%' },
                    ]}>
                    <View style={[COMMON.RowItem, COMMON.RowItemSearch6]}>
                        <View style={{ width: '83%' }}>
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
                                style={COMMON.filterBtn}
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
                        contentContainerStyle={{ paddingBottom: 85 }}
                        renderItem={({ item, index }) =>
                            renderItem({ item, index })
                        }
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
