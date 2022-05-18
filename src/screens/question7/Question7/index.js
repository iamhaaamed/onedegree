import { MImage } from 'components/common';
import { createScreen } from 'components/elements';
import {
    Container,
    Question2,
    SectionRowCenter,
    SectionTop,
} from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import { goBack, navigate } from 'navigation/methods';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'utils';

const question7 = createScreen(
    ({ route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const [userInput, setUserInput] = useState();

        const Complete = (data) => {
            console.log('dddd', data);
            if (
                data.annuallyAmount ||
                data?.hourlyAmount ||
                (data?.monthlyAmount && data.type)
            )
                setUserInput(data);
        };
        return (
            <Container style={styles.question7}>
                {/* <ScrollView> */}
                <SectionTop />
                <MImage
                    imageSource={IMAGES.image6696}
                    style={COMMON.Image119}
                    customWidth={scale(390)}
                    customHeight={scale(84)}
                    resizeMode={'contain'}
                />

                {/* <View style={{ flex: 1 }}> */}
                <Question2 onComplete={(data) => Complete(data)} />
                {/* </View> */}
                <View style={{ paddingBottom: 20, marginTop: '40%' }}>
                    <SectionRowCenter
                        backPress={() => goBack()}
                        nextPress={() => {
                            if (userInput)
                                navigate('Question6', {
                                    userInput,
                                    ...route?.params,
                                });
                        }}
                    />
                </View>
                {/* </ScrollView> */}
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
    question7: {
        backgroundColor: COLORS.Color963,
        flex: 1,
    },
});
export default question7;
