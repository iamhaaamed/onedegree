import React, { useEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
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
const Question2 = (props) => {
    const { style, title, answer, page, onComplete } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    const [isChecked, setIsChecked] = useState();
    const [ExteraView, setView] = useState(false);
    const [Dolor, setDolor] = useState('$');
    const [Type, setType] = useState();
    const [Amount, setAmount] = useState('');
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
        console.log(';;;;;;;;;;;;', data);
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
            <MText textStyle={COMMON.Txtquestion7121}>
                How much do you want to make?{' '}
            </MText>
            <View style={COMMON.SectionPaddingquestion7122}>
                <MText textStyle={COMMON.Txtquestion7123}>Amount *</MText>

                <Formik
                    validationSchema={ValidationSchema}
                    initialValues={{ amount: '', type: '' }}
                    // onSubmit={(values) => onSubmit(values)}
                >
                    {({ handleChange, handleSubmit, values, errors }) => (
                        <>
                            {handleSubmit}
                            {ExteraView && (
                                <View style={styles.exteraView}>
                                    <MText
                                        textStyle={styles.dolor}
                                        onPress={() => {
                                            setDolor('£');
                                            setView(false);
                                        }}>
                                        £
                                    </MText>
                                    <MText
                                        textStyle={[
                                            styles.dolor,
                                            { marginTop: 20 },
                                        ]}
                                        onPress={() => {
                                            setDolor('$');
                                            setView(false);
                                        }}>
                                        $
                                    </MText>
                                </View>
                            )}
                            <MInput
                                inputStyle={COMMON.InputRect126}
                                containerStyle={COMMON.Input124}
                                placeholder="Please enter Amount"
                                error={errors && errors.amount}
                                placeholderColor={COLORS.Color267}
                                textStyle={COMMON.TextsInput125}
                                onChangeText={(text) => {
                                    handleChange('amount');
                                    setAmount(text);
                                }}
                                backgroundColor={COLORS.Color963}
                                keyboardType="number-pad"
                                height={verticalScale(48)}
                                iconRight={{
                                    name: 'chevron-down',
                                    color: COLORS.Color267,
                                    onPress: () => setView(!ExteraView),
                                    size: scale(20),
                                }}
                                dolorSign={Dolor}
                            />

                            <MText textStyle={COMMON.Txtquestion7127}>
                                Type *{' '}
                            </MText>
                            <FlatList
                                data={TypesArray}
                                renderItem={({ item, index }) => (
                                    <MCheckBox
                                        isChecked={
                                            isChecked == index ? true : false
                                        }
                                        setIsChecked={() => {
                                            handleDirection(item, index);
                                        }}
                                        style={COMMON.CheckBox128}>
                                        <MText
                                            textStyle={COMMON.TextsCheckBox129}>
                                            {item}
                                        </MText>
                                    </MCheckBox>
                                )}
                                keyExtractor={(index) => index.toString()}
                            />
                            <MText textStyle={styles.error}>
                                {errors && errors.type}
                            </MText>
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
export default Question2;
