import { MIcon, MInput, MText } from 'components/common';
import { COLORS } from 'constants/common';
import { Formik } from 'formik';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'utils';
import * as yup from 'yup';

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
    const ValidationSchema = yup.object().shape({
        amount: yup
            .number()
            .min(2, 'Must be 5 characters')
            .max(5, 'Must be 5 characters')
            .required('Invalid Zip Code'),
    });
    console.log('aaaaaaaa', answer);
    return (
        <>
            <View style={COMMON.SectionPaddingquestion7120}>
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
                                placeholder={
                                    answer ? answer : 'Please enter ZIP Code'
                                }
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
                <View style={COMMON.flexRow}>
                    <MIcon
                        name="info"
                        size={32}
                        style={{ alignSelf: 'flex-start' }}
                    />
                    <MText textStyle={COMMON.Txtquestion6109}>
                        Your Zip Code Will Help Us Recommend Training Programs
                        Near You!{' '}
                    </MText>
                </View>
            </View>
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
export default React.memo(Question3);
