import { MCheckBox, MInput, MText } from 'components/common';
import { COLORS } from 'constants/common';
import { Formik } from 'formik';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, toPascalCase, verticalScale } from 'utils';
import * as yup from 'yup';

const Question2 = (props) => {
    const { style, title, answer, page, onComplete, answerAmount } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const [isChecked, setIsChecked] = useState();
    // const [ExteraView, setView] = useState(false);
    const [Type, setType] = useState(toPascalCase(answer));
    const [Amount, setAmount] = useState(answerAmount?.toString() || '');
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
        if ((Amount, Type))
            onComplete({
                type: Type,
                amount: Amount,
            });
    }, [Type, Amount]);
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
                {/* <MText textStyle={COMMON.Txtquestion7123}>Amount </MText> */}

                <Formik
                    validationSchema={ValidationSchema}
                    initialValues={{ amount: '', type: '' }}
                    // onSubmit={(values) => onSubmit(values)}
                >
                    {({ handleChange, handleSubmit, values, errors }) => (
                        <>
                            {handleSubmit}
                            {/* {ExteraView && (
                                <View style={styles.exteraView}>
                                    <MText
                                        textStyle={styles.dolor}
                                        onPress={() => {
                                            setDolor(Dolor == '£' ? '€' : '£');
                                            setView(false);
                                        }}>
                                        {Dolor == '£' ? '€' : '£'}
                                    </MText>
                                    <MText
                                        textStyle={[
                                            styles.dolor,
                                            { marginTop: 20 },
                                        ]}
                                        onPress={() => {
                                            setDolor(Dolor == '$' ? '€' : '$');
                                            setView(false);
                                        }}>
                                        {Dolor == '$' ? '€' : '$'}
                                    </MText>
                                </View>
                            )} */}

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
                                                    // placeholder="Please enter Amount"
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
                                                        setAmount(text);
                                                    }}
                                                    backgroundColor={
                                                        COLORS.Color963
                                                    }
                                                    value={Amount}
                                                    keyboardType="number-pad"
                                                    height={verticalScale(48)}
                                                    // iconRight={{
                                                    //     name: 'chevron-down',
                                                    //     color: COLORS.Color267,
                                                    //     onPress: () => setView(!ExteraView),
                                                    //     size: scale(20),
                                                    // }}

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
        // paddingBottom: scale(10),
    },
});
export default React.memo(Question2);
