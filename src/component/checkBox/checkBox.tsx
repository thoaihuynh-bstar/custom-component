import React, { JSXElementConstructor, ReactElement } from "react";
import { Pressable } from "react-native";
import { styled } from "nativewind";
import { Text, Image } from "../../component";
import { twMerge } from "tailwind-merge";
import Images from "../../themes/images";
import { CHECKBOX_SIZE_THEME } from "./checkBoxTheme";
const StyledPressable = styled(Pressable);

export interface CheckBoxProps {
    disable?: boolean;
    checked?: boolean;
    title?: React.ReactNode;
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

const CheckBox = (props: CheckBoxProps) => {
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

    const onCheckBoxPress = () => {
        if (!disable) {
            onPress && onPress();
        }
    };

    const buttonClassName = twMerge(`flex-row items-center`, wrapperStyle);
    const textClassName = twMerge(`ml-[4px]`, textStyle);
    const checkedClassName = twMerge(CHECKBOX_SIZE_THEME[size], checkedIconStyle);
    const unCheckedClassName = twMerge(CHECKBOX_SIZE_THEME[size], unCheckedIconStyle);

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
