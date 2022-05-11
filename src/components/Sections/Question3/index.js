import React from 'react';
import { useEffect } from 'react';
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
import { SectionTop, Qustion1 } from 'components/Sections';
import * as yup from 'yup';
import { Formik } from 'formik';
const Question3 = (props) => {
    const { style, title, answer, page, setZipCode } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    const [ZipCode, setZipCode1] = useState();
    useEffect(() => {
        if (ZipCode) setZipCode(ZipCode);
    }, [ZipCode]);
    // console.log('zzzzzzzzz', ZipCode);
    const ValidationSchema = yup.object().shape({
        amount: yup
            .number()
            .min(5, 'Must be 5 characters')
            .max(5, 'Must be 5 characters')
            .required('Invalid Zip Code'),
    });
    return (
        <>
            <MText textStyle={COMMON.Txtquestion6104}>
                Where Do You Currently Live?{' '}
            </MText>
            <MText textStyle={COMMON.Txtquestion6105}>ZIP Code* </MText>
            <Formik
                validationSchema={ValidationSchema}
                initialValues={{ zipcode: '' }}
                // onSubmit={(values) => onSubmit(values)}
            >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        {handleSubmit}
                        <MInput
                            inputStyle={COMMON.InputRect108}
                            containerStyle={COMMON.Input106}
                            placeholder="Please enter ZIP Code"
                            error={errors && errors.amount}
                            placeholderColor={COLORS.Color267}
                            onChangeText={(text) => {
                                setZipCode1(text);
                                handleChange('amount');
                            }}
                            textStyle={COMMON.TextsInput107}
                            backgroundColor={COLORS.Color963}
                            height={verticalScale(48)}
                            keyboardType="numeric"
                            maxLength={5}
                        />
                        {!ZipCode && (
                            <MText textStyle={styles.error}>
                                Enter Zip Code
                            </MText>
                        )}
                    </>
                )}
            </Formik>
            <MText textStyle={COMMON.Txtquestion6109}>
                Entering the zip code will help us to training programs !{' '}
            </MText>
        </>
    );
};
const styles = StyleSheet.create({
    Question61796: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
    error: {
        color: COLORS.error,
        marginBottom: scale(12),
        fontSize: verticalScale(14),
        fontFamily: 'Muli',
        top: '-220%',
        // paddingBottom: scale(10),
    },
});
export default Question3;
