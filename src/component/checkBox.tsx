import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import View from "./view";
import Text from "./text";
import { twMerge } from "tailwind-merge";
import Images from "../themes/images";
export const StyledImage = styled(Image);
export const StyledTouchableOpacity = styled(TouchableOpacity);

interface StyledButtonProps {
    disable?: boolean;
    isSelected?: boolean;
    activeOpacity?: number;
    title?: string;
    size?: "sm" | "md" | "lg";
    textStyle?: string; // NativeWind className
    containerStyle?: string; // NativeWind className
    onPress?: () => void;
}

const CheckBox = (props: StyledButtonProps) => {
    const {
        disable = false,
        isSelected = false,
        activeOpacity = 0.6,
        title,
        size = "md",
        textStyle = "",
        containerStyle = "",
        onPress,
    } = props;

    const buttonClassName = twMerge(`flex-row items-center ${containerStyle}`);
    const textClassName = twMerge(`ml-[4px] ${textStyle} text-success`);

    const onCheckBoxPress = () => {
        if (!disable) {
            onPress && onPress();
        }
    };

    const checkCheckBoxSize = () => {
        switch (size) {
            case "sm":
                return "h-[16px] w-[16px]";
            case "md":
                return "h-[20px] w-[20px]";
            case "lg":
                return "h-[24px] w-[24px]";
        }
    };

    return (
        <StyledTouchableOpacity
            disabled={disable}
            className={buttonClassName}
            activeOpacity={activeOpacity}
            onPress={onCheckBoxPress}
        >
            {isSelected ? (
                <StyledImage source={Images.icCheck} className={checkCheckBoxSize()} />
            ) : (
                <StyledImage source={Images.icUnCheck} className={checkCheckBoxSize()} />
            )}
            {title ? <Text textStyle={textClassName}>{title}</Text> : null}
        </StyledTouchableOpacity>
    );
};

export default styled(CheckBox);
