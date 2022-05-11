import React from 'react';
import { IconFallback, scale } from 'utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from 'constants/common';

const MCheckBox = ({
    children,
    labelStyle,
    wrapperStyle,
    isChecked = false,
    setIsChecked,
    labelContainer,
    containerStyle,
    iconSize = 14,
    iconName = 'check',
    iconColor = '#fff',
    iconContainerStyle,
    activeBorderColor = '#707070',
    deActiveBorderColor = '#707070',
    activeBackgroundColor = '#EF6038',
    deActiveBackgroundColor = '#fff',
    hasArrow = false,
    Arrow_Name,
    IconComponent = MaterialIcons,
    IconComponentUp,
}) => {
    const { Icon_Name, Icon_Component } = IconFallback(iconName, IconComponent);

    return (
        <React.Fragment>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={setIsChecked}
                disabled={!setIsChecked}
                style={[styles.wrapperStyle, wrapperStyle]}>
                <View style={[styles.containerStyle, containerStyle]}>
                    <View
                        style={[
                            styles.iconContainer,
                            {
                                width: iconSize + 6,
                                height: iconSize + 6,
                            },
                            isChecked
                                ? {
                                      borderColor: activeBorderColor,
                                      backgroundColor: activeBackgroundColor,
                                  }
                                : {
                                      borderColor: deActiveBorderColor,
                                      backgroundColor: deActiveBackgroundColor,
                                  },
                            iconContainerStyle,
                        ]}>
                        {isChecked ? (
                            <Icon_Component
                                name={Icon_Name}
                                size={iconSize}
                                color={iconColor}
                            />
                        ) : (
                            <View
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                }}
                            />
                        )}
                    </View>
                    {children ? (
                        <View style={labelContainer}>
                            <Text style={[styles.labelStyle, labelStyle]}>
                                {children}
                            </Text>
                        </View>
                    ) : null}
                    {hasArrow && (
                        <Icon_Component
                            name={Arrow_Name}
                            size={scale(20)}
                            color={COLORS?.lightText}
                        />
                    )}
                </View>
            </TouchableOpacity>
        </React.Fragment>
    );
};
const styles = StyleSheet.create({
    wrapperStyle: {
        padding: 4,
    },
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconContainer: {
        padding: 1,
        marginRight: 8,
        aspectRatio: 1,
        borderRadius: 30,
        borderWidth: 1.5,
    },
    divider: {
        width: '88%',
        marginLeft: 24,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ebebeb',
    },
    labelStyle: {},
    checkBox: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default MCheckBox;
