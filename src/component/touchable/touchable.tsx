import React, { useState } from "react";
import { Pressable, GestureResponderEvent, StyleSheet } from "react-native";

export interface TouchableProps {
    buttonStyle?: string;
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

const Touchable = (props: TouchableProps) => {
    const [pressed, setPressed] = useState<boolean>(false);
    const {
        buttonStyle = "",
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

    const _containerStyle = StyleSheet.flatten([
        { ...(row && { flexDirection: "row" }) },
        { ...(center && { justifyContent: "center", alignItems: "center" }) },
        { ...(centerHorizontal && { alignItems: "center" }) },
        { ...(centerVertical && { justifyContent: "center" }) },
        buttonStyle,
        { ...(pressed && { opacity: 0.6 }) },
    ]);

    return (
        <Pressable
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

export default Touchable;
