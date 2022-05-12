import { MIcon, MText } from 'components/common';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { getDateXDaysAgo, scale, verticalScale } from 'utils';

const SectionEvent = (props) => {
    const { style, data } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View
            style={[styles.SectionEvent, style, COMMON.SectionPaddingSearch12]}>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionEvent24]}>
                <View
                    style={{
                        width: '10%',
                    }}>
                    <MIcon
                        IconComponent={Feather}
                        name="message-circle"
                        size={24}
                        color={COLORS.Color424}
                    />
                </View>
                <View style={{ width: '90%' }}>
                    <MText textStyle={COMMON.TxtSectionEvent25}>
                        {data?.title}
                    </MText>
                </View>
            </View>
            <MText textStyle={COMMON.TxtSectionEvent26}>
                {data?.description}
            </MText>
            <MText textStyle={COMMON.TxtSectionEvent27}>
                {/* {getDateXDaysAgo(data?.createdAt)} */}
                11 days ago - 11:35 Am{' '}
            </MText>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionEvent: {
        paddingBottom: verticalScale(18),
        paddingTop: verticalScale(11),
        paddingRight: scale(16),
        paddingLeft: scale(17),
        backgroundColor: COLORS.Color611,
        shadowColor: 'rgba(140,140,140,0.06)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        // opacity: 0.78,
        elevation: 1,
        marginVertical: verticalScale(10),
        width: '100%',
        // height: verticalScale(144),
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
    },
});
export default SectionEvent;
