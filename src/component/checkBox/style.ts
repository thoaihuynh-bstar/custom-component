import { StyleSheet } from "react-native";
import { Metrics } from "../../themes";

export const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleStyle: {
        marginLeft: Metrics.spacingXs,
    },
    smallIcon: {
        height: 16,
        width: 16,
    },
    mediumIcon: {
        height: 20,
        width: 20,
    },
    largeIcon: {
        height: 24,
        width: 24,
    },
});
