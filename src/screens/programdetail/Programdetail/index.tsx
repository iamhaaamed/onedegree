import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from '@panorama/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    SectionTop01,
    SectionText,
    SectionItem,
} from '../../../components/sections';
import { createScreen } from '@panorama/elements';
import { COLORS } from '@panorama/theme';
import { verticalScale, scale } from '@panorama/utils';
import {
    MView,
    MStatusBar,
    MButton,
    MText,
    MImage,
} from '@panorama/components';
import { SxProps } from '@panorama/types';

const Programdetail = createScreen(
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

        return (
            <MView style={styles.Programdetail2881}>
                <ScrollView>
                    <SectionTop01 mb={verticalScale(32)} />
                    <MView
                        pt={verticalScale(0)}
                        pb={verticalScale(0)}
                        pl={scale(32)}
                        pr={scale(32)}>
                        <MImage
                            imageSource={IMAGES.image6152}
                            style={COMMON.image3}
                        />

                        <SectionText mb={verticalScale(32)} />
                        <MText
                            mb={verticalScale(16)}
                            textStyle={COMMON.TxtProgramdetail288114}>
                            other training programs{' '}
                        </MText>
                        <MImage
                            imageSource={IMAGES.image8521}
                            style={COMMON.image15}
                        />

                        <SectionItem />
                    </MView>
                </ScrollView>
            </MView>
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
export default Programdetail;
