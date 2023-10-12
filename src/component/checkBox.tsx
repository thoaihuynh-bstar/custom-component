import React, { JSXElementConstructor, ReactElement, useState } from "react";
import { Pressable } from "react-native";
import { styled } from "nativewind";
import Image from "./image";
import Text from "./text";
import { twMerge } from "tailwind-merge";
import Images from "../themes/images";
const StyledPressable = styled(Pressable);

interface StyledButtonProps {
    disable?: boolean;
    checked?: boolean;
    title?: string | ReactElement<{}, string | JSXElementConstructor<any>>;
    checkedTitle?: string | ReactElement<{}, string | JSXElementConstructor<any>>;
    checkedIcon?: string | number;
    unCheckedIcon?: string | number;
    size?: "sm" | "md" | "lg";
    textStyle?: string; // NativeWind className
    wrapperStyle?: string; // NativeWind className
    checkedIconStyle?: string; // NativeWind className
    unCheckedIconStyle?: string; // NativeWind className
    onPress?: () => void;
}

const CheckBox = (props: StyledButtonProps) => {
    const {
        disable = false,
        checked = false,
        title,
        checkedTitle,
        checkedIcon,
        unCheckedIcon,
        size = "md",
        textStyle = "",
        wrapperStyle = "",
        checkedIconStyle = "",
        unCheckedIconStyle = "",
        onPress,
    } = props;

    const SIZE_CLASS_NAME = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
    };

    const buttonClassName = twMerge(`flex-row items-center`, wrapperStyle);
    const textClassName = twMerge(`ml-[4px]`, textStyle);
    const checkedClassName = twMerge(SIZE_CLASS_NAME[size], checkedIconStyle);
    const unCheckedClassName = twMerge(SIZE_CLASS_NAME[size], unCheckedIconStyle);

    const onCheckBoxPress = () => {
        if (!disable) {
            onPress && onPress();
        }
    };

    return (
        <StyledPressable disabled={disable} className={buttonClassName} onPress={onCheckBoxPress}>
            {checked ? (
                <Image source={checkedIcon || Images.icCheck} imageStyle={checkedClassName} />
            ) : (
                <Image source={unCheckedIcon || Images.icUnCheck} imageStyle={unCheckedClassName} />
            )}
            {title ? (
                <Text textStyle={textClassName}>{(checked && checkedTitle) || title}</Text>
            ) : null}
        </StyledPressable>
    );
};

export default styled(CheckBox);
