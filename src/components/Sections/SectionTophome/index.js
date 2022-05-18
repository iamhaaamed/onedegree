import { MButton, MImage, IconButton } from 'components/common';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import { navigate } from 'navigation/methods';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, verticalScale } from 'utils';
import { useGetNotifications } from 'hooks/notification';

const SectionTophome = (props) => {
    const { style } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const {
        isLoading,
        data: notificationsData,
        fetchNextPage,
        hasNextPage,
        isRefetching,
        refetch,
    } = useGetNotifications({
        where: {
            isReaded: { eq: false },
        },
    });
    return (
        <View style={[styles.SectionTophome, style]}>
            <View style={COMMON.RowItem}>
                <View style={{ width: '78%' }}>
                    <MImage
                        imageSource={IMAGES.image7436}
                        style={COMMON.image60}
                        customWidth={scale(148)}
                        customHeight={scale(44)}
                    />
                </View>
                <View>
                    <IconButton
                        iconName="bell-outline"
                        iconSize={scale(25)}
                        iconColor={COLORS.Color424}
                        onPress={() => navigate('Notification')}
                    />
                    {notificationsData?.pages?.length > 0 && (
                        <View
                            style={{
                                width: scale(10),
                                height: scale(10),
                                borderRadius: 5,
                                backgroundColor: COLORS.Color323,
                                position: 'absolute',
                                top: scale(10),
                                left: scale(7),
                            }}
                        />
                    )}
                </View>
                <View>
                    <IconButton
                        iconName="chatbubble-outline"
                        iconSize={scale(25)}
                        iconColor={COLORS.Color424}
                        iconComponent={Ionicons}
                        onPress={() => navigate('ChatList')}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionTophome: {
        paddingBottom: verticalScale(6),
        paddingTop: verticalScale(6),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(140,140,140,0.09)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 1,
        // opacity: 0.78,
        width: '100%',
        // height: verticalScale(56),
    },
});
export default React.memo(SectionTophome);
