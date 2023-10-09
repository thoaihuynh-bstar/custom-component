import React, { useMemo } from "react";
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    GestureResponderEvent,
} from "react-native";
import { styled } from "nativewind";
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
    onPress?: (e: GestureResponderEvent) => void;
    onLongPress?: (e: GestureResponderEvent) => void;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
}

const Button = (props: StyledButtonProps) => {
    const {
        loading = false,
        buttonStyle,
        textStyle,
        children,
        isLink = false,
        type = "default",
        size = "lg",
        disable = false,
        activeOpacity = 0.6,
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

    const checkButtonSize = useMemo(() => {
        switch (size) {
            case "sm":
                return "h-[26]";
            case "md":
                return "h-[36]";
            case "lg":
                return "h-[48]";
        }
    }, [size]);

    const checkButtonBG = useMemo(() => {
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
    }, [type, disable]);

    const checkTextColor = useMemo(() => {
        switch (type) {
            case "default":
                return "text-white";
            case "outline":
                return "text-sky-700";
            case "alert":
                return "text-white";
        }
    }, [type]);

    const checkTextSize = useMemo(() => {
        switch (size) {
            case "sm":
                return "text-[10px]";
            case "md":
                return "text-[12px]";
            case "lg":
                return "text-[14px]";
        }
    }, [size]);

    const checkIndicatorColor = useMemo(() => {
        switch (type) {
            case "default":
                return "#FFFFFF";
            case "outline":
                return "#0369a1";
            case "alert":
                return "#FFFFFF";
        }
    }, [type]);

    const checkIndicatorSize = useMemo(() => {
        switch (size) {
            case "sm":
                return 0.6;
            case "md":
                return 0.8;
            case "lg":
                return 1;
        }
    }, [size]);

    const buttonClassName = `${checkButtonSize} ${checkButtonBG} rounded-[6px] px-[6px] flex flex-row items-center justify-center`;
    const textClassName = `${checkTextColor} ${checkTextSize} font-bold`;
    const buttonLinkStyle = `bg-transparent`;
    const textLinkStyle = `text-sky-700 underline`;

    return (
        <StyledTouchableOpacity
            disabled={disable}
            className={`${buttonClassName} ${buttonStyle} ${isLink && buttonLinkStyle}`}
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
            <StyledText className={`${textClassName} ${textStyle} ${isLink && textLinkStyle}`}>
                {children}
            </StyledText>
        </StyledTouchableOpacity>
    );
};

export default styled(Button);
