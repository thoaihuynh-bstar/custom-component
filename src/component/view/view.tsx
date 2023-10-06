import {omit} from 'lodash';
import React from 'react';
import {StyleProp, View as RNView} from 'react-native';

export interface ViewProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  style?: StyleProp<any>;
  [x: string]: any;
}

export const View = (props: ViewProps): JSX.Element => {
  const {children, style} = props;

  return (
    <RNView {...omit(props, ['children','style'])} style={style}>
      {children}
    </RNView>
  );
};

