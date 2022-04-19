import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
} from 'react-native';
import { scale, verticalScale, height } from 'utils';
import useTheme from 'hooks/useTheme';
import { COLORS } from 'constants/common';
import { useRef } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
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
import { goBack, navigate } from 'navigation/methods';
const CELL_COUNT = 6;
const SectionVerification = (props) => {
    const { style } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const [value, setValue] = useState();
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View style={[styles.SectionVerification, style]}>
            <MText textStyle={COMMON.TxtSectionVerification83}>
                Verification{' '}
            </MText>
            <MText textStyle={COMMON.TxtSectionVerification84}>
                The code was sent to sample@mail.com{' '}
            </MText>
            <CodeField
                ref={ref}
                {...prop}
                value={value}
                onChangeText={(txt) => setValue(txt)}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
            {/* <MInput
                inputStyle={COMMON.InputRect86}
                containerStyle={COMMON.Input85}
                backgroundColor={COLORS.Color963}
                height={verticalScale(48)}
            /> */}
            <MText textStyle={COMMON.TxtSectionVerification87}>
                Resend code{' '}
            </MText>
            <MButton
                onPress={() => navigate('Hiquestion2')}
                style={COMMON.ButtonRect89}
                containerStyle={COMMON.Button88}
                text="Verify"
                textStyle={COMMON.TextsButton90}
                gradient={{
                    colors: [
                        COLORS.Color323,
                        COLORS.Color148,
                        COLORS.Color912,
                        COLORS.Color674,
                        COLORS.Color455,
                        COLORS.Color240,
                    ],
                    start: { x: -0.15500132739543915, y: 0.6157848834991455 },
                    end: { x: 1.014054298400879, y: 0.17686034739017487 },
                }}
            />
            <MButton
                onPress={() => goBack()}
                style={COMMON.ButtonRect92}
                containerStyle={COMMON.Button91}
                text="Change Email"
                textStyle={COMMON.TextsButton93}
                transparent
            />
        </View>
    );
};
const styles = StyleSheet.create({
    SectionVerification: {
        paddingBottom: verticalScale(32),
        paddingTop: verticalScale(32),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        width: '100%',
    },
    codeFieldRoot: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: scale(20),
    },
    cell: {
        width: scale(40),
        height: scale(45),
        lineHeight: scale(40),
        fontSize: 24,
        borderWidth: 2,
        borderColor: COLORS.Color321,
        textAlign: 'center',
        borderRadius: scale(10),
        backgroundColor: COLORS.white,
        color: COLORS.textOnSecondary,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    focusCell: {
        borderColor: COLORS.primary,
    },
});
export default SectionVerification;
