import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView, Linking } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SectionTop01, SectionText, SectionItem } from 'components/Sections';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText, MImage } from 'components/common';
import { useGetOneProgram } from 'hooks/programs';
const ProgramDetails = createScreen(
    ({ route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        console.log('route', route?.params?.programId);
        const { isLoading, data: program } = useGetOneProgram(
            route?.params?.programId,
        );
        const programDetails = program?.program_getProgram?.result;
        console.log('pppppppppppp', programDetails?.link);

        return (
            <View style={styles.Programdetail2881}>
                <ScrollView>
                    <SectionTop01 title={'Training Programs'} />
                    <View style={COMMON.SectionPaddingSave15}>
                        <MImage
                            imageSource={{ uri: programDetails?.imageAddrss }}
                            style={COMMON.imagedetail}
                        />
                        <MButton
                            onPress={() => {
                                console.log('0000000000000');

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
                        {programDetails?.career && (
                            <>
                                <MText
                                    textStyle={COMMON.TxtProgramdetail288114}>
                                    Other Training Programs{' '}
                                </MText>

                                <SectionItem />
                            </>
                        )}
                    </View>
                </ScrollView>
            </View>
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
