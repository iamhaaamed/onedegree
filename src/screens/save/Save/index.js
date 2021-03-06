import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { useGetCareers } from 'hooks/save';
import { scale, verticalScale } from 'utils';
import { navigate } from 'navigation/methods';
import { useDebounce } from 'hooks/useDebounce';
import React, { useRef, useState } from 'react';
import { createScreen } from 'components/elements';
import ActionSheet from 'react-native-actions-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    MText,
    MInput,
    MButton,
    MLoading,
    MImageBackground,
} from 'components/common';
import {
    Container,
    SectionTop01,
    SectionModalRemoveSave,
} from 'components/Sections';
import {
    View,
    FlatList,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

const Save = createScreen(
    () => {
        const { COMMON } = useTheme();
        const [CareerId, setCareerId] = useState();

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
            where: {
                isLiked: { eq: true },
                ...(debouncedSearchTerm.length && {
                    career: {
                        title: { contains: debouncedSearchTerm },
                    },
                }),
            },
        });
        console.log('career', careers?.pages?.length);
        const refActionSheet = useRef(null);

        const showActionSheet = (item) => {
            if (refActionSheet.current) {
                refActionSheet.current?.setModalVisible();
            }
        };

        const renderFooter = () => {
            return hasNextPage ? (
                <ActivityIndicator size={scale(50)} color={COLORS.Color323} />
            ) : null;
        };

        return (
            <Container style={styles.Save1}>
                <MLoading
                    size="large"
                    isLoading={isLoading}
                    style={{ top: '50%' }}
                    color={COLORS.Color323}
                />

                <SectionTop01
                    style={COMMON.EleSave14}
                    title="Saved Careers"
                    noIcon
                />
                <View style={styles.view}>
                    <View
                        style={[
                            COMMON.SectionPaddingSave15,
                            { marginTop: '-4%' },
                        ]}>
                        <MInput
                            placeholder=" Search"
                            height={verticalScale(51)}
                            textStyle={COMMON.TextsInput7}
                            containerStyle={COMMON.Input6}
                            backgroundColor={COLORS.white}
                            onChangeText={(text) => setSearchTerm(text)}
                            iconLeft={{
                                name: 'magnify',
                                color: COLORS.Color565,
                                size: scale(25),
                                Component: MaterialCommunityIcons,
                            }}
                        />
                        <FlatList
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            data={careers?.pages}
                            style={{
                                width: '100%',
                                alignSelf: 'center',
                            }}
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
                                        width: '47%',
                                        marginVertical: scale(20),

                                        marginHorizontal: 5,
                                    }}>
                                    <MImageBackground
                                        imageSource={{
                                            uri: item?.career?.imageAddress,
                                        }}
                                        style={COMMON.image10}>
                                        <View
                                            style={{
                                                left: 10,
                                                top: '80%',
                                                width: '70%',
                                                alignSelf: 'flex-start',
                                            }}>
                                            <MText
                                                textStyle={COMMON.TxtSave112}
                                                numberOfLines={1}>
                                                {item?.career?.title}
                                            </MText>
                                        </View>
                                        <View
                                            style={{
                                                top: '75%',
                                                alignSelf: 'flex-end',
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
        flex: 1,
    },
    view: {
        height: scale(600),
    },
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        height: scale(200),
    },
});
export default Save;
