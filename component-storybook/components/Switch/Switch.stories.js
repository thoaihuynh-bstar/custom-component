import React from 'react';
import {View} from 'react-native';
import {Switch} from './Switch';
import {Colors} from '../themes';

const SwitchMeta = {
  title: 'Switch',
  component: Switch,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    disable: false,
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

export const Basic = {
  args: {
    disable: false,
    scaleX: 0.9,
    scaleY: 1,
    enabledTrackColor: '#EDA949',
    disableTrackColor: '#CECECE',
    enabledThumbColor: '#FFFFFF',
    disableThumbColor: '#FFFFFF',
    onToggle: () => {},
  },
};
