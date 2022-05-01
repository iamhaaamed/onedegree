import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
} from 'react-native';
import { scale, verticalScale, height } from 'utils';
import { useState } from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { useRef } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useGetLikeCareers } from 'hooks/careers';
import {
    MIcon,
    MText,
    MTouchable,
    MButton,
    MInput,
    MImageBackground,
    MImage,
    MStatusBar,
    MSwitch,
    MCheckBox,
    MFlatList,
    MChip,
    MDropDown,
    MOnboarding,
    MDateTimePicker,
    MImagePicker,
    MLoading,
    MModal,
    MTab,
    MAccordion,
    MSnackbar,
    MSlider,
} from 'components/common';
import { navigate } from 'navigation/methods';
const Sectionhome = (props) => {
    const { style, data } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    const { data: LikeCareers } = useGetLikeCareers({
        careerId: data?.career?.id,
    });
    console.log('////', LikeCareers);
    const clickCounter = useRef(0);
    const onPress = () => {
        console.log(`Clicked! ${clickCounter.current}`);
        clickCounter.current = clickCounter.current + 1;
    };
    return (
        <View style={[styles.Sectionhome, style]}>
            <MImage
                imageSource={IMAGES.image7104}
                style={COMMON.image68}
                // customWidth={scale(300)}
                // customHeight={scale(136)}
            />
            {/* <View style={COMMON.SectionPaddingSectionhome69}> */}
            <MText textStyle={COMMON.TxtSectionhome70}>
                {data?.career?.title}
            </MText>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                <View style={{ width: '60%' }}>
                    <MText textStyle={COMMON.TxtSectionhome72}>
                        Possible Yearly Income{' '}
                    </MText>
                </View>
                <View style={{ width: '40%' }}>
                    <MText textStyle={COMMON.TxtSectionhome73}>
                        ${data?.career?.possibleYearlyIncome}{' '}
                    </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                <View style={{ width: '35%' }}>
                    <MText textStyle={COMMON.TxtSectionhome72}>
                        Training Time{' '}
                    </MText>
                </View>
                <View style={{ width: '65%' }}>
                    <MText textStyle={COMMON.TxtSectionhome73}>
                        {data?.career?.trainingTime}
                    </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                <View style={{ width: '35%' }}>
                    <MText textStyle={COMMON.TxtSectionhome72}>
                        Social Impact{' '}
                    </MText>
                </View>
                <View style={{ width: '65%' }}>
                    <MText textStyle={COMMON.TxtSectionhome73}>
                        {data?.career?.socialImpact}
                    </MText>
                </View>
            </View>
            <MText textStyle={COMMON.TxtSectionhome80}>
                Top Training Programs{' '}
            </MText>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionhome82}>
                        school name{' '}
                    </MText>
                </View>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionhome83}>6 miles </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionhome82}>
                        school name{' '}
                    </MText>
                </View>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionhome83}>6 miles </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionhome82}>
                        school name{' '}
                    </MText>
                </View>
                <View style={{ width: '50%' }}>
                    <MText textStyle={COMMON.TxtSectionhome83}>6 miles </MText>
                </View>
            </View>
            <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                <View style={{ width: '50%' }}>
                    <MButton
                        onPress={onPress}
                        style={COMMON.ButtonRect920}
                        containerStyle={COMMON.Button910}
                        color={COLORS.white}
                        iconLeft={{
                            name: 'heart-outline',
                            color: COLORS.Color134,
                            Component: MaterialCommunityIcons,
                        }}
                    />
                </View>
                <View style={{ width: '50%' }}>
                    <MButton
                        onPress={() => navigate('MoreInfo', { data })}
                        style={COMMON.ButtonRect920}
                        containerStyle={[
                            COMMON.Button910,
                            { alignSelf: 'flex-end' },
                        ]}
                        color={COLORS.white}
                        iconRight={{
                            name: 'alert-circle-outline',
                            color: COLORS.Color424,
                            Component: MaterialCommunityIcons,
                        }}
                    />
                </View>
            </View>
            {/* </View> */}
        </View>
    );
};
const styles = StyleSheet.create({
    Sectionhome: {
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.18)',
        paddingHorizontal: 10,
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 1,
        width: scale(300),
        alignSelf: 'center',
        // height: verticalScale(378.77),
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
        borderTopRightRadius: 21,
        borderTopLeftRadius: 21,
    },
});
export default Sectionhome;
