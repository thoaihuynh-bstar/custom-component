import React from 'react';
import {View} from 'react-native';
import {Button} from './Button';

const ButtonMeta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    children: 'Default component',
    size: 'large',
    onPress: () => console.log('Pressed'),
  },
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Basic = {
  args: {
    loading: false,
    disable: false,
    style: {},
    textStyle: {},
    activeOpacity: 0.6,
    children: 'Basic Button',
    type: 'default',
    size: 'large',
    leftIcon: null,
    rightIcon: null,
    onPress: {},
    onLongPress: {},
    onPressIn: {},
    onPressOut: {},
  },
};
