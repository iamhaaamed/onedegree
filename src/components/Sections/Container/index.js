import React from 'react';
import { View, StyleSheet, Keyboard, SafeAreaView } from 'react-native';
import { MLoading } from 'components/common';
const Container = ({ style, children, isLoading, loadingOnPage }) => {
    const shouldSetResponse = () => true;
    const onRelease = () => Keyboard.dismiss();
    return (
        <SafeAreaView
            onResponderRelease={onRelease}
            onStartShouldSetResponder={shouldSetResponse}
            style={[style, { flex: 1 }]}>
            {isLoading ? (
                <MLoading size="large" color={'#EF5B31'} />
            ) : (
                <>
                    {children}

                    {loadingOnPage && (
                        <View style={styles.view}>
                            <MLoading size="large" color={'#EF5B31'} />
                        </View>
                    )}
                </>
            )}
        </SafeAreaView>
    );
};
export default React.memo(Container);
const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingBottom: '10%',
        zIndex: 20,
    },
});
