import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
} from 'react-native';
import {
    scale,
    verticalScale,
    height,
    toPascalCase,
    convertMiles,
} from 'utils';
import { useState } from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { useRef } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    useGetLikeCareers,
    useLikeCareer,
    useUnlikeCareer,
} from 'hooks/careers';
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
    const [Like, setLike] = useState(false);
    const { data: LikeCareers } = useGetLikeCareers({
        careerId: data?.career?.id,
    });
    useEffect(() => {
        if (LikeCareers?.career_getUserLikeCareer?.result) setLike(true);
    }, [LikeCareers]);
    const { mutate: LikeMutate } = useLikeCareer();
    const { mutate: UnLikeMutate } = useUnlikeCareer();

    return (
        <View style={[styles.Sectionhome, style]}>
            <MImage
                imageSource={{ uri: data?.career?.imageAddress }}
                style={COMMON.image68}
                // customWidth={scale(300)}
                // customHeight={scale(136)}
            />
            <MText textStyle={COMMON.TxtSectionhome70} numberOfLines={2}>
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
                        {toPascalCase(data?.career?.trainingTime)}
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
                        {toPascalCase(data?.career?.socialImpact)}
                    </MText>
                </View>
            </View>
            {data?.programVm?.length > 0 && (
                <>
                    <MText textStyle={COMMON.TxtSectionhome80}>
                        Top Training Programs{' '}
                    </MText>
                    {data?.programVm?.map(
                        (item, index) =>
                            index < 3 && (
                                <View
                                    style={[
                                        COMMON.RowItem,
                                        COMMON.RowItemSectionhome71,
                                    ]}>
                                    <View
                                        style={{
                                            width: '50%',
                                        }}>
                                        <MText
                                            textStyle={COMMON.TxtSectionhome82}>
                                            {item?.programs?.title}
                                        </MText>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <MText
                                            textStyle={COMMON.TxtSectionhome83}>
                                            {parseFloat(
                                                convertMiles(item?.distance),
                                            ).toFixed(2)}{' '}
                                            miles{' '}
                                        </MText>
                                    </View>
                                </View>
                            ),
                    )}
                </>
            )}
            <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                <View style={{ width: '50%' }}>
                    <MButton
                        onPress={() => {
                            if (Like)
                                UnLikeMutate(data?.career?.id, {
                                    onSuccess: (data) => {
                                        if (
                                            data?.career_unlike?.status ==
                                            'SUCCESS'
                                        )
                                            setLike(false);
                                    },
                                });
                            else
                                LikeMutate(data?.career?.id, {
                                    onSuccess: (data) => {
                                        if (
                                            data?.career_like?.status ==
                                            'SUCCESS'
                                        )
                                            setLike(true);
                                    },
                                });
                        }}
                        style={[
                            COMMON.ButtonRect920,
                            { paddingHorizontal: 10 },
                        ]}
                        containerStyle={[COMMON.Button910]}
                        color={COLORS.white}
                        iconLeft={{
                            name: Like ? 'heart' : 'heart-outline',
                            color: COLORS.Color134,
                            Component: MaterialCommunityIcons,
                        }}
                    />
                </View>
                <View style={{ width: '50%' }}>
                    <MButton
                        onPress={() => navigate('MoreInfo', { data, Like })}
                        style={[
                            COMMON.ButtonRect920,
                            { paddingHorizontal: 20 },
                        ]}
                        containerStyle={[
                            COMMON.Button910,
                            {
                                alignSelf: 'flex-end',
                                height: scale(30),
                            },
                        ]}
                        color={COLORS.white}
                        iconRight={{
                            name: 'alert-circle-outline',
                            color: COLORS.Color424,
                            onPress: () => navigate('MoreInfo', { data, Like }),
                            Component: MaterialCommunityIcons,
                        }}
                    />
                </View>
            </View>
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
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
        borderTopRightRadius: 21,
        borderTopLeftRadius: 21,
    },
});
export default Sectionhome;
