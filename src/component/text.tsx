import React from "react";
import { Text as RNText, ColorValue } from "react-native";
import { styled } from "nativewind";
import { twMerge } from "tailwind-merge";
export const StyledText = styled(RNText);

interface StyledTextProps {
    bold?: boolean;
    semibold?: boolean;
    light?: boolean;
    italic?: boolean;
    black?: boolean;
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

const Text = (props: StyledTextProps) => {
    const {
        bold,
        semibold,
        light,
        italic,
        black,
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

    const checkTextSize = () => {
        switch (size) {
            case "sm":
                return `text-sm `;
            case "md":
                return `text-[14px] `;
            case "lg":
                return `text-[16px] `;
        }
    };

    const textClassName =twMerge(`
        ${bold ? "font-bold" : ""}
        ${semibold ? "font-semibold" : ""}
        ${light ? "font-light" : ""}
        ${black ? "text-black" : ""}
        ${white ? "text-white" : ""}
        ${italic ? "italic" : ""}
        ${size ? checkTextSize() : ""}
        ${underline ? "underline" : ""}
        ${lineThrough ? "line-through" : ""}
        ${center ? "text-center" : ""}
        ${right ? "text-right" : ""}
        ${textStyle}
      `);

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
