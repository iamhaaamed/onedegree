import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from 'constants/common';
import { verticalScale, scale, toPascalCase } from 'utils';
import { MStatusBar, MButton, MText, MDropDown } from 'components/common';
import { navigate } from 'navigation/methods';
const Question5 = (props) => {
    const { style, title, answer, page, OnHear } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const [selectedItem, setSelectedItem] = useState(toPascalCase(answer));
    useEffect(() => {
        if (selectedItem) OnHear(selectedItem);
    }, [selectedItem]);
    return (
        <View style={COMMON.SectionPaddingquestion7120}>
            <MText textStyle={COMMON.Txtquestion6104}>
                Where did you hear about OneDegree Careers?{' '}
            </MText>
            <View style={COMMON.SectionPaddingProfile421}>
                <View style={COMMON.DropDown4}>
                    <MDropDown
                        data={CONSTANTS.hearAbout}
                        getSelectedItem={(item) => setSelectedItem(item)}
                        placeholderObject={{
                            label: selectedItem ? selectedItem : 'Craigslist',
                        }} //change label
                        defaultAndroidMode={false}
                        icon={{
                            name: 'keyboard-arrow-down',
                            color: COLORS.Color718,
                            Component: MaterialCommunityIcons,
                        }}
                        style={{
                            container: {
                                elevation: 1,
                                backgroundColor: COLORS?.white,
                                width: scale(320),
                                alignSelf: 'center',
                                borderRadius: 8,
                                shadowColor: 'rgba(140,140,140,0.16)',
                                shadowOpacity: 0.5,
                                shadowOffset: { width: 0, height: 0 },
                            },

                            inputAndroid: COMMON.TextsDropDown6,
                            inputIOS: COMMON.TextsDropDown6,
                            inputAndroidContainer: COMMON.DropDownRect5,
                            inputIOSContainer: COMMON.DropDownRect5,
                        }}
                    />
                    <View style={{ padding: scale(200) }}></View>
                </View>
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
export default React.memo(Question5);
