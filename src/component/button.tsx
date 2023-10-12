import React, { useState } from "react";
import { Text, Pressable, ActivityIndicator, GestureResponderEvent } from "react-native";
import { styled } from "nativewind";
import Colors from "../themes/colors";
import { twMerge } from "tailwind-merge";
const StyledPressable = styled(Pressable);
const StyledActivityIndicator = styled(ActivityIndicator);
const StyledText = styled(Text);

interface StyledButtonProps {
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

const Button = (props: StyledButtonProps) => {
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

    const SIZE_CLASS_NAME = {
        sm: {
            btnHeight: `h-[26px]`,
            text: `text-sm`,
            indicator: 0.6,
        },
        md: {
            btnHeight: `h-[36px]`,
            text: `text-base`,
            indicator: 0.8,
        },
        lg: {
            btnHeight: `h-[48px]`,
            text: `text-lg`,
            indicator: 1,
        },
    };

    const TYPES_CLASS_NAME = {
        default: {
            bg: {
                enable: `bg-sky-700`,
                disable: `bg-sky-700/60`,
            },
            text: `text-white`,
            indicatorColor: Colors.white,
        },
        outline: {
            bg: {
                enable: `bg-white border border-sky-700`,
                disable: `bg-white border border-sky-700/60`,
            },
            text: `text-sky-700`,
            indicatorColor: Colors.systemColor.info,
        },
        alert: {
            bg: {
                enable: `bg-red-600`,
                disable: `bg-red-600/60`,
            },
            text: `text-white`,
            indicatorColor: Colors.white,
        },
    };

    const buttonClassName = twMerge(
        `${SIZE_CLASS_NAME[size].btnHeight} ${
            disable ? TYPES_CLASS_NAME[type].bg.disable : TYPES_CLASS_NAME[type].bg.enable
        } rounded-[6px] px-[6px] flex flex-row items-center justify-center ${
            isLink ? "bg-transparent" : ""
        } ${pressed ? "opacity-60" : ""} ${buttonStyle}`
    );
    const textClassName = twMerge(
        `${TYPES_CLASS_NAME[type].text} font-bold ${SIZE_CLASS_NAME[size].text} ${
            isLink ? "text-sky-700 underline" : ""
        } ${textStyle}`
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
                    color={TYPES_CLASS_NAME[type].indicatorColor}
                    className={"mr-[4px]"}
                    style={{ transform: [{ scale: SIZE_CLASS_NAME[size].indicator }] }}
                />
            ) : null}
            {leftIcon && leftIcon}
            <StyledText className={textClassName}>{children}</StyledText>
            {rightIcon && rightIcon}
        </StyledPressable>
    );
};

export default styled(Button);
