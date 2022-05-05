import React, { memo } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CustomKeyboardAwareScrollView = ({ children, ...otherProps }) => {
    return (
        <KeyboardAwareScrollView
            enableResetScrollToCoords={false}
            {...otherProps}>
            {children}
        </KeyboardAwareScrollView>
    );
};

export default memo(CustomKeyboardAwareScrollView);
