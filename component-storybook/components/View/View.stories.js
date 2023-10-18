import React from 'react';
import {View} from './View';
import {Text} from 'react-native';

const ViewMeta = {
  title: 'View',
  component: View,
  argTypes: {},
  args: {
    children: <Text>Basic View</Text>,
  },

  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default ViewMeta;

export const Basic = {
  args: {
    row: false,
    wrap: false,
    shrink: false,
    center: false,
    centerHorizontal: false,
    centerVertical: false,
    flex: false,
    style: {backgroundColor: 'cyan', height: 100, width: 200},
    children: <Text>Basic View</Text>,
  },
};
