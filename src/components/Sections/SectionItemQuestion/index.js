import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText } from 'components/common';
import { navigate } from 'navigation/methods';

const SectionItemQuestion = (props) => {
    const { style, title, answer, code } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View {...props} style={[styles.SectionItem, style]}>
            <View style={[COMMON.RowItem]}>
                <View style={{ width: '90%' }}>
                    <MText textStyle={COMMON.TxtSectionItem5}>{title}</MText>
                    <MText textStyle={COMMON.TxtSectionItem6}>{answer} </MText>
                </View>
                <View style={{ width: '10%', justifyContent: 'flex-end' }}>
                    <MButton
                        onPress={() =>
                            navigate('ProfileQuestion5', { code: code })
                        }
                        style={COMMON.ButtonRect8}
                        color={COLORS.white}
                        iconLeft={{
                            name: 'edit',
                            color: COLORS.Color888,
                            Component: MaterialCommunityIcons,
                        }}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionItem: {
        paddingBottom: verticalScale(5),
        paddingTop: verticalScale(16),
        paddingRight: scale(21),
        paddingLeft: scale(19),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.06)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 0.5,
        width: '100%',
        // height: verticalScale(93.5),
        borderTopLeftRadius: 21,
        borderTopRightRadius: 19,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
        marginVertical: 5,
    },
});
export default SectionItemQuestion;
