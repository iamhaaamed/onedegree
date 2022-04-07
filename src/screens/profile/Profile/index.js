import React from 'react';
import { View } from 'react-native';
import { MButton, MText } from 'components/common';
import useTheme from 'hooks/useTheme';
import { createScreen } from 'components/elements';

const ProfileScreen = createScreen(({ navigation }) => {
  const { LAYOUT } = useTheme();
  return (
    <View style={[LAYOUT.fill, LAYOUT.center]}>
      <MText iconName="person">Profile Screen</MText>
      <MButton
        text="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}, {});

export default ProfileScreen;
