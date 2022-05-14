import { MImage } from 'components/common';
import { createScreen } from 'components/elements';
import { Container, SectionVerify } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { scale } from 'utils';

const VerifyEmail = createScreen(
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
            <Container style={styles.VerifyEmail}>
                <ScrollView>
                    <MImage
                        imageSource={IMAGES.image4477}
                        style={COMMON.image134}
                        customWidth={scale(390)}
                        customHeight={scale(452.02)}
                    />

                    <SectionVerify />
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
    VerifyEmail: {
        backgroundColor: COLORS.Color596,
        height: '100%',
    },
});
export default VerifyEmail;
