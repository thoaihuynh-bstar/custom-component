import React from 'react';
import { Text as RNText } from 'react-native';

interface Textprops {
  text: string;
}

const CustomText = (props: Textprops) => {
  return <RNText>Custom Text: {props.text}</RNText>;
};

export { CustomText };
