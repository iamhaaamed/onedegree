import { MButton } from 'components/common';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from 'utils';

const SectionRowCenter = (props) => {
    const { style, nextPress, backPress, intro, questions, TextStyle } = props;
    const { COMMON } = useTheme();
    // const [isHovered, setIsHovered] = useState(false);
    const [isBack, setIsBack] = useState(false);

    return (
        <View style={[styles.SectionRowCenter, style]}>
            <MButton
                onPress={backPress}
                onPressIn={() => setIsBack(true)}
                onPressOut={() => setIsBack(false)}
                style={
                    intro
                        ? [
                              COMMON.ButtonRect1142,
                              isBack && {
                                  backgroundColor:
                                      'rgba(255,255,255,0.1607843137254902 )',
                              },
                          ]
                        : COMMON.ButtonRect114
                }
                containerStyle={[COMMON.Button113, { borderRadius: 8 }]}
                text="Back"
                // type={intro ? 'highlight' : 'none'}
                underlayColor={intro ? COLORS.Color276 : 'transparent'}
                textStyle={[
                    COMMON.TextsButton115,
                    intro && { color: COLORS.white },
                ]}
                color={COLORS.Color963}
            />
            <MButton
                onPress={nextPress}
                // onPressIn={() => setIsHovered(true)}
                // onPressOut={() => setIsHovered(false)}
                style={[
                    COMMON.ButtonRect111,
                    intro && { backgroundColor: 'white' },
                ]}
                type="opacity"
                underlayColor={intro ? COLORS.white : 'transparent'}
                containerStyle={[
                    COMMON.Button110,
                    { borderRadius: 12, width: '50%' },
                ]}
                text={questions ? 'Save' : 'Next'}
                textStyle={[
                    COMMON.TextsButton112,
                    intro && {
                        color: COLORS.Color323,
                    },
                ]}
                gradient={
                    intro
                        ? false
                        : {
                              colors: [COLORS.Color323, COLORS.Color409],
                              start: {
                                  x: -0.15500132739543915,
                                  y: 0.6157848834991455,
                              },
                              end: {
                                  x: 1.014054298400879,
                                  y: 0.17686034739017487,
                              },
                          }
                }
            />
        </View>
    );
};
const styles = StyleSheet.create({
    SectionRowCenter: {
        // paddingBottom: verticalScale(27),
        // paddingTop: verticalScale(27),
        paddingRight: scale(32),
        paddingLeft: scale(32),
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
    },
});
export default React.memo(SectionRowCenter);
