import React from 'react';
import { scale } from 'utils';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { MImage, MText } from 'components/common';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

const SectionItem20 = (props) => {
    const { style, data } = props;
    const { COMMON } = useTheme();
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[styles.SectionItem, style]}
            activeOpacity={0.9}
            onPress={() => {
                navigation.dispatch(
                    StackActions.replace('ProgramDetails', {
                        programId: data?.id,
                    }),
                );
            }}>
            <MImage
                imageSource={{ uri: data?.imageAddrss }}
                style={COMMON.image26}
            />
            <MText textStyle={COMMON.TxtSectionText4}>{data?.title} </MText>
            <View style={[COMMON.RowItem]}>
                <View style={{ width: '40%' }}>
                    <MText textStyle={COMMON.TxtSectionItem17}>
                        Program Cost:{' '}
                    </MText>
                </View>
                <View style={{ width: '60%' }}>
                    <MText textStyle={COMMON.TxtSectionItem18}>
                        ${data?.programCost}{' '}
                    </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem]}>
                <View style={{ width: '55%' }}>
                    <MText textStyle={COMMON.TxtSectionItem17}>
                        Length of Program :{' '}
                    </MText>
                </View>
                <View style={{ width: '70%' }}>
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
        paddingBottom: 14,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
        marginVertical: scale(10),
    },
});
export default React.memo(SectionItem20);
