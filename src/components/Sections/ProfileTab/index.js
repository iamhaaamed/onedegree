import { MButton } from 'components/common';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import { navigate } from 'navigation/methods';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'utils';

const ProfileTab = (props) => {
    const { style, page } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View style={[styles.tabView, style]}>
            <View style={COMMON.RowItem}>
                <TouchableOpacity style={styles.selectTab} activeOpacity={0.6}>
                    <MButton
                        onPress={() => navigate('MyProfile')}
                        style={COMMON.tabStyle}
                        containerStyle={COMMON.tabSelect}
                        text="Profile"
                        textStyle={[
                            COMMON.TextsButton37,
                            page !== 'profilePage' && {
                                color: COLORS.textOnSecondary,
                            },
                        ]}
                        iconLeft={{
                            name: 'account-outline',
                            color:
                                page == 'profilePage'
                                    ? COLORS.white
                                    : COLORS.Color267,
                            size: scale(23),
                            Component: MaterialCommunityIcons,
                        }}
                        gradient={
                            page == 'profilePage'
                                ? {
                                      colors: [
                                          COLORS.Color424,
                                          COLORS.Color425,
                                          COLORS.Color426,
                                          COLORS.Color427,
                                          COLORS.Color428,
                                      ],
                                      start: {
                                          x: -0.15500132739543915,
                                          y: 0.6157848834991455,
                                      },
                                      end: {
                                          x: 1.014054298400879,
                                          y: 0.17686034739017487,
                                      },
                                  }
                                : null
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '50%' }} activeOpacity={0.6}>
                    <MButton
                        onPress={() => navigate('Question')}
                        style={COMMON.tabStyle}
                        containerStyle={COMMON.tabSelect}
                        text="Questions"
                        textStyle={[
                            COMMON.TextsButton37,
                            page == 'profilePage' && {
                                color: COLORS.textOnSecondary,
                            },
                        ]}
                        iconLeft={{
                            name: 'question',
                            color:
                                page == 'profilePage'
                                    ? COLORS.Color267
                                    : COLORS.white,
                            size: scale(23),
                            style: { marginRight: 2 },
                            Component: FontAwesome,
                        }}
                        gradient={
                            page == 'profilePage'
                                ? null
                                : {
                                      colors: [
                                          COLORS.Color424,
                                          COLORS.Color425,
                                          COLORS.Color426,
                                          COLORS.Color427,
                                          COLORS.Color428,
                                      ],
                                      start: {
                                          x: -0.15500132739543915,
                                          y: 0.6157848834991455,
                                      },
                                      end: {
                                          x: 1.014054298400879,
                                          y: 0.17686034739017487,
                                      },
                                  }
                        }
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    tabView: {
        backgroundColor: COLORS.backMainIcon,
        width: '80%',
        height: scale(70),
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: scale(20),
        borderRadius: 40,
        padding: scale(10),
    },
    selectTab: { width: '50%' },
});
export default React.memo(ProfileTab);
