import React from 'react';
import { COLORS } from 'constants/common';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function Loading(props) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={COLORS.Color289} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...StyleSheet.absoluteFillObject,
    },
});
