import React from "react";
import { Image as RNImage } from "react-native";
import { styled } from "nativewind";
import { twMerge } from "tailwind-merge";
import FastImage, { OnLoadEvent } from "react-native-fast-image";
import { isUrl } from "../../utils/stringUtils";
import { IMAGE_ICON_SIZE_THEME } from "./imageTheme";
const StyledImage = styled(RNImage);
const StyledFastImage = styled(FastImage);

export interface ImageProps {
    source: string;
    iconType?: "xs" | "sm" | "md" | "lg";
    resizeMode?: "contain" | "cover" | "stretch" | "center";
    onLoad?: (data: any) => void;
    imageStyle?: string; // NativeWind className
}

const Image = (props: ImageProps) => {
    const { source, resizeMode = "contain", iconType = "", imageStyle = "", onLoad } = props;
    const isString = typeof source === "string";

    const imageClassName = twMerge(`h-full w-full`, IMAGE_ICON_SIZE_THEME[iconType], imageStyle);

    const onImageLoad = (event: OnLoadEvent) => {
        if (onLoad) {
            onLoad(event);
        }
    };

    return isString && isUrl(source) ? (
        <StyledFastImage
            resizeMode={resizeMode}
            className={imageClassName}
            source={{ uri: source }}
            onLoad={onImageLoad}
        />
    ) : (
        <StyledImage
            resizeMode={resizeMode}
            className={imageClassName}
            source={isString ? { uri: source } : source}
        />
    );
};

export default styled(Image);
