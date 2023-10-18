import React from 'react';
import {omit} from 'lodash';
import {View as RNView, StyleProp, StyleSheet, ViewStyle} from 'react-native';

interface ViewProps {
  row?: boolean;
  wrap?: boolean;
  shrink?: boolean;
  center?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  flex?: boolean;
  style?: StyleProp<ViewStyle>;
  children?:
    | JSX.Element
    | JSX.Element[]
    | React.ReactNode
    | React.ReactNodeArray;
}

export const View = (props: ViewProps) => {
  const {
    row = false,
    wrap = false,
    shrink = false,
    center = false,
    centerHorizontal = false,
    centerVertical = false,
    flex = false,
    style,
    children,
  } = props;

  const _viewStyle = StyleSheet.create([
    {...(row && {flexDirection: 'row'})},
    {...(wrap && {flexWrap: 'wrap'})},
    {...(shrink && {flexShrink: 1})},
    {...(center && {justifyContent: 'center', alignItems: 'center'})},
    {...(centerHorizontal && {alignItems: 'center'})},
    {...(centerVertical && {justifyContent: 'center'})},
    {...(flex && {flex: 1})},
    style,
  ]);

  return (
    <RNView {...omit(props, ['children', 'style'])} style={_viewStyle}>
      {children}
    </RNView>
  );
};
