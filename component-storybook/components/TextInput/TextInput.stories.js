import React from 'react';
import {View} from 'react-native';
import {TextInput} from './TextInput';

const TextInputMeta = {
  title: 'TextInput',
  component: TextInput,
  argTypes: {},
  args: {
    placeholder: 'Default TextInput',
  },

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

export default TextInputMeta;

export const Basic = {
  args: {
    error: null,
    value: null,
    placeholder: 'Vui lòng nhập giá trị',
    label: 'Title',
    placeholderTextColor: null,
    leftComponent: null,
    rightComponent: null,
    disabled: false,
    keyboardType: 'default',
    isPassword: false,
    multiline: false,
    centerHorizontalText: false,
    centerVerticalText: false,
    center: false,
    topLeft: false,
    autoFocus: null,
    showClearAll: true,
    round: true,
    textColor: '#000000',
    titleStyle: null,
    containerStyle: null,
    inputStyle: null,
    iconStyle: null,
    onFocus: () => {},
    onBlur: () => {},
    onChangeValue: () => {},
    onSubmitEditing: () => {},
  },
};
