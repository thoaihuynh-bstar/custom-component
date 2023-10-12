import React, { useState } from "react";
import { Pressable, GestureResponderEvent } from "react-native";
import { styled } from "nativewind";
import { twMerge } from "tailwind-merge";
const StyledPressable = styled(Pressable);

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

    const buttonClassName = twMerge(
        center ? "justify-center items-center" : "",
        row ? "flex-row" : "",
        centerHorizontal ? "justify-center" : "",
        centerVertical ? "items-center" : "",
        buttonStyle,
        pressed ? "opacity-60" : ""
    );

    return (
        <StyledPressable
            className={buttonClassName}
            onPress={onButtonPress}
            onLongPress={onButtonLongPress}
            onPressIn={onButtonPressIn}
            onPressOut={onButtonPressOut}
        >
            {children}
        </StyledPressable>
    );
};

export default styled(Touchable);
