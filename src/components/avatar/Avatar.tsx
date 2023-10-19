import React from 'react';
import {GestureResponderEvent, StyleProp, ViewStyle, View, ImageStyle} from 'react-native';
import {Image, Touchable} from '../../components';
import {Images, Metrics} from '../../themes';
import {styles} from './style';
import {StyleUtils} from '../../utils';

interface AvatarProps {
    size?: 'sm' | 'md' | 'lg';
    source?: string;
    resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ImageStyle>;
    onPress?: (e: GestureResponderEvent) => void;
}

export const Avatar = (props: AvatarProps) => {
    const {size = 'sm', source, resizeMode = 'contain', containerStyle, style, onPress} = props;

    const onEditPress = (e: GestureResponderEvent) => {
        onPress && onPress(e);
    };

    return (
        <View style={[styles[`${size}Avatar`], containerStyle]}>
            <Image
                resizeMode={resizeMode}
                source={Images.icAvatar}
                style={[styles[`${size}Avatar`], style]}
            />
            {!!onPress && (
                <Touchable
                    hitSlop={Metrics.HIT_SLOPS_SM}
                    style={[styles.editButton, styles[`${size}Position`]]}
                    onPress={onEditPress}
                >
                    <Image source={source || Images.icEdit} style={StyleUtils.ICON_SM} />
                </Touchable>
            )}
        </View>
    );
};
