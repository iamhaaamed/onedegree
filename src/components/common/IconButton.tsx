import React from 'react';
import {
    ViewStyle,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import MIcon from './MIcon';

type IconButtonProps = TouchableOpacityProps & {
    iconName: string;
    iconSize: number;
    iconColor: string;
    iconStyle: ViewStyle;
    iconComponent: React.ReactNode;
};

export function IconButton(props: IconButtonProps) {
    return (
        <TouchableOpacity
            {...props}
            activeOpacity={0.8}
            style={styles.container}>
            <MIcon
                name={props.iconName}
                size={props.iconSize}
                color={props.iconColor}
                style={props.iconStyle}
                IconComponent={props.iconComponent}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
