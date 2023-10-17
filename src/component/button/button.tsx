import React, { useState } from "react";
import {
    Pressable,
    ActivityIndicator,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    TextStyle,
    StyleSheet
} from "react-native";
import { omit } from "lodash";
import { styles } from "./style";
import { Text } from '../../component'

interface ButtonProps {
    loading?: boolean;
    disable?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    activeOpacity?: number;
    children?: React.ReactNode;
    type?: "default" | "outline" | "alert";
    size?: "small" | "medium" | "large";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onPress?: (e: GestureResponderEvent) => void;
    onLongPress?: (e: GestureResponderEvent) => void;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
}

const Button = (props: ButtonProps) => {
    const [pressed, setPressed] = useState<boolean>(false);
    const {
        loading = false,
        style,
        textStyle,
        children,
        type = "default",
        size = "large",
        disable = false,
        leftIcon = null,
        rightIcon = null,
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
            setPressed(true);
            onPressIn && onPressIn(e);
        }
    };

    const onButtonPressOut = (e: GestureResponderEvent) => {
        if (!disable) {
            setPressed(false);
            onPressOut && onPressOut(e);
        }
    };

    const _buttonStyle = StyleSheet.flatten([
        styles.buttonContainer,
        styles[`${size}Button`],
        styles[`${type}Background`],
        { ...(pressed && { opacity: 0.6 }) },
        style,
    ]);

    const _textStyle = [styles[`${size}Text`], styles[`${type}TextColor`], textStyle];

    return (
        <Pressable
            {...omit(props, ["children","style","textStyle"])}
            disabled={disable}
            onPress={onButtonPress}
            onLongPress={onButtonLongPress}
            onPressIn={onButtonPressIn}
            onPressOut={onButtonPressOut}
            style={_buttonStyle}
        >
            {loading ? (
                <ActivityIndicator
                    animating
                    size={"small"}
                    color={styles[`${type}IndicatorColor`].color}
                    style={styles[`${size}Indicator`]}
                />
            ) : null}
            {leftIcon && leftIcon}
            <Text style={_textStyle}>{children}</Text>
            {rightIcon && rightIcon}
        </Pressable>
    );
};

export default Button;
