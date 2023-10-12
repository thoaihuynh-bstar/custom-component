import React, { useState } from "react";
import { Pressable, ActivityIndicator, GestureResponderEvent } from "react-native";
import { styled } from "nativewind";
import { twMerge } from "tailwind-merge";
import { Text } from "../../component";
import { SIZE_THEME, TYPES_THEME } from "./buttonTheme";
const StyledPressable = styled(Pressable);
const StyledActivityIndicator = styled(ActivityIndicator);

export interface ButtonProps {
    loading?: boolean;
    disable?: boolean;
    buttonStyle?: string;
    textStyle?: string;
    activeOpacity?: number;
    isLink?: boolean;
    children: React.ReactNode;
    type?: "default" | "outline" | "alert";
    size?: "sm" | "md" | "lg";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onPress?: (e: GestureResponderEvent) => void;
    onLongPress?: (e: GestureResponderEvent) => void;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
}

const Button = (props: ButtonProps) => {
    const [pressed, setPressed] = useState<boolean>(false);
    const {
        loading = false,
        buttonStyle = "",
        textStyle = "",
        children,
        isLink = false,
        type = "default",
        size = "lg",
        disable = false,
        leftIcon = null,
        rightIcon = null,
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
    } = props;

    const onButtonPress = (e: GestureResponderEvent) => {
        if (!disable) {
            onPress && onPress(e);
        }
    };

    const onButtonLongPress = (e: GestureResponderEvent) => {
        if (!disable) {
            onLongPress && onLongPress(e);
        }
    };

    const onButtonPressIn = (e: GestureResponderEvent) => {
        if (!disable) {
            setPressed(true);
            onPressIn && onPressIn(e);
        }
    };

    const onButtonPressOut = (e: GestureResponderEvent) => {
        if (!disable) {
            setPressed(false);
            onPressOut && onPressOut(e);
        }
    };

    const buttonClassName = twMerge(
        `rounded-[6px] px-[6px] flex flex-row items-center justify-center`,
        SIZE_THEME[size].btnHeight,
        disable ? TYPES_THEME[type].bg.disable : TYPES_THEME[type].bg.enable,
        isLink ? "bg-transparent" : "",
        pressed ? "opacity-60" : "",
        buttonStyle
    );
    const textClassName = twMerge(
        `font-bold`,
        TYPES_THEME[type].text,
        SIZE_THEME[size].text,
        isLink ? "text-sky-700 underline" : "",
        textStyle
    );

    return (
        <StyledPressable
            disabled={disable}
            className={buttonClassName}
            onPress={onButtonPress}
            onLongPress={onButtonLongPress}
            onPressIn={onButtonPressIn}
            onPressOut={onButtonPressOut}
        >
            {loading ? (
                <StyledActivityIndicator
                    animating
                    size={"small"}
                    color={TYPES_THEME[type].indicatorColor}
                    className={"mr-[4px]"}
                    style={{ transform: [{ scale: SIZE_THEME[size].indicator }] }}
                />
            ) : null}
            {leftIcon && leftIcon}
            <Text textStyle={textClassName}>{children}</Text>
            {rightIcon && rightIcon}
        </StyledPressable>
    );
};

export default styled(Button);
