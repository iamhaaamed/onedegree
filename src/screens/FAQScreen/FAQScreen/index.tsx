import React from 'react';
import { useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SectionTop01, Container } from 'components/Sections';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText, MDropDown } from 'components/common';
const data = [{}, {}, {}, {}];
const FAQ = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const [selectedItem, setSelectedItem] = useState();
        const handleArrowDirection = (i) => {
            // setArrowDirection(!arrowDirection);
            setSelectedItem(i);
        };
        return (
            <Container style={styles.Settings2604}>
                <ScrollView>
                    <SectionTop01 title="Faqs" style={{ marginBottom: 10 }} />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{ marginBottom: 5 }}
                        data={data}
                        renderItem={({ item, index }) => (
                            <View style={COMMON.DropDown3}>
                                <MButton
                                    onPress={() => handleArrowDirection(index)}
                                    style={COMMON.DropDownRect4}
                                    // containerStyle={COMMON.DropDownRect4}
                                    text="What is Lorem ipsum dolor?"
                                    textStyle={COMMON.TextsDropDown5}
                                    iconRight={{
                                        name:
                                            selectedItem == index
                                                ? 'chevron-up'
                                                : 'chevron-down',
                                        color: COLORS.Color718,
                                        size: scale(23),
                                        Component: MaterialCommunityIcons,
                                    }}
                                />
                                {selectedItem == index && (
                                    <View style={styles.hideView}>
                                        <View style={styles.separatorLine} />
                                        <MText textStyle={COMMON.hideText}>
                                            Lorem Ipsum Dolor Sit Amet,
                                            Consetetur Sadipscing Elitr, Diam
                                            Nonumy Eirmod
                                        </MText>
                                    </View>
                                )}
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReachedThreshold={0.9}
                    />
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
    Settings2604: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
    separatorLine: {
        height: '1%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: COLORS.Color321,
    },
});
export default FAQ;
