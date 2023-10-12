import React from "react";
import { Text as RNText } from "react-native";
import { styled } from "nativewind";
import { twMerge } from "tailwind-merge";
import { TEXT_SIZE_THEME } from "./textTheme";
const StyledText = styled(RNText);

export interface TextProps {
    bold?: boolean;
    semibold?: boolean;
    light?: boolean;
    italic?: boolean;
    white?: boolean;
    center?: boolean;
    right?: boolean;
    size?: "sm" | "md" | "lg";
    underline?: boolean;
    lineThrough?: boolean;
    numberOfLines?: number;
    onPress?: () => void;
    onLongPress?: () => void;
    textStyle?: string; // NativeWind className
    children?: React.ReactNode | string;
}

const Text = (props: TextProps) => {
    const {
        bold,
        semibold,
        light,
        italic,
        white,
        center,
        right,
        size = "md",
        underline,
        lineThrough,
        numberOfLines = 0,
        onPress,
        onLongPress,
        textStyle = "",
        children,
    } = props;

    const textClassName = twMerge(
        bold ? "font-bold" : "",
        semibold ? "font-semibold" : "",
        light ? "font-light" : "",
        white ? "text-white" : "",
        italic ? "italic" : "",
        size ? TEXT_SIZE_THEME[size] : "",
        underline ? "underline" : "",
        lineThrough ? "line-through" : "",
        center ? "text-center" : "",
        right ? "text-right" : "",
        textStyle
    );

    const onTextPress = () => {
        onPress && onPress();
    };

    const onTextLongPress = () => {
        onLongPress && onLongPress();
    };

    return (
        <StyledText
            numberOfLines={numberOfLines}
            onPress={onPress ? onTextPress : undefined}
            onLongPress={onLongPress ? onTextLongPress : undefined}
            className={textClassName}
        >
            {children}
        </StyledText>
    );
};

export default styled(Text);
