import React from 'react';
import { StyleSheet, Image } from 'react-native';

const MImage = ({ imageSource, style, resizeMode }) => {
    return (
        <Image
            style={[styles.image, style]}
            resizeMode={resizeMode ?? null}
            borderRadius={style?.borderRadius ?? null}
            blurRadius={style?.blurRadius ?? null}
            source={imageSource}
        />
    );
};
const styles = StyleSheet.create({
    image: {},
});

export default MImage;
