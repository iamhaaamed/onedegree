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
import {
    SectionRowCenter,
    SectionTop,
    Question2,
    Container,
} from 'components/Sections';
import { goBack, navigate } from 'navigation/methods';

const question7 = createScreen(
    ({ route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const [userInput, setUserInput] = useState();

        const Complete = (data) => {
            if (data.amount && data.type) setUserInput(data);
        };
        return (
            <Container style={styles.question7}>
                {/* <ScrollView> */}
                <SectionTop />
                <MImage
                    imageSource={IMAGES.image6696}
                    style={COMMON.Image119}
                    customWidth={scale(390)}
                    customHeight={scale(84)}
                />

                {/* <View style={COMMON.SectionPaddingquestion7120}> */}
                <Question2 onComplete={(data) => Complete(data)} />
                {/* </View> */}
                <SectionRowCenter
                    style={{ top: '20%' }}
                    backPress={() => goBack()}
                    nextPress={() => {
                        if (userInput)
                            navigate('Question6', {
                                userInput,
                                ...route?.params,
                            });
                    }}
                />
                {/* </ScrollView> */}
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
    question7: {
        backgroundColor: COLORS.Color963,
        flex: 1,
    },
});
export default question7;
