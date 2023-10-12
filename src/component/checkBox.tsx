import React, { JSXElementConstructor, ReactElement, useState } from "react";
import { TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import Image from "./image";
import Text from "./text";
import { twMerge } from "tailwind-merge";
import Images from "../themes/images";
export const StyledTouchableOpacity = styled(TouchableOpacity);

interface StyledButtonProps {
    disable?: boolean;
    checked?: boolean;
    activeOpacity?: number;
    title?: string | ReactElement<{}, string | JSXElementConstructor<any>>;
    checkedTitle?: string | ReactElement<{}, string | JSXElementConstructor<any>>;
    checkedIcon?: string | number;
    unCheckedIcon?: string | number;
    size?: "sm" | "md" | "lg";
    textStyle?: string; // NativeWind className
    wrapperStyle?: string; // NativeWind className
    onPress?: () => void;
}

const CheckBox = (props: StyledButtonProps) => {
    const {
        disable = false,
        checked = false,
        activeOpacity = 0.6,
        title,
        checkedTitle,
        checkedIcon,
        unCheckedIcon,
        size = "md",
        textStyle = "",
        wrapperStyle = "",
        onPress,
    } = props;

    const buttonClassName = twMerge(`flex-row items-center ${wrapperStyle}`);
    const textClassName = twMerge(`ml-[4px] ${textStyle}`);

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
            {checked ? (
                <Image source={checkedIcon || Images.icCheck} imageStyle={checkCheckBoxSize()} />
            ) : (
                <Image
                    source={unCheckedIcon || Images.icUnCheck} imageStyle={checkCheckBoxSize()} />
            )}
            {title ? (
                <Text textStyle={textClassName}>{(checked && checkedTitle) || title}</Text>
            ) : null}
        </StyledTouchableOpacity>
    );
};

export default styled(CheckBox);
