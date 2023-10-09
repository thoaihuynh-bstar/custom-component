import {omit} from 'lodash';
import React from 'react';
import {StyleProp, Text as RNText} from 'react-native';
import {styles} from './style';
import { Themes } from '../../themes/metrics';

export interface TextProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  style?: StyleProp<any>;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  medium?: boolean;
  light?: boolean;
  semibold?: boolean;
  bold?: boolean;
  white?: boolean;
  black?: boolean;
  center?: boolean;
  italic?: boolean;
  fontSize?: number;
  underline?: boolean;
  type?: 'default' | 'primary' | 'alert' | 'info' | 'warning' | 'success';
  [x: string]: any;

  color?: string;
  primary?: boolean;
  secondary?: boolean;
  content?: boolean;
}

export const Text = (props: TextProps): JSX.Element => {
  const {
    medium = true,
    bold = false,
    light = false,
    center = false,
    italic = false,
    children,
    style,
    fontSize = 14,
    type = 'default',
    h1 = false,
    h2 = false,
    h3 = false,
    h4 = false,
    h5 = false,
    primary = false,
    secondary = false,
    content = false,
    black = false,
    white = false,
    underline = false,
    color,
    semibold,
  } = props;

  const fontColor = [styles[`${type}TextColor`]];
  let _style: any = [
    fontColor,
    {
      ...(bold ? {fontWeight: '700'} : {}),
      ...(semibold ? {fontWeight: '600'} : {}),
      ...(medium ? {fontWeight: '500'} : {}),
      ...(light ? {fontWeight: '300'} : {}),
      ...(h1 ? {fontSize: 24, lineHeight: 30} : {}),
      ...(h2 ? {fontSize: 20} : {}),
      ...(h3 ? {fontSize: 14} : {}),
      ...(h4 ? {fontSize: 12} : {}),
      ...(h5 ? {fontSize: 10} : {}),
      ...(color ? {color: color} : {}),
      ...(white ? {color: '#ffffff'} : {}),
      ...(black ? {color: '#000000'} : {}),
      ...(center ? {textAlign: 'center'} : {}),
      ...(primary ? {color: Themes.colorPrimary} : {}),
      ...(secondary ? {color: `${Themes.colorPrimary}CC`} : {}),
      ...(content ? {color: Themes.colorTextParagraph} : {}),
      ...(italic ? {fontStyle: 'italic'} : {}),
      ...(underline ? {textDecorationLine: 'underline'} : {}),
      ...{fontSize: fontSize},
    },
    style,
  ];

  return (
    <RNText {...omit(props, ['children'])} style={[_style]}>
      {children}
    </RNText>
  );
};

