import React from 'react';
import {View} from 'react-native';
import {CheckBox} from './CheckBox';

const CheckBoxMeta = {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {
    onPress: {action: 'pressed the CheckBox'},
  },
  args: {
    disable: false,
    title: 'Please press here!',
  },
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default CheckBoxMeta;

export const Basic = {
  args: {
    disable: false,
    checked: false,
    title: 'Please press here!',
    checkedTitle: 'Checked!',
    checkedIcon: null,
    unCheckedIcon: null,
    size: 'medium',
    textStyle: null,
    containerStyle: null,
    checkedIconStyle: null,
    unCheckedIconStyle: null,
    onPress: () => {},
  },
};
