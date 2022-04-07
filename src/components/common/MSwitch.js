import React from 'react';
import { useState } from 'react';
import {StyleSheet, View ,Switch} from 'react-native';

const MSwitch = (props) => {
    const {
      isOn,
      onColor,
      offColor,
      style,
      onBgColor,
      offBgColor,
    } = props;

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View
      style={[
        styles.container,
        style,
      ]}>
        <Switch
          trackColor={{ false: offBgColor, true: onBgColor}}
          thumbColor={isEnabled ? onColor : offColor}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
    
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },

});

export default MSwitch;
