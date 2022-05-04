import React from 'react';
import { useRef } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SectionTop01, SectionItem, Container } from 'components/Sections';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { verticalScale, scale, height } from 'utils';
import {
    MStatusBar,
    MInput,
    MButton,
    MImage,
    MFlatList,
} from 'components/common';
import { useGetPrograms } from 'hooks/programs';
const Programs = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };
        const {
            isLoading,
            data: programs,
            fetchNextPage,
            hasNextPage,
            isRefetching,
            refetch,
        } = useGetPrograms({});
        console.log('.......', programs);
        let Programs = programs?.pages;
        const renderFooter = () => {
            return (
                <ActivityIndicator size={scale(50)} color={COLORS.Color323} />
            );
        };
        return (
            <Container style={styles.Programs276}>
                <SectionTop01 title="Training Programs" />
                <View
                    style={[
                        COMMON.SectionPaddingSave15,
                        { marginTop: scale(10) },
                    ]}>
                    <View style={[COMMON.RowItem]}>
                        <View style={{ width: '80%' }}>
                            <MInput
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
                                onPress={onPress}
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
                        // refreshing={isRefetching}
                        // onRefresh={refetch}
                        renderItem={({ item }) => <SectionItem data={item} />}
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
});
export default Programs;
