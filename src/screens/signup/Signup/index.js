import React from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { MImage } from 'components/common';
import { View, StyleSheet } from 'react-native';
import { createScreen } from 'components/elements';
import { Container, SectionSignUp } from 'components/Sections';

const Signup = createScreen(
    () => {
        const { IMAGES, COMMON } = useTheme();

        return (
            <Container style={styles.Signup}>
                <View style={{ flex: 1 }}>
                    <MImage
                        resizeMode="contain"
                        style={COMMON.image0}
                        imageSource={IMAGES.image2228}
                    />
                </View>

                <SectionSignUp />
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
