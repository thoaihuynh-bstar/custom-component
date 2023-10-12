import React from "react";
import { Image as RNImage } from "react-native";
import { styled } from "nativewind";
import { twMerge } from "tailwind-merge";
import FastImage, { OnLoadEvent } from "react-native-fast-image";
import { isUrl } from "../utils/stringUtils";
export const StyledImage = styled(RNImage);
export const StyledFastImage = styled(FastImage);

interface StyledImageProps {
    source: string;
    iconType?: "xs" | "sm" | "md" | "lg";
    resizeMode?: "contain" | "cover" | "stretch" | "center";
    onLoad?: (data: any) => void;
    imageStyle?: string; // NativeWind className
}

const Image = (props: StyledImageProps) => {
    const { source, resizeMode = "contain", iconType = "", imageStyle = "", onLoad } = props;
    const isString = typeof source === "string";

    const ICON_CLASS_NAME = {
        xs: "h-[12px] w-[12px]",
        sm: "h-[16px] w-[16px]",
        md: "h-[20px] w-[20px]",
        lg: "h-[24px] w-[24px]",
        "": "",
    };

    const imageClassName = twMerge(`
        h-full w-full
        ${ICON_CLASS_NAME[iconType]}
        ${imageStyle}
    `);

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
