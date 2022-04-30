import React, { useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import LottieView from 'lottie-react-native';

/**
 * @typedef {{size: 'small || large' }}
 * */

const MLoading = ({ size, color, animationProps, isLoading }) => {
    let animation = React.createRef();

    useEffect(() => {
        !!animationProps && animation.current.play();
    }, []);
    return isLoading ? (
        <View style={styles.container}>
            {!!animationProps ? (
                <View>
                    <LottieView
                        ref={animation}
                        loop={!!animationProps.loop}
                        style={{
                            width: animationProps.width,
                            height: animationProps.height,
                        }}
                        source={animationProps.source}
                    />
                </View>
            ) : (
                <View style={{ zIndex: 2000 }}>
                    <ActivityIndicator size={size} color={color} />
                </View>
            )}
        </View>
    ) : (
        <></>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        position: 'absolute',
        alignSelf: 'center',
    },
});

export default MLoading;
