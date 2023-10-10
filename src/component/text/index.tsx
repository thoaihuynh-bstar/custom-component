import React, { useMemo } from "react";
import { Text, ColorValue } from "react-native";
import { styled } from "nativewind";
export const StyledText = styled(Text);

interface StyledTextProps {
    bold?: boolean;
    semibold?: boolean;
    light?: boolean;
    italic?: boolean;
    black?: boolean;
    white?: boolean;
    center?: boolean;
    right?: boolean;
    size?: number;
    color?: ColorValue;
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
        size,
        color,
        underline,
        lineThrough,
        numberOfLines = 0,
        onPress,
        onLongPress,
        textStyle,
        children,
    } = props;

    const textClassName = useMemo(
        () => `
        ${bold ? "font-bold" : {}}
        ${semibold ? "font-semibold" : {}}
        ${light ? "font-light" : {}}
        ${black ? "text-black" : {}}
        ${white ? "text-white" : {}}
        ${italic ? "italic" : {}}
        ${size ? `text-[${size}px]` : {}}
        ${color ? `text-[${color}]` : {}}
        ${underline ? "underline" : {}}
        ${lineThrough ? "line-through" : {}}
        ${center ? "text-center" : {}}
        ${right ? "text-right" : {}}
        ${textStyle}
      `,
        []
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
            onPress={onTextPress}
            onLongPress={onTextLongPress}
            className={textClassName}
        >
            {children}
        </StyledText>
    );
};

export default styled(Text);
