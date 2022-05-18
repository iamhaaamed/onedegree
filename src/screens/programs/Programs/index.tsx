import useTheme from 'hooks/useTheme';
import React, { useRef, useState } from 'react';
import { COLORS } from 'constants/common';
import { scale, verticalScale } from 'utils';
import { useGetPrograms } from 'hooks/programs';
import { createScreen } from 'components/elements';
import { MButton, MInput, MLoading } from 'components/common';
import ActionSheet from 'react-native-actions-sheet';
import { useDebounce } from 'hooks/useDebounce';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Container,
    ProgramFilter,
    SectionItem,
    SectionTop01,
} from 'components/Sections';

const Programs = createScreen(
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
            data: programs,
            fetchNextPage,
            hasNextPage,
            isRefetching,
            refetch,
        } = useGetPrograms({
            where: { isActive: { eq: true } },
            ...(debouncedSearchTerm.length && {
                where: {
                    title: { contains: debouncedSearchTerm },
                },
            }),
        });
        let Programs = programs?.pages;

        const renderFooter = () => {
            return hasNextPage ? (
                <ActivityIndicator size={scale(50)} color={COLORS.Color323} />
            ) : null;
        };

        return (
            <Container style={styles.Programs276}>
                <MLoading
                    size="large"
                    isLoading={isLoading}
                    style={{ top: '50%' }}
                    color={COLORS.Color323}
                />
                <SectionTop01 title="Training Programs" noIcon />
                <View
                    style={[
                        COMMON.SectionPaddingSave15,
                        { marginTop: scale(10) },
                    ]}>
                    <View style={[COMMON.RowItem]}>
                        <View style={{ width: '80%' }}>
                            <MInput
                                onChangeText={(text) => setSearchTerm(text)}
                                // style={COMMON.InputRect23}
                                containerStyle={COMMON.Input21}
                                placeholder=" Search"
                                textStyle={COMMON.TextsInput22}
                                backgroundColor={COLORS.white}
                                height={verticalScale(51)}
                                iconLeft={{
                                    name: 'magnify',
                                    color: COLORS.Color565,
                                    size: scale(25),
                                    Component: MaterialCommunityIcons,
                                }}
                            />
                        </View>
                        <View style={{ width: '20%' }}>
                            <MButton
                                onPress={() => {
                                    showActionSheet();
                                }}
                                style={[COMMON.filterBtn]}
                                color={COLORS.white}
                                iconRight={{
                                    name: 'filter',
                                    color: COLORS.Color424,
                                    size: scale(25),
                                    Component: MaterialCommunityIcons,
                                }}
                            />
                        </View>
                    </View>
                    <FlatList
                        data={Programs}
                        style={{
                            maxHeight: verticalScale(630),
                        }}
                        showsVerticalScrollIndicator={false}
                        refreshing={isRefetching}
                        onRefresh={refetch}
                        renderItem={({ item }) =>
                            item ? <SectionItem data={item} /> : null
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
                    <ProgramFilter
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
    Programs276: {
        backgroundColor: COLORS.Color197,
        flex: 1,
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
    },
});
export default Programs;
