import { MButton, MText } from 'components/common';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'utils';

const SectionModal = (props) => {
    const { style, showModal } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View style={[styles.SectionModal, style]}>
            <View style={styles.line} />
            <View style={COMMON.SectionPaddingSectionModal51}>
                <MText textStyle={COMMON.TxtSectionModal52}>
                    Months To Pay Off{' '}
                </MText>
                <MText
                    textStyle={[
                        COMMON.TxtSectionModal53,
                        { textAlign: 'left' },
                    ]}>
                    This Is The Number Of Months It Will Take To Pay Off Your
                    Certification If You Pay 20% Of Your Take Home Pay Towards
                    It. Example: If You Make $1000 Per Week And You Put $200
                    Towards Paying Off Your Certification.{' '}
                </MText>

                <MButton
                    onPress={() => showModal(true)}
                    style={COMMON.ButtonRect55}
                    containerStyle={COMMON.Button54}
                    text="Confirmation"
                    textStyle={COMMON.TextsButton56}
                    gradient={{
                        colors: [
                            COLORS.Color323,
                            COLORS.Color148,
                            COLORS.Color912,
                            COLORS.Color674,
                            COLORS.Color455,
                            COLORS.Color240,
                        ],
                        start: {
                            x: -0.15500132739543915,
                            y: 0.6157848834991455,
                        },
                        end: {
                            x: 1.014054298400879,
                            y: 0.17686034739017487,
                        },
                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionModal: {
        paddingBottom: verticalScale(32),
        paddingTop: verticalScale(32),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        backgroundColor: COLORS.white,
        width: '100%',
        height: verticalScale(483),
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    line: {
        width: '30%',
        alignSelf: 'center',
        backgroundColor: COLORS.Color321,
        padding: 2,
        borderRadius: 5,
        marginBottom: scale(30),
    },
});
export default React.memo(SectionModal);
