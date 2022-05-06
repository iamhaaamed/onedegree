import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import { scale, verticalScale, height } from 'utils';
import { useState } from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { useRef } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    MView,
} from 'components/common';
import { SectionRowCenter } from 'components/Sections';
const SearchFilter = (props) => {
    const { style, user, showModal } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const [selectedItem, setSelectedItem] = useState(null);

    const [isChecked, setIsChecked] = useState(false);

    const [sliderValue, setSliderValue] = React.useState([85]);
    const [multiSliderValue, setMultiSliderValue] = React.useState([70, 85]);
    return (
        <MView style={[COMMON.ModalRect1, COMMON.Modal0]}>
            <View style={styles.line} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                <MText textStyle={COMMON.TxtModal2}>
                    Possible Yearly Income{' '}
                </MText>
                <MSlider
                    mb={verticalScale(19)}
                    values={sliderValue}
                    onChange={setSliderValue}
                    min={0}
                    max={100}
                    step={0.5}
                    enableLabel={false}
                    markerContainerStyle={{ top: -17 }}
                    containerStyle={COMMON.Slider3}
                    trackStyle={COMMON.BottomBar5}
                    unselectedStyle={COMMON.BottomBar563}
                    selectedStyle={COMMON.TopBar6}
                    customMarker={() => (
                        <MView style={COMMON.Circle7}>
                            <MText
                                color="rgb(244,96,54)"
                                style={[COMMON.text1008]}>
                                {sliderValue[0]}
                            </MText>
                        </MView>
                    )}></MSlider>

                <MText mb={verticalScale(12)} textStyle={COMMON.TxtModal2}>
                    Training Time{' '}
                </MText>
                <MView style={COMMON.DropDown10}>
                    <MDropDown
                        mb={verticalScale(24)}
                        data={CONSTANTS.dropDown}
                        getSelectedItem={(item) => setSelectedItem(item)}
                        placeholderObject={{ label: '30 minutes' }} //change label
                        defaultAndroidMode={false}
                        textStyle={{ color: COLORS.Color185 }}
                        icon={{
                            name: 'keyboard-arrow-down',
                            color: COLORS.Color185,
                            style: { alignSelf: 'center' },
                            Component: MaterialCommunityIcons,
                        }}
                        style={{
                            container: {
                                backgroundColor: COLORS.white,
                                elevation: 1,
                                borderRadius: 8,
                                shadowColor: 'rgba(140,140,140,0.16)',
                                shadowOpacity: 0.5,
                                shadowOffset: { width: 0, height: 0 },
                            },

                            inputAndroid: COMMON.TextsDropDown12,
                            inputIOS: COMMON.TextsDropDown12,
                            inputAndroidContainer: COMMON.DropDownRect11,
                            inputIOSContainer: COMMON.DropDownRect11,
                        }}
                    />
                </MView>
                <MText mb={verticalScale(11)} textStyle={COMMON.TxtModal2}>
                    Social Impact{' '}
                </MText>
                <MView style={COMMON.DropDown10}>
                    <MDropDown
                        mb={verticalScale(24)}
                        data={CONSTANTS.dropDown}
                        getSelectedItem={(item) => setSelectedItem(item)}
                        placeholderObject={{ label: 'Ensure Good Health' }} //change label
                        defaultAndroidMode={false}
                        icon={{
                            name: 'keyboard-arrow-down',
                            color: COLORS.Color185,
                            Component: MaterialCommunityIcons,
                        }}
                        style={{
                            container: {
                                elevation: 1,
                                backgroundColor: COLORS.white,
                                borderRadius: 8,
                                shadowColor: 'rgba(140,140,140,0.16)',
                                shadowOpacity: 0.5,
                                shadowOffset: { width: 0, height: 0 },
                            },

                            inputAndroid: COMMON.TextsDropDown12,
                            inputIOS: COMMON.TextsDropDown12,
                            inputAndroidContainer: COMMON.DropDownRect11,
                            inputIOSContainer: COMMON.DropDownRect11,
                        }}
                    />
                </MView>
                <MText mb={verticalScale(25)} textStyle={COMMON.TxtModal2}>
                    Certification Cost{' '}
                </MText>
                <MSlider
                    mb={verticalScale(24)}
                    values={sliderValue}
                    onChange={setSliderValue}
                    min={0}
                    max={100}
                    step={0.5}
                    enableLabel={false}
                    markerContainerStyle={{ top: -17 }}
                    containerStyle={COMMON.Slider3}
                    trackStyle={COMMON.BottomBar5}
                    unselectedStyle={COMMON.BottomBar563}
                    selectedStyle={COMMON.TopBar6}
                    customMarker={() => (
                        <MView style={COMMON.Circle7}>
                            <MText
                                color="rgb(244,96,54)"
                                style={[COMMON.text1008]}>
                                {sliderValue[0]}
                            </MText>
                        </MView>
                    )}></MSlider>

                <MText mb={verticalScale(12)} textStyle={COMMON.TxtModal2}>
                    Months To Pay Off{' '}
                </MText>
                <MView style={COMMON.DropDown10}>
                    <MDropDown
                        mb={verticalScale(24)}
                        data={CONSTANTS.dropDown}
                        getSelectedItem={(item) => setSelectedItem(item)}
                        placeholderObject={{ label: '1 Month' }} //change label
                        defaultAndroidMode={false}
                        icon={{
                            name: 'keyboard-arrow-down',
                            color: COLORS.Color185,
                            Component: MaterialCommunityIcons,
                        }}
                        style={{
                            container: {
                                elevation: 1,
                                backgroundColor: COLORS.white,
                                borderRadius: 8,
                                shadowColor: 'rgba(140,140,140,0.16)',
                                shadowOpacity: 0.5,
                                shadowOffset: { width: 0, height: 0 },
                            },

                            inputAndroid: COMMON.TextsDropDown27,
                            inputIOS: COMMON.TextsDropDown27,
                            inputAndroidContainer: COMMON.DropDownRect11,
                            inputIOSContainer: COMMON.DropDownRect11,
                        }}
                    />
                </MView>
                <MText mb={verticalScale(12)} textStyle={COMMON.TxtModal2}>
                    Work Hours{' '}
                </MText>
                <MView style={COMMON.DropDown10}>
                    <MDropDown
                        mb={verticalScale(24)}
                        data={CONSTANTS.dropDown}
                        getSelectedItem={(item) => setSelectedItem(item)}
                        placeholderObject={{ label: '1 Hours' }} //change label
                        defaultAndroidMode={false}
                        icon={{
                            name: 'keyboard-arrow-down',
                            color: COLORS.Color185,
                            Component: MaterialCommunityIcons,
                        }}
                        style={{
                            container: {
                                elevation: 1,
                                backgroundColor: COLORS.white,
                                borderRadius: 8,
                                shadowColor: 'rgba(140,140,140,0.16)',
                                shadowOpacity: 0.5,
                                shadowOffset: { width: 0, height: 0 },
                            },

                            inputAndroid: COMMON.TextsDropDown27,
                            inputIOS: COMMON.TextsDropDown27,
                            inputAndroidContainer: COMMON.DropDownRect11,
                            inputIOSContainer: COMMON.DropDownRect11,
                        }}
                    />
                </MView>
                <MText mb={verticalScale(24)} textStyle={COMMON.TxtModal2}>
                    100% Remote{' '}
                </MText>
                <MView
                    style={[COMMON.RowItem]}
                    mb={verticalScale(24.4398193359375)}>
                    <MView style={{ width: '50%' }}>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            activeBorderColor={COLORS.Color312}
                            activeBackgroundColor={COLORS.Color312}
                            style={COMMON.CheckBox33}>
                            <MText textStyle={COMMON.TextsCheckBox34}>No</MText>
                        </MCheckBox>
                    </MView>
                    <MView style={{ width: '50%' }}>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            activeBorderColor={COLORS.Color312}
                            activeBackgroundColor={COLORS.Color312}
                            style={COMMON.CheckBox33}>
                            <MText textStyle={COMMON.TextsCheckBox34}>
                                Yes
                            </MText>
                        </MCheckBox>
                    </MView>
                </MView>
                <MText mb={verticalScale(25)} textStyle={COMMON.TxtModal2}>
                    Typical Salary{' '}
                </MText>
                <MSlider
                    mb={verticalScale(24)}
                    values={sliderValue}
                    onChange={setSliderValue}
                    min={0}
                    max={100}
                    step={0.5}
                    enableLabel={false}
                    markerContainerStyle={{ top: -17 }}
                    containerStyle={COMMON.Slider3}
                    trackStyle={COMMON.BottomBar5}
                    unselectedStyle={COMMON.BottomBar563}
                    selectedStyle={COMMON.TopBar6}
                    customMarker={() => (
                        <MView style={COMMON.Circle7}>
                            <MText
                                color="rgb(244,96,54)"
                                style={[COMMON.text1008]}>
                                {sliderValue[0]}
                            </MText>
                        </MView>
                    )}></MSlider>

                <MText mb={verticalScale(25)} textStyle={COMMON.TxtModal2}>
                    Starting Salary{' '}
                </MText>
                <MSlider
                    mb={verticalScale(24)}
                    values={sliderValue}
                    onChange={setSliderValue}
                    min={0}
                    max={100}
                    step={0.5}
                    enableLabel={false}
                    markerContainerStyle={{ top: -17 }}
                    containerStyle={COMMON.Slider3}
                    trackStyle={COMMON.BottomBar5}
                    unselectedStyle={COMMON.BottomBar563}
                    selectedStyle={COMMON.TopBar6}
                    customMarker={() => (
                        <MView style={COMMON.Circle7}>
                            <MText
                                color="rgb(244,96,54)"
                                style={[COMMON.text1008]}>
                                {sliderValue[0]}
                            </MText>
                        </MView>
                    )}></MSlider>

                <MText mb={verticalScale(12)} textStyle={COMMON.TxtModal2}>
                    10-Year Growth{' '}
                </MText>
                <MView style={COMMON.DropDown10}>
                    <MDropDown
                        mb={verticalScale(24)}
                        data={CONSTANTS.dropDown}
                        getSelectedItem={(item) => setSelectedItem(item)}
                        placeholderObject={{ label: 'Average' }} //change label
                        defaultAndroidMode={false}
                        icon={{
                            name: 'keyboard-arrow-down',
                            color: COLORS.Color185,
                            Component: MaterialCommunityIcons,
                        }}
                        style={{
                            container: {
                                elevation: 1,
                                backgroundColor: COLORS.white,
                                borderRadius: 8,
                                shadowColor: 'rgba(140,140,140,0.16)',
                                shadowOpacity: 0.5,
                                shadowOffset: { width: 0, height: 0 },
                            },

                            inputAndroid: COMMON.TextsDropDown12,
                            inputIOS: COMMON.TextsDropDown12,
                            inputAndroidContainer: COMMON.DropDownRect11,
                            inputIOSContainer: COMMON.DropDownRect11,
                        }}
                    />
                </MView>
                <MText mb={verticalScale(12)} textStyle={COMMON.TxtModal2}>
                    Type Of Work{' '}
                </MText>
                <MView style={COMMON.DropDown10}>
                    <MDropDown
                        mb={verticalScale(32)}
                        data={CONSTANTS.dropDown}
                        getSelectedItem={(item) => setSelectedItem(item)}
                        placeholderObject={{ label: 'Hourly Wage' }} //change label
                        defaultAndroidMode={false}
                        icon={{
                            name: 'keyboard-arrow-down',
                            color: COLORS.Color185,
                            Component: MaterialCommunityIcons,
                        }}
                        style={{
                            container: {
                                elevation: 1,
                                backgroundColor: COLORS.white,
                                borderRadius: 8,
                                shadowColor: 'rgba(140,140,140,0.16)',
                                shadowOpacity: 0.5,
                                shadowOffset: { width: 0, height: 0 },
                            },

                            inputAndroid: COMMON.TextsDropDown12,
                            inputIOS: COMMON.TextsDropDown12,
                            inputAndroidContainer: COMMON.DropDownRect11,
                            inputIOSContainer: COMMON.DropDownRect11,
                        }}
                    />
                </MView>
                <View style={styles.center}>
                    {/* <SectionRowCenter /> */}
                    <MButton
                        onPress={() => showModal(true)}
                        style={COMMON.ButtonRect114}
                        containerStyle={[COMMON.Button113, { elevation: 5 }]}
                        text="Back"
                        textStyle={[COMMON.TextsButton115]}
                        color={COLORS.Color963}
                    />
                    <MButton
                        onPress={() => showModal(true)}
                        style={[COMMON.ButtonRect111]}
                        containerStyle={COMMON.Button110}
                        text="Filter"
                        textStyle={[COMMON.TextsButton112]}
                        gradient={{
                            colors: [COLORS.Color323, COLORS.Color409],
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
                </View>
            </ScrollView>
        </MView>
    );
};
const styles = StyleSheet.create({
    line: {
        width: '30%',
        alignSelf: 'center',
        backgroundColor: COLORS.Color321,
        padding: 2,
        borderRadius: 5,
        marginBottom: scale(30),
        marginTop: '-5%',
    },
    center: {
        // right: '10%',
        flexDirection: 'row',
        marginTop: '10%',
    },
});
export default SearchFilter;
