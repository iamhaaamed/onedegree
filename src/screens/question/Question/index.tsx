import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    SectionTop01,
    SectionItemQuestion,
    ProfileTab,
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
                page: '',
            },
            {
                title: 'How Much Do You Want To Make?',
                answer: 'Hourly ',
                page: '',
            },
            {
                title: 'Where Do You Currently Live',
                answer: 'Enter Zipcode',
                page: '',
            },
            {
                title: 'Where Do You Want To Work',
                answer: 'Where I Currently Live',
                page: '',
            },
            {
                title: 'How Far Are You Willing To Travel To Get Certified?',
                answer: 'Over An Hour',
                page: 'ProfileQuestion5',
            },
            {
                title: 'Where Did You Hear About Onedegree Careers?',
                answer: 'Direct Referral (Family/Friends)',
                page: '',
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
                                    page={item?.page}
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
