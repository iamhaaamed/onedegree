import { MImage } from 'components/common';
import { createScreen } from 'components/elements';
import { Container, SectionForgetPass } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { scale } from 'utils';

const Forgetpassword = createScreen(
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
            <Container style={styles.Forgetpassword}>
                {/* <ScrollView> */}
                <View style={styles.image}>
                    <MImage
                        imageSource={IMAGES.image6296}
                        style={COMMON.image45}
                        resizeMode="contain"
                    />
                </View>

                <View>
                    <SectionForgetPass />
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
    Forgetpassword: {
        backgroundColor: COLORS.Color596,
        height: '100%',
        flex: 1,
    },
    image: {
        flex: 1,
    },
});
export default Forgetpassword;
