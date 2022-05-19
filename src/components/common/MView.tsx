import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    SxProps,
    MarginProps,
    PaddingProps,
    ReactChildren,
} from '../../../types';

export type MViewProps = SxProps &
    ReactChildren & {
        flex: number;
    };

const MView = (props: MViewProps) => (
    <View
        {...props}
        style={StyleSheet.compose(props.style, styles(props).container)}>
        {props.children}
    </View>
);

const styles = (props: MarginProps & PaddingProps) => {
    const {
        m,
        mb,
        ml,
        mr,
        mt,
        mx,
        my,
        p,
        pb,
        pl,
        pr,
        pt,
        px,
        py,
        flex,
    } = props;

    return StyleSheet.create({
        container: {
            ...(m && { margin: m }),
            ...(my && { marginVertical: my }),
            ...(mx && { marginHorizontal: mx }),
            ...(mb && { marginBottom: mb }),
            ...(ml && { marginLeft: ml }),
            ...(mr && { marginRight: mr }),
            ...(mt && { marginTop: mt }),
            ...(p && { padding: p }),
            ...(py && { paddingVertical: py }),
            ...(px && { paddingHorizontal: px }),
            ...(pb && { paddingBottom: pb }),
            ...(pl && { paddingLeft: pl }),
            ...(pr && { paddingRight: pr }),
            ...(pt && { paddingTop: pt }),
            ...(flex && { flex: flex }),
        },
    });
};

export default MView;
