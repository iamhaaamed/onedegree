import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import React, { useEffect, useState } from 'react';
import { MCheckBox, MText } from 'components/common';
import { FlatList, StyleSheet, View } from 'react-native';

const Question1 = (props) => {
    const { style, title, answer, page, setAnswer } = props;
    const { COMMON } = useTheme();
    const options = [
        'Aviation',
        'Arts',
        'Business',
        'Education',
        'Law Enforcement',
        'Medical',
        'Service Industry',
        'Technology',
    ];
    const [IndustryArray, setIndustryArray] = useState(
        answer?.split(',') || [],
    );
    useEffect(() => {
        setAnswer(IndustryArray);
    }, [IndustryArray]);

    return (
        <View style={COMMON.SectionPaddingquestion7120}>
            <MText textStyle={COMMON.Txtquestion259}>
                What industries are you interested in?{' '}
            </MText>
            <MText textStyle={COMMON.TextsCheckBox62}>
                Select all that apply
            </MText>
            {/* </MCheckBox> */}
            <View>
                <FlatList
                    data={options}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <MCheckBox
                            iconContainerStyle={{ borderRadius: 5 }}
                            isChecked={IndustryArray.includes(item)}
                            setIsChecked={() => {
                                if (IndustryArray.includes('Not Sure')) {
                                    setIndustryArray([]);
                                } else {
                                    if (IndustryArray.includes(item)) {
                                        setIndustryArray((prev) =>
                                            prev.filter((a) => a !== item),
                                        );
                                    } else {
                                        setIndustryArray((prev) => [
                                            ...prev,
                                            item,
                                        ]);
                                    }
                                }
                            }}
                            style={COMMON.CheckBox61}>
                            <MText
                                textStyle={
                                    index == 8
                                        ? COMMON.TextsCheckBox78
                                        : COMMON.TextsCheckBox62
                                }>
                                {item}
                            </MText>
                        </MCheckBox>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <MCheckBox
                    iconContainerStyle={{ borderRadius: 5 }}
                    isChecked={
                        IndustryArray.includes('Not Sure') ? true : false
                    }
                    setIsChecked={() => {
                        // if (IndustryArray.includes('Not Sure')) {
                        //     setIndustryArray([]);
                        // } else {
                        setIndustryArray(['Not Sure']);
                        // }
                    }}
                    style={COMMON.CheckBox61}>
                    {' '}
                    <MText textStyle={COMMON.TextsCheckBox78}>Not Sure</MText>
                </MCheckBox>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Question61796: {
        backgroundColor: COLORS.Color197,
        height: '100%',
    },
});
export default React.memo(Question1);
