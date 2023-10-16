import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../themes";

export const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center', 
        paddingHorizontal: Metrics.spacingSm,
        borderRadius: Metrics.radiusSm,
    },
    // Button size
    smallButton: {height: Metrics.buttonSm},
    mediumButton: {height: Metrics.buttonMd},
    largeButton: {height: Metrics.buttonLg},

    // Font size
    smallText: {fontSize: Metrics.fontSm, fontWeight: "600"},
    mediumText: {fontSize: Metrics.fontMd, fontWeight: '600'},
    largeText: {fontSize: Metrics.fontLg, fontWeight: '600'},

    // Indicator size
    smallIndicator: { transform: [{ scale: 0.6 }] },
    mediumIndicator: { transform: [{ scale: 0.8 }] },
    largeIndicator: { transform: [{ scale: 1 }] },

    // Button background color
    defaultBackground: {backgroundColor: Colors.primary},
    outlineBackground: {
        borderWidth: 1, 
        borderColor: Colors.primary,
        backgroundColor: Colors.white
    },
    alertBackground: {backgroundColor: Colors.systemColor.alert},

    // Text color 
    defaultTextColor: {color: Colors.white},
    outlineTextColor: {color: Colors.primary},
    alertTextColor: {color: Colors.white},

    // Indicator color
    defaultIndicatorColor: {color: Colors.white},
    outlineIndicatorColor: {color: Colors.systemColor.info},
    alertIndicatorColor: {color: Colors.white},
})