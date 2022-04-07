import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MButton, MText } from 'components/common';
import useTheme from 'hooks/useTheme';
import { createScreen } from 'components/elements';

const pages = [
    { text: 'Signup', navName: 'Signup' },
    { text: 'Signin', navName: 'Signin' },
    { text: 'Forgetpassword', navName: 'Forgetpassword' },
    { text: 'Question2', navName: 'Question2' },
    { text: 'Forgetpassword1', navName: 'Forgetpassword1' },
    { text: 'Hiquestion2', navName: 'Hiquestion2' },
    { text: 'Question6', navName: 'Question6' },
    { text: 'Question7', navName: 'Question7' },
    { text: 'VerifyEmail', navName: 'VerifyEmail' },
    { text: 'Gettingstarted3', navName: 'Gettingstarted3' },
];

const HomeScreen = createScreen(
    ({ navigation, route }) => {
        const { TYPOGRAPHY, LAYOUT, GUTTERS } = useTheme();
        return (
            <View style={[LAYOUT.fill, LAYOUT.center, styles.screen]}>
                <MText
                    containerStyle={[GUTTERS.smallVMargin]}
                    textStyle={TYPOGRAPHY.titleRegular}>
                    Model Template
                </MText>
                {pages.map((page) => (
                    <View key={page.navName}>
                        <MButton
                            text={page.text}
                            onPress={() => navigation.navigate(page.navName)}
                            type="native"
                        />
                    </View>
                ))}
            </View>
        );
    },
    { scrollView: true },
);

const styles = StyleSheet.create({
    screen: {},
});

export default HomeScreen;
