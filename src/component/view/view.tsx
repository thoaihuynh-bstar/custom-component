import React from "react";
import { View as RNView, StyleProp, StyleSheet, ViewStyle } from "react-native";

interface ViewProps {
    row?: boolean;
    wrap?: boolean;
    shrink?: boolean;
    center?: boolean;
    centerHorizontal?: boolean;
    centerVertical?: boolean;
    flex?: boolean;
    viewStyle?: StyleProp<ViewStyle>; // NativeWind className
    children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNodeArray;
}

const View = (props: ViewProps) => {
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

    const _viewStyle = StyleSheet.create([
        { ...(row && { flexDirection: "row" }) },
        { ...(wrap && { flexWrap: "wrap" }) },
        { ...(shrink && { flexShrink: 1 }) },
        { ...(center && { justifyContent: "center", alignItems: "center" }) },
        { ...(centerHorizontal && { alignItems: "center" }) },
        { ...(centerVertical && { justifyContent: "center" }) },
        { ...(flex && { flex: 1 }) },
        viewStyle,
    ]);

    return <RNView style={_viewStyle}>{children}</RNView>;
};

export default View;
