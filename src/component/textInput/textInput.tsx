import React, { useState } from "react";
import { isEmpty } from "lodash";
import {
    Image,
    ColorValue,
    KeyboardType,
    TextInput as RNTextInput,
    ImageStyle,
    ViewStyle,
    StyleProp,
    TextStyle,
    StyleSheet,
} from "react-native";
import { Text, View } from "../../component";
import { Metrics } from "../../themes";
import { Touchable } from "../../component";
import Images from "../../themes/images";
import { TEXT_INPUT_FOCUS_THEME, styles } from "./style";

export interface TextInputProps {
    inputRef?: any;
    error?: string | JSX.Element | JSX.Element[];
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
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<TextStyle>;
    iconStyle?: StyleProp<ImageStyle>;
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
        titleStyle,
        containerStyle,
        inputStyle,
        iconStyle,
        onFocus,
        onBlur,
        onChangeValue,
        onSubmitEditing,
    } = props;

    const _containerStyle = StyleSheet.flatten([
        styles.containerStyle,
        round && { borderRadius: Metrics.radiusSm },
        containerStyle,
        isFocused ? TEXT_INPUT_FOCUS_THEME.focus : TEXT_INPUT_FOCUS_THEME.unFocus,
        disabled && styles.disableInput,
    ]);

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
            {label && <Text style={[styles.titleStyle, titleStyle]}>{label}</Text>}
            <View row centerVertical style={_containerStyle}>
                {leftComponent && leftComponent}
                <RNTextInput
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
                    underlineColorAndroid="transparent"
                    multiline={!isPassword && multiline}
                    textAlignVertical={textAlignVertical}
                    placeholderTextColor={placeholderTextColor}
                    style={[{ color: textColor }, styles.inputStyle, inputStyle]}
                    secureTextEntry={!showPassword && isPassword}
                />
                {!isEmpty(value) && showClearAll && (
                    <Touchable onPress={onClearAll}>
                        <Image source={Images.icClose} style={[styles.iconStyle, iconStyle]} />
                    </Touchable>
                )}
                {isPassword && (
                    <Touchable onPress={toggleShowPassword}>
                        <Image
                            source={showPassword ? Images.icEye : Images.icEyeOff}
                            style={[styles.iconStyle, iconStyle]}
                        />
                    </Touchable>
                )}
                {rightComponent && rightComponent}
            </View>
            {error && (
                <View style={styles.alertContainer}>
                    <Text style={styles.titleStyle}>{error}</Text>
                </View>
            )}
        </>
    );
};

export default TextInput;
