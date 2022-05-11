import React, { useEffect } from 'react';
import { useState } from 'react';
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
    Container,
} from 'components/Sections';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { verticalScale, scale, toPascalCase } from 'utils';
import { MStatusBar, MButton, MText, MLoading } from 'components/common';
import { useGetProfile } from 'hooks/profile';
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
        const [DATA, setDATA] = useState([]);
        const { isLoading, data } = useGetProfile();
        useEffect(() => {
            setDATA([
                {
                    title: 'What Industries Are You Interested In?',
                    answer: data?.user_login?.result?.industry,
                    code: 1,
                },
                {
                    title: 'How Much Do You Want To Make?',
                    answer: toPascalCase(data?.user_login?.result?.amountType),
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
                    title:
                        'How Far Are You Willing To Travel To Get Certified?',
                    answer: toPascalCase(
                        data?.user_login?.result
                            ?.howFarAreYouWillingToTravelToGetCertified,
                    ),
                    code: 4,
                },
                {
                    title: 'Where Did You Hear About Onedegree Careers?',
                    answer: toPascalCase(
                        data?.user_login?.result
                            ?.whereDidYouHearAboutOnedegreeCareers,
                    ),
                    code: 5,
                },
            ]);
        }, [data]);

        return (
            <Container style={styles.Question1674}>
                <MLoading
                    isLoading={isLoading}
                    size="large"
                    color={COLORS.Color323}
                    style={{ top: '50%' }}
                />
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
    Question1674: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
});
export default Question;
