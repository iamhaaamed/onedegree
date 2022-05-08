import { MImage } from 'components/common';
import { createScreen } from 'components/elements';
import { Container, SectionSignIn } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { scale } from 'utils';

const Signin = createScreen(
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
            <Container style={styles.Signin}>
                <ScrollView>
                    <MImage
                        imageSource={IMAGES.image7352}
                        style={COMMON.image25}
                        customWidth={scale(390)}
                        customHeight={scale(302)}
                    />

                    <SectionSignIn />
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
    Signin: {
        backgroundColor: COLORS.Color963,
        height: '100%',
    },
});
export default Signin;
