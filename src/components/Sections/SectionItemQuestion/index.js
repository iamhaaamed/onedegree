import React from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { scale, verticalScale } from 'utils';
import { navigate } from 'navigation/methods';
import { StyleSheet, View } from 'react-native';
import { IconButton, MText } from 'components/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SectionItemQuestion = (props) => {
    const { style, title, answer, code } = props;
    const { COMMON } = useTheme();

    return (
        <View {...props} style={[styles.SectionItem, style]}>
            <View style={[COMMON.RowItem]}>
                <View style={{ width: '90%' }}>
                    <MText textStyle={COMMON.TxtSectionItem5}>{title}</MText>
                    <MText textStyle={COMMON.TxtSectionItem6}>{answer} </MText>
                </View>
                <View style={{ width: '10%', justifyContent: 'flex-end' }}>
                    <IconButton
                        onPress={() =>
                            navigate('ProfileQuestion5', {
                                code: code,
                                answer: answer,
                            })
                        }
                        iconName="edit"
                        iconColor={COLORS.Color888}
                        iconComponent={MaterialCommunityIcons}
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
        borderTopLeftRadius: 21,
        borderTopRightRadius: 19,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
        marginVertical: 5,
    },
});
export default React.memo(SectionItemQuestion);
