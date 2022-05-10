import React from 'react';
import { scale } from 'utils';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { MImage } from 'components/common';
import { createScreen } from 'components/elements';
import { Container, SectionSignUp } from 'components/Sections';
import { ScrollView, StyleSheet } from 'react-native';

const Signup = createScreen(
    () => {
        const { IMAGES, COMMON } = useTheme();

        return (
            <Container style={styles.Signup}>
                <ScrollView>
                    <MImage
                        imageSource={IMAGES.image2228}
                        style={COMMON.image0}
                        customWidth={scale(390)}
                        customHeight={scale(302)}
                    />

                    <SectionSignUp />
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
    Signup: {
        backgroundColor: COLORS.Color963,
        height: '100%',
    },
});
export default Signup;
