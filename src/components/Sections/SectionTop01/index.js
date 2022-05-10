import React from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { scale, verticalScale } from 'utils';
import { StyleSheet, View } from 'react-native';
import { MButton, MText } from 'components/common';
import { goBack, navigate } from 'navigation/methods';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SectionTop01 = (props) => {
    const { style, title, rightView, noIcon, programDetails } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View style={[styles.SectionTop01, style]}>
            <View style={{ alignSelf: 'center', width: '10%' }}>
                {!noIcon && (
                    <MButton
                        onPress={() => {
                            if (programDetails) navigate('Programs');
                            else goBack();
                        }}
                        style={COMMON.ButtonRect10}
                        color={'transparent'}
                        iconRight={{
                            name: 'arrow-back-ios',
                            color: COLORS.Color424,
                            Component: MaterialCommunityIcons,
                        }}
                    />
                )}
            </View>
            <View
                style={{
                    width: '80%',
                    justifyContent: 'center',
                }}>
                <MText textStyle={COMMON.TxtSectionTop0111}>{title}</MText>
            </View>
            <View style={styles.rightView}>
                {rightView && (
                    <MButton
                        onPress={() => navigate('Settings')}
                        style={COMMON.ButtonRect10}
                        color={'transparent'}
                        iconRight={{
                            name: 'settings-outline',
                            color: COLORS.Color756,
                            size: scale(25),
                            Component: Ionicons,
                        }}
                    />
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionTop01: {
        // paddingBottom: verticalScale(11),
        // paddingTop: verticalScale(11),
        paddingRight: scale(12),
        paddingLeft: scale(5),
        backgroundColor: COLORS.Color611,
        shadowColor: 'rgba(140,140,140,0.09)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 29,
        elevation: 1,
        // opacity: 0.78,
        width: '100%',
        height: verticalScale(56),
        // justifyContent: 'space-between',
        flexDirection: 'row',
    },
    rightView: {
        width: scale(30),
        height: scale(20),
        justifyContent: 'center',
        alignSelf: 'center',
    },
});
export default SectionTop01;
