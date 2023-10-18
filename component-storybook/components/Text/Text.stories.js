import React from 'react';
import {View} from 'react-native';
import {Text} from './Text';

const TextMeta = {
  title: 'Text',
  component: Text,
  argTypes: {},
  args: {
    children: 'Default text',
  },

  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default TextMeta;

export const Basic = {
  args: {
    bold: false,
    semibold: false,
    light: false,
    italic: false,
    white: false,
    center: false,
    right: false,
    underline: false,
    lineThrough: false,
    numberOfLines: 1,
    size: 14,
    color: '#000000',
    style: {},
  },
};
