import { MText, MButton } from 'components/common';
import { createScreen } from 'components/elements';
import useTheme from 'hooks/useTheme';
import ActionSheet from 'react-native-actions-sheet';
import { navigate } from 'navigation/methods';
import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { SectionModalSignOut } from 'components/Sections';
import { scale } from 'utils';
const SettingsScreen = createScreen(() => {
    const { LAYOUT } = useTheme();
    const refActionSheet = useRef(null);
    const showActionSheet = () => {
        if (refActionSheet.current) {
            refActionSheet.current?.setModalVisible();
        }
    };
    return (
        <View style={[LAYOUT.fill, LAYOUT.center]}>
            <MText>Setting Screen</MText>
            <MButton text="Go to Settings" onPress={() => showActionSheet()} />
            <ActionSheet ref={refActionSheet} containerStyle={styles.action}>
                <SectionModalSignOut
                    showModal={() => refActionSheet.current?.setModalVisible()}
                />
            </ActionSheet>
        </View>
    );
}, {});
const styles = StyleSheet.create({
    action: {
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        height: scale(200),
    },
});

export default SettingsScreen;
