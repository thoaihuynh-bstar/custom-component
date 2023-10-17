import React from 'react';
import {View} from 'react-native';
import {Switch} from './Switch';

const SwitchMeta = {
  title: 'Switch',
  component: Switch,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    disable: true,
    onToggle: () => console.log('Pressed'),
  },
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default SwitchMeta;

export const Basic = {};
