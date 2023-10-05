import React, {useMemo} from 'react';
import {
  View,
  Text,
  StyleProp,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './style';

export interface ButtonProps extends TouchableOpacityProps {
  type?: 'primary' | 'warning' | 'alert' | 'outline';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  loading?: boolean;
  icon?: JSX.Element | JSX.Element[];
  rightIcon?: JSX.Element | JSX.Element[];
  activeOpacity?: number;
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  noFeedback?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
  onLongPress?: (e: GestureResponderEvent) => void;
  onPressIn?: (e: GestureResponderEvent) => void;
  onPressOut?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    size = 'large',
    type = 'primary',
    disabled = false,
    noFeedback = false,
    activeOpacity = 0.6,
    icon,
    rightIcon,
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
    style,
    loading,
    ...restProps
  } = props;

  const onButtonPress = (event: GestureResponderEvent) => {
    if (!disabled) {
      onPress && onPress(event);
    }
  };

  const onButtonLongPress = (event: GestureResponderEvent) => {
    if (!disabled) {
      onLongPress && onLongPress(event);
    }
  };

  const onPressInPress = (event: GestureResponderEvent) => {
    if (!disabled) {
      onPressIn && onPressIn(event);
    }
  };
  const onPressOutPress = (event: GestureResponderEvent) => {
    if (!disabled) {
      onPressOut && onPressOut(event);
    }
  };

  let TComponent: any = useMemo(() => {
    if (noFeedback) {
      return TouchableWithoutFeedback;
    } else {
      return TouchableOpacity;
    }
  }, [noFeedback]);

  const textStyle = [styles[`${size}RawText`], styles[`${type}RawText`]];

  const buttonStyle = [
    styles[`${type}Fill`],
    styles[`${size}Button`],
    disabled && styles[`${type}DisableFill`],
  ];

  const indicatorColor = StyleSheet.flatten(
    styles[`${type}IndicatorColor`],
  ).color;

  return (
    <TComponent
      {...restProps}
      style={style}
      accessibilityRole="button"
      activeOpacity={activeOpacity}
      onPress={onButtonPress}
      onLongPress={onButtonLongPress}
      onPressIn={onPressInPress}
      onPressOut={onPressOutPress}
      accessibilityState={{disabled: !!disabled}}>
      <View style={[styles.container, buttonStyle]}>
        {icon && icon}
        {loading ? (
          <ActivityIndicator
            animating
            size="small"
            color={indicatorColor}
            style={styles.indicator}
          />
        ) : null}
        {typeof children === 'string' ? (
          <Text style={textStyle}>{children}</Text>
        ) : (
          children
        )}
        {rightIcon && rightIcon}
      </View>
    </TComponent>
  );
};
