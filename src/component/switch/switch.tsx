import React from 'react';
import { Switch as RNSwitch, ColorValue } from 'react-native';
import { Colors } from '../../themes';

interface SwitchProps {
    disable?: boolean;
    scaleX?: number;
    scaleY?: number;
    enabledTrackColor?: ColorValue;
    disableTrackColor?: ColorValue;
    enabledThumbColor?: ColorValue;
    disableThumbColor?: ColorValue;
    onToggle?: (value: boolean) => void;
}

export const Switch = (props: SwitchProps) => {
    const {
        disable = false,
        onToggle,
        scaleX,
        scaleY,
        enabledTrackColor = Colors.primary,
        disableTrackColor = Colors.gray1,
        enabledThumbColor = Colors.white,
        disableThumbColor = Colors.white,
    } = props;

    const onSwitchToggle = (value: boolean) => {
        onToggle && onToggle(value);
    };

    return (
        <RNSwitch
            trackColor={{ false: disableTrackColor, true: enabledTrackColor }}
            thumbColor={disable ? disableThumbColor : enabledThumbColor}
            ios_backgroundColor={disableTrackColor}
            onValueChange={onSwitchToggle}
            style={{ transform: [{ scaleX: scaleX || 1 }, { scaleY: scaleY || 0.9 }] }}
            value={disable}
        />
    );
};
