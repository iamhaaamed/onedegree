import React from 'react';
import { StyleSheet, Image } from 'react-native';

const MImage = ({ imageSource, style }) => {
  return (
    <Image
      style={[styles.image, style]}
      resizeMode={style?.resizeMode ?? null}
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
