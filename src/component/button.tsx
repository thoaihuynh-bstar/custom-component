import React, { useMemo } from "react";
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    GestureResponderEvent,
} from "react-native";
import { styled } from "nativewind";
import Colors from "../themes/colors";
export const StyledTouchableOpacity = styled(TouchableOpacity);
export const StyledActivityIndicator = styled(ActivityIndicator);
export const StyledText = styled(Text);


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
    const {
        loading = false,
        buttonStyle = '',
        textStyle = '',
        children,
        isLink = false,
        type = "default",
        size = "lg",
        disable = false,
        activeOpacity = 0.6,
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
            onPressIn && onPressIn(e);
        }
    };

    const onButtonPressOut = (e: GestureResponderEvent) => {
        if (!disable) {
            onPressOut && onPressOut(e);
        }
    };

    const checkButtonSize =() => {
        switch (size) {
            case "sm":
                return `h-[26px]`;
            case "md":
                return `h-[36px]`;
            case "lg":
                return `h-[48px]`;
        }
    };

    const checkButtonBG = () => {
        if (disable) {
            switch (type) {
                case "default":
                    return `bg-sky-700/60`;
                case "outline":
                    return "bg-white/60 border border-sky-700";
                case "alert":
                    return "bg-red-600/60";
            }
        } else {
            switch (type) {
                case "default":
                    return `bg-sky-700`;
                case "outline":
                    return "bg-white border border-sky-700";
                case "alert":
                    return "bg-red-600";
            }
        }
    };

    const checkTextColor = () => {
        switch (type) {
            case "default":
                return "text-white";
            case "outline":
                return "text-sky-700";
            case "alert":
                return "text-white";
        }
    };

    const checkTextSize = () => {
        switch (size) {
            case "sm":
                return `text-sm`;
            case "md":
                return `text-base`;
            case "lg":
                return `text-lg`;
        }
    };

    const checkIndicatorColor = useMemo(() => {
        switch (type) {
            case "default":
                return Colors.white;
            case "outline":
                return Colors.systemColor.info;
            case "alert":
                return Colors.white;
        }
    },['type']);

    const checkIndicatorSize = useMemo(() => {
        switch (size) {
            case "sm":
                return 0.6;
            case "md":
                return 0.8;
            case "lg":
                return 1;
        }
    },['size']);

    const buttonClassName = `${checkButtonSize()} ${checkButtonBG()} rounded-[6px] px-[6px] flex flex-row items-center justify-center ${isLink ? "bg-transparent" : '' } ${buttonStyle}`;
    const textClassName = `${checkTextColor()} font-bold ${checkTextSize()} ${isLink ? 'text-sky-700 underline' : ''} ${textStyle}`;

    return (
        <StyledTouchableOpacity
            disabled={disable}
            className={buttonClassName}
            activeOpacity={activeOpacity}
            onPress={onButtonPress}
            onLongPress={onButtonLongPress}
            onPressIn={onButtonPressIn}
            onPressOut={onButtonPressOut}
        >
            {loading ? (
                <StyledActivityIndicator
                    animating
                    size={"small"}
                    color={checkIndicatorColor}
                    className={"mr-[4px]"}
                    style={{ transform: [{ scale: checkIndicatorSize }] }}
                />
            ) : null}
            {leftIcon && leftIcon}
            <StyledText className={textClassName}>
                {children}
            </StyledText>
            {rightIcon && rightIcon}
        </StyledTouchableOpacity>
    );
};

export default styled(Button);
