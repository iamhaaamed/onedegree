import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { navigate } from 'navigation/methods';
import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IconButton } from 'components/common/IconButton';
import { convertMiles, scale, toPascalCase } from 'utils';
import { MButton, MImage, MText } from 'components/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    useLikeCareer,
    useUnlikeCareer,
    useGetLikeCareers,
} from 'hooks/careers';

const Sectionhome = (props) => {
    const { style, data } = props;
    const { COMMON } = useTheme();
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
            />
            <View style={{ paddingHorizontal: 14 }}>
                <MText numberOfLines={2} textStyle={[COMMON.TxtSectionhome70]}>
                    {data?.career?.title}
                </MText>
                <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                    <View style={{ width: '70%' }}>
                        <MText textStyle={COMMON.TxtSectionhome72}>
                            Possible Yearly Income{' '}
                        </MText>
                    </View>
                    <View style={{ width: '30%' }}>
                        <MText textStyle={COMMON.TxtSectionhome73}>
                            ${data?.career?.possibleYearlyIncome}{' '}
                        </MText>
                    </View>
                </View>
                <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                    <View style={{ width: '45%' }}>
                        <MText textStyle={COMMON.TxtSectionhome72}>
                            Training Time{' '}
                        </MText>
                    </View>
                    <View style={{ width: '55%' }}>
                        <MText textStyle={COMMON.TxtSectionhome73}>
                            {toPascalCase(data?.career?.trainingTime)}
                        </MText>
                    </View>
                </View>
                <View style={[COMMON.RowItem, COMMON.RowItemSectionhome71]}>
                    <View style={{ width: '45%' }}>
                        <MText textStyle={COMMON.TxtSectionhome72}>
                            Social Impact{' '}
                        </MText>
                    </View>
                    <View style={{ width: '55%' }}>
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
                                        key={index}
                                        style={[
                                            COMMON.RowItem,
                                            COMMON.RowItemSectionhome71,
                                        ]}>
                                        <View
                                            style={{
                                                width: '50%',
                                            }}>
                                            <MText
                                                textStyle={
                                                    COMMON.TxtSectionhome82
                                                }>
                                                {item?.programs?.title}
                                            </MText>
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <MText
                                                textStyle={
                                                    COMMON.TxtSectionhome83
                                                }>
                                                {parseFloat(
                                                    convertMiles(
                                                        item?.distance,
                                                    ),
                                                ).toFixed(2)}{' '}
                                                miles{' '}
                                            </MText>
                                        </View>
                                    </View>
                                ),
                        )}
                    </>
                )}
            </View>
            <View
                style={[
                    COMMON.RowItem,
                    COMMON.RowItemSectionhome71,
                    {
                        paddingHorizontal: 8,
                        marginVertical: -5,
                    },
                ]}>
                <IconButton
                    iconSize={32}
                    iconColor={COLORS.Color134}
                    iconComponent={MaterialCommunityIcons}
                    iconName={Like ? 'heart' : 'heart-outline'}
                    onPress={() => {
                        if (Like)
                            UnLikeMutate(data?.career?.id, {
                                onSuccess: (data) => {
                                    if (
                                        data?.career_unlike?.status == 'SUCCESS'
                                    )
                                        setLike(false);
                                },
                            });
                        else {
                            LikeMutate(data?.career?.id, {
                                onSuccess: (data) => {
                                    if (data?.career_like?.status == 'SUCCESS')
                                        setLike(true);
                                },
                            });
                        }
                    }}
                />
                <IconButton
                    iconSize={32}
                    iconColor={COLORS.Color424}
                    iconName={'alert-circle-outline'}
                    iconComponent={MaterialCommunityIcons}
                    onPress={() => navigate('MoreInfo', { data, Like })}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Sectionhome: {
        paddingHorizontal: 10,
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.18)',
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
export default React.memo(Sectionhome);
