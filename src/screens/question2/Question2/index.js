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
import { navigate } from 'navigation/methods';
import { SectionTop, Question1, Container } from 'components/Sections';
import { useUpdateProfile } from 'hooks/profile';
const question2 = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [Answers, setAnswers] = useState();
        function callMyMethod(array) {
            let string = '';
            array.forEach(function (counter, currentIndex) {
                string += counter;
                if (currentIndex != array.length - 1) {
                    string += ',';
                }
            });
            return string;
        }
        return (
            <Container style={styles.question2}>
                <ScrollView>
                    <SectionTop />
                    <MImage
                        imageSource={IMAGES.image2101}
                        style={COMMON.Image57}
                        customWidth={scale(250)}
                        customHeight={scale(84)}
                        resizeMode={'contain'}
                    />

                    {/* <View style={COMMON.SectionPaddingquestion258}> */}
                    <Question1 setAnswer={(value) => setAnswers(value)} />
                    {/* </View> */}
                    <MButton
                        onPress={() => {
                            if (Answers && Answers?.length > 0) {
                                let String = callMyMethod(Answers);
                                navigate('Question7', { Answers: String });
                            }
                        }}
                        style={COMMON.ButtonRect80}
                        containerStyle={COMMON.Button79}
                        text="Next"
                        textStyle={COMMON.TextsButton81}
                        gradient={{
                            colors: [
                                COLORS.Color323,
                                COLORS.Color148,
                                COLORS.Color912,
                                COLORS.Color674,
                                COLORS.Color455,
                                COLORS.Color240,
                            ],
                            start: {
                                x: -0.15500132739543915,
                                y: 0.6157848834991455,
                            },
                            end: {
                                x: 1.014054298400879,
                                y: 0.17686034739017487,
                            },
                        }}
                    />
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
    question2: {
        backgroundColor: COLORS.Color963,
        height: '100%',
    },
});
export default question2;
