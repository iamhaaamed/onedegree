import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    SectionTop01,
    SectionText1,
    SectionText2,
    SectionHolder,
    SectionText3,
} from 'components/Sections';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';

const Settings6187 = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        return (
            <View style={styles.Settings6187}>
                <ScrollView>
                    <SectionTop01 title="Settings" />
                    <View style={COMMON.SectionPaddingHome266}>
                        <SectionText1 mb={verticalScale(15)} />
                        <SectionText2 mb={verticalScale(17.9998779296875)} />
                        <SectionHolder mb={verticalScale(15.2816162109375)} />
                        <SectionText3 />
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
    Settings6187: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
});
export default Settings6187;
