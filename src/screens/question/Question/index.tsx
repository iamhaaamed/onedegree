import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    SectionTop01,
    SectionItemQuestion,
    ProfileTab,
    Question2,
    Question1,
    Question3,
} from 'components/Sections';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText } from 'components/common';

const Question = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const DATA = [
            {
                title: 'What Industries Are You Interested In?',
                answer: 'Aviation',
                code: 1,
            },
            {
                title: 'How Much Do You Want To Make?',
                answer: 'Hourly ',
                code: 2,
            },
            {
                title: 'Where Do You Currently Live',
                answer: 'Enter Zipcode',
                code: 3,
            },
            // {
            //     title: 'Where Do You Want To Work',
            //     answer: 'Where I Currently Live',
            //     code: 8,
            // },
            {
                title: 'How Far Are You Willing To Travel To Get Certified?',
                answer: 'Over An Hour',
                code: 4,
            },
            {
                title: 'Where Did You Hear About Onedegree Careers?',
                answer: 'Direct Referral (Family/Friends)',
                code: 5,
            },
        ];
        return (
            <View style={styles.Question1674}>
                <ScrollView>
                    <SectionTop01 title="Questions" rightView />
                    <View style={COMMON.SectionPaddingSave15}>
                        <ProfileTab style={{ marginBottom: 15 }} />
                        <FlatList
                            data={DATA}
                            renderItem={({ item, index }) => (
                                <SectionItemQuestion
                                    title={item.title}
                                    answer={item.answer}
                                    code={item?.code}
                                />
                            )}
                        />
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
    Question1674: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
});
export default Question;
