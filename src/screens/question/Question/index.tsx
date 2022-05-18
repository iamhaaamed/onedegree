// @ts-nocheck
import { COLORS } from 'constants/common';
import { authStore } from '../../../store';
import { useGetProfile } from 'hooks/profile';
import React, { useEffect, useState } from 'react';
import { createScreen } from 'components/elements';
import { FlatList, StyleSheet } from 'react-native';
import { SectionItemQuestion } from 'components/Sections';
import { scale, toPascalCase, verticalScale } from 'utils';

const Question = createScreen(
    () => {
        const { data } = useGetProfile();
        const [DATA, setDATA] = useState([]);
        const { CityName } = authStore((state) => state);
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
                    answer: data?.user_login?.result?.city || CityName,
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
            <FlatList
                data={DATA}
                style={styles.Question1674}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: verticalScale(18) }}
                renderItem={({ item }) => (
                    <SectionItemQuestion
                        code={item?.code}
                        title={item.title}
                        answer={item.answer}
                    />
                )}
            />
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
        flex: 1,
        paddingHorizontal: scale(32),
        backgroundColor: COLORS.Color197,
    },
});
export default Question;
