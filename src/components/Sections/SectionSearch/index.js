import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { navigate } from 'navigation/methods';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MImage, MText, MButton } from 'components/common';
import React, { useEffect, useState } from 'react';
import { IconButton } from 'components/common/IconButton';
import { convertMiles, scale, toPascalCase } from 'utils';
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
    console.log('dddd', data);
    const { data: LikeCareers } = useGetLikeCareers({
        careerId: data?.career?.id,
    });

    useEffect(() => {
        if (LikeCareers?.career_getUserLikeCareer?.result) setLike(true);
    }, [LikeCareers]);

    const { mutate: LikeMutate } = useLikeCareer();
    const { mutate: UnLikeMutate } = useUnlikeCareer();

    return (
        <TouchableOpacity
            style={COMMON.SectionPaddingSearch12}
            activeOpacity={1}
            onPress={() =>
                navigate('MoreInfo', {
                    data: data,
                    Like: Like,
                })
            }>
            <View style={[COMMON.RowItem, COMMON.SectionEvent]}>
                <View style={{ width: '20%' }}>
                    <MImage
                        style={COMMON.image14}
                        imageSource={{
                            uri: data?.career?.imageAddress,
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '58%',
                        marginLeft: scale(10),
                    }}>
                    <MText numberOfLines={1} textStyle={COMMON.TxtSearch15}>
                        {data?.career?.title}
                    </MText>
                    <MText textStyle={COMMON.TxtSearch16}>
                        Possible Yearly Income{' '}
                    </MText>
                </View>
                <View
                    style={{
                        alignItems: 'flex-end',
                        marginRight: scale(11),
                        // backgroundColor: 'red',
                        // width: '22%',
                    }}>
                    <MButton
                        onPress={() => {
                            console.log('3333');
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
                            else {
                                LikeMutate(data?.career?.id, {
                                    onSuccess: (data) => {
                                        if (
                                            data?.career_like?.status ==
                                            'SUCCESS'
                                        )
                                            setLike(true);
                                    },
                                });
                            }
                        }}
                        color={COLORS.white}
                        style={{
                            alignSelf: 'flex-end',
                        }}
                        iconLeft={{
                            size: scale(25),
                            name:
                                data?.isLiked || Like
                                    ? 'heart'
                                    : 'heart-outline',
                            color: COLORS.Color508,

                            Component: MaterialCommunityIcons,
                        }}
                    />
                    <MText textStyle={COMMON.TxtSearch17}>
                        ${data?.career?.possibleYearlyIncome}
                    </MText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Sectionhome: {
        // paddingHorizontal: 10,
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
        height: scale(545),
    },
});
export default React.memo(Sectionhome);
