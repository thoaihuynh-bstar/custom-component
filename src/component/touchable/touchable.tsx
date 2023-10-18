import React, { useState } from 'react';
import { omit } from 'lodash';
import { Pressable, GestureResponderEvent, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface TouchableProps {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    center?: boolean;
    row?: boolean;
    centerHorizontal?: boolean;
    centerVertical?: boolean;
    onPress: (e: GestureResponderEvent) => void;
    onLongPress?: (e: GestureResponderEvent) => void;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
}

export const Touchable = (props: TouchableProps) => {
    const [pressed, setPressed] = useState<boolean>(false);
    const {
        style,
        children,
        center,
        row,
        centerHorizontal = false,
        centerVertical = false,
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
    } = props;

    const onButtonPress = (e: GestureResponderEvent) => {
        onPress && onPress(e);
    };

    const onButtonLongPress = (e: GestureResponderEvent) => {
        onLongPress && onLongPress(e);
    };

    const onButtonPressIn = (e: GestureResponderEvent) => {
        setPressed(true);
        onPressIn && onPressIn(e);
    };

    const onButtonPressOut = (e: GestureResponderEvent) => {
        setPressed(false);
        onPressOut && onPressOut(e);
    };

    const _containerStyle: StyleProp<ViewStyle> = StyleSheet.flatten([
        {
            ...(row && { flexDirection: 'row' }),
            ...(center && { justifyContent: 'center', alignItems: 'center' }),
            ...(centerHorizontal && { alignItems: 'center' }),
            ...(centerVertical && { justifyContent: 'center' }),
            ...(pressed && { opacity: 0.6 }),
        },
        style,
    ]);

    return (
        <Pressable
            {...omit(props, ['children', 'style'])}
            style={_containerStyle}
            onPress={onButtonPress}
            onLongPress={onButtonLongPress}
            onPressIn={onButtonPressIn}
            onPressOut={onButtonPressOut}
        >
            {children}
        </Pressable>
    );
};
