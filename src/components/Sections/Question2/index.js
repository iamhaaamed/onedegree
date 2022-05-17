import * as yup from 'yup';
import { Formik } from 'formik';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { scale, toPascalCase, verticalScale } from 'utils';
import { MCheckBox, MInput, MText } from 'components/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Question2 = (props) => {
    const { answer, onComplete } = props;
    const { COMMON } = useTheme();

    const [isChecked, setIsChecked] = useState();

    const [Type, setType] = useState(toPascalCase(answer));

    const [hourlyAmount, setHourlyAmount] = useState(
        props.hourlyAmount?.toString() || '',
    );
    const [monthlyAmount, setMonthlyAmount] = useState(
        props.monthlyAmount?.toString() || '',
    );
    const [annuallyAmount, setAnnuallyAmount] = useState(
        props.annuallyAmount?.toString() || '',
    );

    const TypesArray = ['Hourly', 'Monthly', 'Annually'];

    const handleDirection = (item, i) => {
        setType(item);
        setIsChecked(i);
    };
    const ValidationSchema = yup.object().shape({
        type: yup.string().required('Select one of types'),
        amount: yup
            .number()
            .min(2, 'Must be 2 characters or more')
            .required('Invalid Amount'),
    });

    const onSubmit = (data) => {
        onComplete({ type: data?.type, amount: data?.amount });
    };

    useEffect(() => {
        if ((hourlyAmount, monthlyAmount, annuallyAmount, Type))
            onComplete({
                type: Type,
                hourlyAmount,
                monthlyAmount,
                annuallyAmount,
            });
    }, [Type, hourlyAmount, monthlyAmount, annuallyAmount]);

    const onChange = (val, i) => {
        switch (i) {
            case 0:
                setHourlyAmount(val);
                break;
            case 1:
                setMonthlyAmount(val);
                break;
            case 2:
                setAnnuallyAmount(val);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <MText
                textStyle={[
                    COMMON.Txtquestion7121,
                    COMMON.SectionPaddingquestion7120,
                ]}>
                How much do you want to make?{' '}
            </MText>
            <View style={COMMON.SectionPaddingquestion7122}>
                <Formik
                    validationSchema={ValidationSchema}
                    initialValues={{ amount: '', type: '' }}
                    // onSubmit={(values) => onSubmit(values)}
                >
                    {({ handleChange, handleSubmit, values, errors }) => (
                        <>
                            {handleSubmit}
                            <MText
                                textStyle={[
                                    COMMON.Txtquestion7127,
                                    COMMON.SectionPaddingquestion7120,
                                ]}>
                                Type *{' '}
                            </MText>
                            <FlatList
                                data={TypesArray}
                                renderItem={({ item, index }) => (
                                    <View>
                                        <View
                                            style={[
                                                COMMON.SectionPaddingquestion7120,
                                                isChecked == index && {
                                                    paddingBottom: scale(10),
                                                },
                                            ]}>
                                            <MCheckBox
                                                hasArrow={true}
                                                IconComponent={
                                                    MaterialCommunityIcons
                                                }
                                                labelContainer={{
                                                    width: scale(250),
                                                }}
                                                Arrow_Name={
                                                    isChecked == index
                                                        ? 'chevron-up'
                                                        : 'chevron-down'
                                                }
                                                isChecked={
                                                    Type == item ||
                                                    isChecked == index
                                                        ? true
                                                        : false
                                                }
                                                setIsChecked={() => {
                                                    handleDirection(
                                                        item,
                                                        index,
                                                    );
                                                }}
                                                style={COMMON.CheckBox128}>
                                                <MText
                                                    textStyle={
                                                        COMMON.TextsCheckBox129
                                                    }>
                                                    {item}
                                                </MText>
                                            </MCheckBox>
                                            {isChecked == index && (
                                                <MInput
                                                    inputStyle={
                                                        COMMON.InputRect126
                                                    }
                                                    containerStyle={
                                                        COMMON.Input124
                                                    }
                                                    error={
                                                        errors && errors.amount
                                                    }
                                                    placeholderColor={
                                                        COLORS.Color267
                                                    }
                                                    textStyle={
                                                        COMMON.TextsInput125
                                                    }
                                                    onChangeText={(text) => {
                                                        handleChange('amount');
                                                        // setAmount(text);
                                                        onChange(text, index);
                                                    }}
                                                    backgroundColor={
                                                        COLORS.Color963
                                                    }
                                                    value={
                                                        index == 0
                                                            ? hourlyAmount
                                                            : index == 1
                                                            ? monthlyAmount
                                                            : annuallyAmount
                                                    }
                                                    keyboardType="number-pad"
                                                    height={verticalScale(48)}
                                                    dolorSign={'USD'}
                                                />
                                            )}
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(index) => index.toString()}
                            />
                            {!Type && (
                                <MText
                                    textStyle={[
                                        styles.error,
                                        COMMON.SectionPaddingquestion7120,
                                    ]}>
                                    {/* {errors && errors.type} */}
                                    Select one of types
                                </MText>
                            )}
                        </>
                    )}
                </Formik>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    Question61796: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
    exteraView: {
        backgroundColor: COLORS.white,
        // width: scale(40),
        justifyContent: 'center',
        borderRadius: scale(10),
        elevation: 5,
        shadowColor: 'rgba(140,140,140,0.16)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 28,
        padding: 10,
        position: 'absolute',
        top: '27%',
        right: scale(10),
    },
    dolor: {
        marginVertical: verticalScale(5),
        fontSize: verticalScale(17),
        fontFamily: 'Muli',
        paddingHorizontal: scale(10),
        alignSelf: 'center',
        color: COLORS.Color209,
    },
    error: {
        color: COLORS.error,
        marginBottom: scale(12),
        fontSize: verticalScale(14),
        fontFamily: 'Muli',
    },
});
export default React.memo(Question2);
