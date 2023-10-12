import React from "react";
import { Switch as RNSwitch, ColorValue } from "react-native";
import { styled } from "nativewind";
import { twMerge } from "tailwind-merge";
import Colors from "../../themes/colors";
const StyledSwitch = styled(RNSwitch);

export interface SwitchProps {
    disable?: boolean;
    scaleX?: number;
    scaleY?: number;
    enabledTrackColor?: ColorValue;
    disableTrackColor?: ColorValue;
    enabledThumbColor?: ColorValue;
    disableThumbColor?: ColorValue;
    onToggle?: (value: boolean) => void;
}

const Switch = (props: SwitchProps) => {
    const {
        disable = false,
        onToggle,
        scaleX,
        scaleY,
        enabledTrackColor = Colors.primary,
        disableTrackColor = Colors.greyScale1,
        enabledThumbColor = Colors.white,
        disableThumbColor = Colors.white,
    } = props;

    const onSwitchToggle = (value: boolean) => {
        onToggle && onToggle(value);
    };

    const switchClassName = twMerge(``);

    return (
        <StyledSwitch
            className={switchClassName}
            trackColor={{ false: disableTrackColor, true: enabledTrackColor }}
            thumbColor={disable ? disableThumbColor : enabledThumbColor}
            ios_backgroundColor={disableTrackColor}
            onValueChange={onSwitchToggle}
            style={{ transform: [{ scaleX: scaleX || 1 }, { scaleY: scaleY || 0.9 }] }}
            value={disable}
        />
    );
};

export default styled(Switch);
