import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SectionTop01, SectionText, SectionItem } from 'components/Sections';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText, MImage } from 'components/common';

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

        return (
            <View style={styles.Programdetail2881}>
                <ScrollView>
                    <SectionTop01 title={'Training Programs'} />
                    <View style={COMMON.SectionPaddingSave15}>
                        <MImage
                            imageSource={IMAGES.image7104}
                            style={COMMON.imagedetail}
                        />
                        <MButton
                            // onPress={onPress}
                            style={[COMMON.shareBtn]}
                            icon={{
                                name: 'share-outline',
                                Component: MaterialCommunityIcons,
                                size: scale(25),
                                color: COLORS.white,
                            }}
                        />
                        <SectionText mb={verticalScale(32)} />
                        <MText textStyle={COMMON.TxtProgramdetail288114}>
                            other training programs{' '}
                        </MText>

                        <SectionItem />
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
});
export default ProgramDetails;
