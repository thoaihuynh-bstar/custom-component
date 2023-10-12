import React, { useState } from "react";
import { isEmpty } from "lodash";
import {
    Image,
    ColorValue,
    KeyboardType,
    TouchableOpacity,
    TextInput as RNTextInput,
} from "react-native";
import { styled } from "nativewind";
import Text from "../text/text";
import View from "../view/view";
import Images from "../../themes/images";
import { twMerge } from "tailwind-merge";
import { TEXT_INPUT_FOCUS_THEME } from "./textInputTheme";

const StyledInput = styled(RNTextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

export interface TextInputProps {
    inputRef?: any;
    error?: string;
    value: string;
    placeholder?: string;
    label?: string;
    placeholderTextColor?: ColorValue;
    leftComponent?: JSX.Element | JSX.Element[] | React.ReactNode;
    rightComponent?: JSX.Element | JSX.Element[] | React.ReactNode;
    disabled?: boolean;
    focusable?: boolean;
    keyboardType?: KeyboardType;
    isPassword?: boolean;
    multiline?: boolean;
    fillHeight?: boolean;
    centerHorizontalText?: boolean;
    centerVerticalText?: boolean;
    center?: boolean;
    topleft?: boolean;
    autoFocus?: boolean;
    showClearAll?: boolean;
    round?: boolean;
    textColor?: ColorValue;
    containerStyle?: string; // NativeWind className
    labelStyle?: string; // NativeWind className
    inputStyle?: string; // NativeWind className
    iconStyle?: string; // NativeWind className
    onFocus?: () => void;
    onBlur?: () => void;
    onChangeValue: (value: string) => void;
    onSubmitEditing?: () => void;
}

const TextInput = (props: TextInputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const {
        inputRef,
        error = "",
        value = "",
        placeholder,
        label = "",
        placeholderTextColor,
        leftComponent = null,
        rightComponent = null,
        disabled = false,
        keyboardType,
        isPassword = false,
        multiline = false,
        centerHorizontalText = false,
        centerVerticalText = false,
        center = false,
        topleft = false,
        autoFocus = undefined,
        showClearAll = false,
        round = false,
        textColor = "#000000",
        labelStyle = "", // NativeWind className
        containerStyle = "", // NativeWind className
        inputStyle = "", // NativeWind className
        iconStyle = "", // NativeWind className
        onFocus,
        onBlur,
        onChangeValue,
        onSubmitEditing,
    } = props;

    const containerClassName = twMerge(
        `border px-[8px]`,
        round ? "rounded-md" : "",
        containerStyle,
        isFocused ? TEXT_INPUT_FOCUS_THEME.focus : TEXT_INPUT_FOCUS_THEME.unFocus,
        disabled ? "text-stone-400 bg-gray-300 border-gray-400" : ""
    );
    const inputClassName = twMerge(`flex-1 grow border-1 min-h-[48px] border-sky-400`, inputStyle);
    const iconClassName = twMerge(`h-[24px] w-[24px] ml-[4px]`, iconStyle);

    // Input Text alignment
    const textAlign = topleft ? "left" : centerHorizontalText || center ? "center" : undefined;
    const textAlignVertical = topleft ? "top" : centerVerticalText || center ? "center" : undefined;

    const onChangeText = (text: string) => {
        if (!disabled) {
            onChangeValue && onChangeValue(text);
        }
    };

    const onInputBlur = () => {
        setIsFocused(false);
        onBlur && onBlur();
    };

    const onInputFocus = () => {
        setIsFocused(true);
        onFocus && onFocus();
    };

    const onClearAll = () => {
        onChangeValue && onChangeValue("");
    };

    const onTextInputSubmitEditing = () => {
        onSubmitEditing && onSubmitEditing();
    };

    return (
        <>
            {label && (
                <Text textStyle={twMerge(`text-[12px] mb-[6px] mt-[8px]`, labelStyle)}>
                    {label}
                </Text>
            )}
            <View row centerVertical viewStyle={containerClassName}>
                {leftComponent && leftComponent}
                <StyledInput
                    ref={inputRef}
                    value={value}
                    autoFocus={autoFocus}
                    editable={!disabled}
                    placeholder={placeholder}
                    onBlur={onInputBlur}
                    onFocus={onInputFocus}
                    onChangeText={onChangeText}
                    onSubmitEditing={onTextInputSubmitEditing}
                    textAlign={textAlign}
                    keyboardType={keyboardType}
                    style={{ color: textColor }}
                    underlineColorAndroid="transparent"
                    multiline={!isPassword && multiline}
                    textAlignVertical={textAlignVertical}
                    placeholderTextColor={placeholderTextColor}
                    className={inputClassName} // NativeWind className
                    secureTextEntry={!showPassword && isPassword}
                />
                {!isEmpty(value) && showClearAll && (
                    <TouchableOpacity onPress={onClearAll}>
                        <StyledImage source={Images.icClose} className={iconClassName} />
                    </TouchableOpacity>
                )}
                {isPassword && (
                    <StyledTouchableOpacity
                        activeOpacity={0.6}
                        className={"ml-[4px]"}
                        onPress={toggleShowPassword}
                    >
                        <StyledImage
                            source={showPassword ? Images.icEye : Images.icEyeOff}
                            className={iconClassName}
                        />
                    </StyledTouchableOpacity>
                )}
                {rightComponent && rightComponent}
            </View>
            {error && (
                <View viewStyle={"flex-row py-[8px]"}>
                    <Text textStyle={"text-red-500"}>{error}</Text>
                </View>
            )}
        </>
    );
};

export default styled(TextInput);
