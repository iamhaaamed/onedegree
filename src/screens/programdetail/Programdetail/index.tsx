import React from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { scale, verticalScale } from 'utils';
import { createScreen } from 'components/elements';
import { MButton, MImage, MText } from 'components/common';
import { useGetOneProgram, useGetPrograms } from 'hooks/programs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Container,
    SectionItem,
    SectionText,
    SectionTop01,
} from 'components/Sections';
import {
    View,
    Linking,
    FlatList,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

const ProgramDetails = createScreen(
    ({ route }) => {
        const { COMMON } = useTheme();
        const { isLoading, data: program } = useGetOneProgram(
            route?.params?.programId,
        );
        const programDetails = program?.program_getProgram?.result;
        const {
            isLoading: isLoadingPrograms,
            data: programs,
            fetchNextPage,
            hasNextPage,
            isRefetching,
            refetch,
        } = useGetPrograms({
            // where: {
            //     typeOfTrainingProgram: {
            //         eq: programDetails?.typeOfTrainingProgram,
            //     },
            // },
            // options: {
            //     enabled: !!programDetails,
            // },
        });

        const renderFooter = () => {
            return hasNextPage ? (
                <ActivityIndicator size={scale(50)} color={COLORS.Color323} />
            ) : null;
        };

        return (
            <Container style={styles.Programdetail2881}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SectionTop01 title={'Training Programs'} programDetails />
                    <View style={COMMON.SectionPaddingSave15}>
                        <MImage
                            imageSource={{ uri: programDetails?.imageAddrss }}
                            style={COMMON.imagedetail}
                        />
                        <MButton
                            onPress={() => {
                                Linking.openURL(programDetails?.link);
                            }}
                            containerStyle={styles.link}
                            style={[COMMON.shareBtn]}
                            icon={{
                                name: 'share-outline',
                                Component: MaterialCommunityIcons,
                                size: scale(25),
                                color: COLORS.white,
                            }}
                        />
                        <SectionText data={programDetails} />
                        <FlatList
                            data={programs?.pages}
                            style={{
                                marginTop: verticalScale(24),
                            }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                item?.id == programDetails?.id ? null : (
                                    <SectionItem data={item} />
                                )
                            }
                            keyExtractor={(item, index) =>
                                item?.id
                                    ? item?.id?.toString()
                                    : index.toString()
                            }
                            ListHeaderComponent={
                                <MText
                                    textStyle={COMMON.TxtProgramdetail288114}>
                                    Other Training Programs{' '}
                                </MText>
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
    Programdetail2881: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
    link: {
        backgroundColor: COLORS.blue,
        width: scale(45),
        height: scale(45),
        borderRadius: 10,
        marginTop: -45,
        right: scale(10),
        padding: 5,
        alignSelf: 'flex-end',
    },
});
export default ProgramDetails;
