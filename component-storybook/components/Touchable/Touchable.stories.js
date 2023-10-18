import React from 'react';
import {View, Text} from 'react-native';
import {Touchable} from './Touchable';

const TouchableMeta = {
  title: 'Touchable',
  component: Touchable,
  argTypes: {},
  args: {},

  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <View style={{width: 350}}>
          <Story />
        </View>
      </View>
    ),
  ],
};

export default TouchableMeta;

export const Basic = {
  args: {
    style: null,
    children: <Text>Press me!</Text>,
    center: false,
    row: false,
    centerHorizontal: false,
    centerVertical: false,
    onPress: () => {},
    onLongPress: () => {},
    onPressIn: () => {},
    onPressOut: () => {},
  },
};
