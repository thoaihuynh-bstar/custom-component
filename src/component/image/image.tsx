import React from "react";
import { Image as RNImage, ImageStyle, StyleProp, StyleSheet } from "react-native";
import FastImage, { OnLoadEvent } from "react-native-fast-image";
import { isUrl } from "../../utils/stringUtils";
import { styles} from "./style";

interface ImageProps {
    source: string;
    iconType?: "xs" | "sm" | "md" | "lg";
    resizeMode?: "contain" | "cover" | "stretch" | "center";
    onLoad?: (data: any) => void;
    imageStyle?: StyleProp<ImageStyle>;
}

const Image = (props: ImageProps) => {
    const { source, resizeMode = "contain", iconType, imageStyle, onLoad } = props;
    const isString = typeof source === "string";


    const onImageLoad = (event: OnLoadEvent) => {
        if (onLoad) {
            onLoad(event);
        }
    };

    const _ImageStyle: StyleProp<ImageStyle>  = StyleSheet.flatten([styles.containerStyle, iconType && styles[`${iconType}Icon`], imageStyle])

    return isString && isUrl(source) ? (
        <FastImage
            resizeMode={resizeMode}
            source={{ uri: source }}
            onLoad={onImageLoad}
            style={_ImageStyle}
        />
    ) : (
        <RNImage
            resizeMode={resizeMode}
            source={isString ? { uri: source } : source}
            style={_ImageStyle}
        />
    );
};

export default Image;
