import React from "react";
import { View as RNView } from "react-native";
import { styled } from "nativewind";
export const StyledView = styled(RNView);
import { twMerge } from "tailwind-merge";

interface StyledViewProps {
    row?: boolean;
    wrap?: boolean;
    shrink?: boolean;
    center?: boolean;
    centerHorizontal?: boolean;
    centerVertical?: boolean;
    flex?: boolean;
    viewStyle?: string; // NativeWind className
    children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNodeArray;
}

const View = (props: StyledViewProps) => {
    const {
        row = false,
        wrap = false,
        shrink = false,
        center = false,
        centerHorizontal = false,
        centerVertical = false,
        flex = false,
        viewStyle,
        children,
    } = props;

    const viewClassName = twMerge(`
        ${row ? "flex-row" : ""}
        ${wrap ? "flex-wrap" : ""}
        ${shrink ? "shrink" : ""}
        ${center ? "justify-center items-center" : ""}
        ${centerHorizontal ? "justify-center" : ""}
        ${centerVertical ? "items-center" : ""}
        ${flex ? "flex-1" : ""}
        ${viewStyle}
      `);

    return <StyledView className={viewClassName}>{children}</StyledView>;
};

export default styled(View);
