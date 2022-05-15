import React from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { MImage } from 'components/common';
import { View, StyleSheet } from 'react-native';
import { createScreen } from 'components/elements';
import { Container, SectionSignIn } from 'components/Sections';

const Signin = createScreen(
    () => {
        const { IMAGES, COMMON } = useTheme();

        return (
            <Container style={styles.Signin}>
                <View style={{ flex: 1 }}>
                    <MImage
                        resizeMode="contain"
                        style={COMMON.image25}
                        imageSource={IMAGES.image7352}
                    />
                </View>
                <View>
                    <SectionSignIn />
                </View>
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
