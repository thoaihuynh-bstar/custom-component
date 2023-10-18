import React from 'react';
import {View, Text} from 'react-native';
import {ConfirmDialog} from './ConfirmDialog';

const ConfirmDialogMeta = {
  title: 'ConfirmDialog',
  component: ConfirmDialog,
  argTypes: {
    onSubmit: () => {},
  },
  args: {title: 'Confirm dialog'},
  decorators: [
    Story => (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text>Confirm dialog</Text>
        <Story />
      </View>
    ),
  ],
};

export default ConfirmDialogMeta;

export const Basic = {
  args: {
    isVisible: true,
    title: 'Confirm dialog',
    submitText: 'Ok',
    cancelText: 'Cancel',
    onSubmit: () => {},
    onCancel: () => {},
    onBackdropPress: () => {},
    useExternalVisibility: false,
    style: null,
  },
};
