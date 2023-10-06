import React from 'react';
import {Text as RNText,TextProps } from 'react-native';

export interface TextStyleProps {
  textStyle: TextProps['style']
}

export const StyledText = ({textStyle, children, ...props}: TextStyleProps): JSX.Element => {
  return (
    <RNText style={textStyle}>
      {children}
    </RNText>
  );
};

