import React, { useMemo } from "react";
import { View as RNView } from "react-native";
import { styled } from "nativewind";
export const StyledView = styled(RNView);

interface StyledViewProps {
    row?: boolean;
    wrap?: boolean;
    shrink?: boolean;
    center?: boolean;
    centerHorizontal?: boolean;
    centerVertical?: boolean;
    fillHeight?: boolean;
    fillWidth?: boolean;
    fillParent?: boolean;
    viewStyle?: string; // NativeWind className
    children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNodeArray;
}

export const View = (props: StyledViewProps) => {
    const {
        row = false,
        wrap = false,
        shrink = false,
        center = false,
        centerHorizontal = false,
        centerVertical = false,
        fillHeight = false,
        fillWidth = false,
        fillParent = false,
        viewStyle,
        children,
    } = props;

    const viewClassName = useMemo(
        () => `
        ${row ? "flex-row" : {}}
        ${wrap ? "flex-wrap" : {}}
        ${shrink ? "shrink" : {}}
        ${center ? "justify-center items-center" : {}}
        ${centerHorizontal ? "justify-center" : {}}
        ${centerVertical ? "items-center" : {}}
        ${fillHeight ? "flex-1" : {}}
        ${fillWidth ? "self-stretch grow shrink" : {}}
        ${fillParent ? "flex-1 w-full" : {}}
        ${viewStyle}
      `,
        []
    );

    return <StyledView className={viewClassName}>{children}</StyledView>;
};