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
import Ionicons from 'react-native-vector-icons/Ionicons';
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

    const clickCounter = useRef(0);
    const onPress = () => {
        console.log(`Clicked! ${clickCounter.current}`);
        clickCounter.current = clickCounter.current + 1;
    };

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
                <View style={{ width: '12%' }}>
                    <MButton
                        onPress={() => navigate('Notification')}
                        style={COMMON.ButtonRect62}
                        containerStyle={COMMON.Button61}
                        color={COLORS.white}
                        iconRight={{
                            name: 'bell-outline',
                            color: COLORS.Color424,
                            size: scale(25),
                            Component: MaterialCommunityIcons,
                        }}
                    />
                </View>
                <View style={{ width: '10%' }}>
                    <MButton
                        onPress={() => navigate('ChatList')}
                        style={COMMON.ButtonRect62}
                        containerStyle={[COMMON.Button61, { width: scale(45) }]}
                        color={COLORS.white}
                        iconLeft={{
                            name: 'chatbubble-outline',
                            color: COLORS.Color424,
                            size: scale(23),
                            Component: Ionicons,
                        }}
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
        height: verticalScale(56),
    },
});
export default SectionTophome;
