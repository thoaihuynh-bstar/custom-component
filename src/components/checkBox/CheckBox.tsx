import React from 'react';
import {Pressable, StyleProp, TextStyle, ViewStyle, ImageStyle, Text} from 'react-native';
import {Image} from '../../components';
import {Images} from '../../themes';
import {styles} from './style';

interface CheckBoxProps {
    disable?: boolean;
    checked?: boolean;
    title?: React.ReactNode;
    checkedTitle?: React.ReactNode;
    checkedIcon?: string | number;
    unCheckedIcon?: string | number;
    size?: 'small' | 'medium' | 'large';
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    checkedIconStyle?: StyleProp<ImageStyle>;
    unCheckedIconStyle?: StyleProp<ImageStyle>;
    onPress?: () => void;
}

export const CheckBox = (props: CheckBoxProps) => {
    const {
        disable = false,
        checked = false,
        title,
        checkedTitle,
        checkedIcon,
        unCheckedIcon,
        size = 'medium',
        textStyle,
        checkedIconStyle,
        unCheckedIconStyle,
        containerStyle,
        onPress,
    } = props;

    const onCheckBoxPress = () => {
        if (!disable) {
            onPress && onPress();
        }
    };

    return (
        <Pressable
            disabled={disable}
            style={[styles.containerStyle, containerStyle]}
            onPress={onCheckBoxPress}
        >
            {checked ? (
                <Image
                    source={checkedIcon || Images.icCheck}
                    imageStyle={[styles[`${size}Icon`], checkedIconStyle]}
                />
            ) : (
                <Image
                    source={unCheckedIcon || Images.icUnCheck}
                    imageStyle={[styles[`${size}Icon`], unCheckedIconStyle]}
                />
            )}
            {title ? (
                <Text style={[styles.titleStyle, textStyle]}>
                    {(checked && checkedTitle) || title}
                </Text>
            ) : null}
        </Pressable>
    );
};
