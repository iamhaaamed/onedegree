import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from 'constants/common';
import { verticalScale, scale } from 'utils';
import { MStatusBar, MButton, MText, MImage } from 'components/common';
import { navigate } from 'navigation/methods';
import { StackActions, useNavigation } from '@react-navigation/native';
const SectionItem20 = (props) => {
    const { style, data } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={[styles.SectionItem, style]}
            activeOpacity={0.9}
            onPress={
                () => {
                    navigation.dispatch(
                        StackActions.replace('ProgramDetails', {
                            programId: data?.id,
                        }),
                    );
                }
                // navigate('ProgramDetails', {
                //     programId: data?.id,
                // })
            }>
            <MImage
                imageSource={{ uri: data?.imageAddrss }}
                style={COMMON.image26}
            />
            <MText textStyle={COMMON.TxtSectionText4}>{data?.title} </MText>
            <View style={[COMMON.RowItem]}>
                <View style={{ width: '38%' }}>
                    <MText textStyle={COMMON.TxtSectionItem17}>
                        Program Cost:{' '}
                    </MText>
                </View>
                <View style={{ width: '62%' }}>
                    <MText textStyle={COMMON.TxtSectionItem18}>
                        ${data?.programCost}{' '}
                    </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem]}>
                <View style={{ width: '48%' }}>
                    <MText textStyle={COMMON.TxtSectionItem17}>
                        Length of Program :{' '}
                    </MText>
                </View>
                <View style={{ width: '52%' }}>
                    <MText textStyle={COMMON.TxtSectionItem18}>
                        {data?.lengthOfProgram} Months{' '}
                    </MText>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    SectionItem: {
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.06)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 1,
        width: '99.5%',
        alignSelf: 'center',
        // height: verticalScale(121),
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
        marginVertical: scale(10),
    },
});
export default SectionItem20;
