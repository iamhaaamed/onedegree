import { MButton, MText } from 'components/common';
import { COLORS } from 'constants/common';
import { useUnlikeCareer } from 'hooks/save';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { scale, verticalScale } from 'utils';

const SectionModalRemoveSave = (props) => {
    const { style, showModal, nextPress, backPress, CareerId } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const { mutate: UnLikeMutate } = useUnlikeCareer();
    return (
        <View style={[styles.SectionModal, style]}>
            <View style={COMMON.SectionPaddingSectionModal51}>
                <MText textStyle={COMMON.TxtSectionModal532}>
                    Are You Sure You Want To Remove This Saved Career?
                </MText>

                <View style={[styles.SectionRowCenter, style]}>
                    <MButton
                        onPress={() => showModal(true)}
                        style={COMMON.ButtonRect114}
                        containerStyle={COMMON.Button113}
                        text="Back"
                        textStyle={[COMMON.TextsButton115]}
                        color={COLORS.Color963}
                    />
                    <MButton
                        onPress={() =>
                            UnLikeMutate(CareerId, {
                                onSuccess: (data) => {
                                    if (
                                        data?.career_unlike?.status == 'SUCCESS'
                                    )
                                        showModal(true);
                                    else
                                        showMessage({
                                            message: `Something went wrong: ${error.message}`,
                                            type: 'danger',
                                        });
                                },
                            })
                        }
                        style={[COMMON.ButtonRect111]}
                        containerStyle={COMMON.Button110}
                        text="Remove"
                        textStyle={[COMMON.TextsButton112]}
                        gradient={{
                            colors: [COLORS.Color323, COLORS.Color409],
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
    SectionRowCenter: {
        paddingBottom: verticalScale(27),
        paddingTop: verticalScale(27),
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
    },
});
export default React.memo(SectionModalRemoveSave);
