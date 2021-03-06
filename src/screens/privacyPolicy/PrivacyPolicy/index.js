import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod } from 'components/common/MDateTimePicker';
import {
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView,
    DrawerToggleButton,
} from '@react-navigation/drawer';

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
import { Container, SectionTop01 } from 'components/Sections';
const PrivacyPolicy = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        return (
            <Container style={styles.PrivacyPolicy}>
                <ScrollView>
                    <SectionTop01 title="Privacy Policy" />
                    <View style={COMMON.SectionPaddingTermsofService14}>
                        <MText
                            textStyle={[
                                COMMON.TxtTermsofService15,
                                { marginTop: scale(20) },
                            ]}>
                            Privacy Policy{' '}
                        </MText>
                        <MText textStyle={COMMON.TxtTermsofService16}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, diam nonumy eirmodLorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, diam nonumy eirmodLorem
                            ipsum dolor sit amet, consetetur sadipscing elitr,
                            diam nonumy eirmodLorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, diam nonumy eirmodLorem
                            ipsum dolor sit amet, consetetur sadipscing elitr,
                            diam nonumy eirmod{' '}
                        </MText>
                    </View>
                </ScrollView>
            </Container>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    PrivacyPolicy: {
        backgroundColor: COLORS.Color611,
        height: '100%',
    },
});
export default PrivacyPolicy;
