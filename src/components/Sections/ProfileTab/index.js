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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
                    {/* <MText textStyle={COMMON.TxtSectionInfo28}>Profile</MText> */}
                    <MButton
                        onPress={() => navigate('MyProfile')}
                        style={COMMON.tabStyle}
                        containerStyle={COMMON.tabSelect}
                        text="Profile"
                        textStyle={COMMON.TextsButton37}
                        iconLeft={{
                            name: 'account-outline',
                            color: COLORS.white,
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
                        onPress={() => navigate('ProfileQuestion5')}
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
                            color: COLORS.Color267,
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
export default ProfileTab;
