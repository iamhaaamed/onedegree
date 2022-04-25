import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    SectionTop01,
    // SectionText,
    SectionItem,
} from 'components/Sections';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MInput, MButton, MImage } from 'components/common';

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

        return (
            <View style={styles.Programs276}>
                <ScrollView>
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
    Programs276: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
});
export default Programs;
