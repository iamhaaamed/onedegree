import { MImage } from 'components/common';
import { createScreen } from 'components/elements';
import { Container, SectionQuestion } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { scale } from 'utils';

const Hiquestion2 = createScreen(
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
            <Container style={styles.Hiquestion2}>
                <MImage
                    imageSource={IMAGES.image3013}
                    style={COMMON.image94}
                    customWidth={scale(390)}
                    customHeight={scale(440)}
                    resizeMode="contain"
                />
                <MImage
                    imageSource={IMAGES.hiBack}
                    style={COMMON.hiBack}
                    customWidth={scale(390)}
                    customHeight={scale(300)}
                />

                <SectionQuestion style={COMMON.EleHiquestion2100} />
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
    Hiquestion2: {
        backgroundColor: COLORS.Color963,
        height: '100%',
    },
});
export default Hiquestion2;
