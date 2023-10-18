import React from 'react';
import {omit} from 'lodash';
import {Text as RNText, StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Colors} from '../themes';

interface TextProps {
  bold?: boolean;
  semibold?: boolean;
  light?: boolean;
  italic?: boolean;
  white?: boolean;
  center?: boolean;
  right?: boolean;
  size?: number;
  color?: string;
  underline?: boolean;
  lineThrough?: boolean;
  numberOfLines?: number;
  onPress?: () => void;
  onLongPress?: () => void;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export const Text = (props: TextProps) => {
  const {
    bold,
    semibold,
    light,
    italic,
    white,
    center,
    right,
    underline,
    lineThrough,
    numberOfLines = 0,
    color,
    size,
    onPress,
    onLongPress,
    style,
    children,
  } = props;

  const _style: StyleProp<TextStyle> = StyleSheet.flatten([
    {
      ...(color && {color: color}),
      ...(size && {fontSize: size}),
      ...(light && {fontWeight: '400'}),
      ...(semibold && {fontWeight: '600'}),
      ...(bold && {fontWeight: '500'}),
      ...(white && {color: Colors.white}),
      ...(italic && {fontStyle: 'italic'}),
      ...(underline && {textDecorationLine: 'underline'}),
      ...(lineThrough && {textDecorationLine: 'line-through'}),
      ...(center && {textAlign: 'center'}),
      ...(right && {textAlign: 'right'}),
    },
    style,
  ]);

  const onTextPress = () => {
    onPress && onPress();
  };

  const onTextLongPress = () => {
    onLongPress && onLongPress();
  };

  return (
    <RNText
      {...omit(props, ['children', 'style'])}
      numberOfLines={numberOfLines}
      onPress={onPress ? onTextPress : undefined}
      onLongPress={onLongPress ? onTextLongPress : undefined}
      style={_style}>
      {children}
    </RNText>
  );
};
