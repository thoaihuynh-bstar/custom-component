import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../themes';

export const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: Metrics.SPACING_SM,
        borderRadius: Metrics.RADIUS_SM,
    },
    // Button size
    smButton: {height: Metrics.BUTTON_SM},
    mdButton: {height: Metrics.BUTTON_MD},
    lgButton: {height: Metrics.BUTTON_LG},

    // Font size
    smText: {fontSize: Metrics.FONT_SM, fontWeight: '600'},
    mdText: {fontSize: Metrics.FONT_MD, fontWeight: '600'},
    lgText: {fontSize: Metrics.FONT_LG, fontWeight: '600'},

    // Indicator size
    smIndicator: {transform: [{scale: 0.6}], marginRight: Metrics.SPACING_XS},
    mdIndicator: {transform: [{scale: 0.8}], marginRight: Metrics.SPACING_XS},
    lgIndicator: {transform: [{scale: 1}], marginRight: Metrics.SPACING_XS},

    // Button background color
    defaultBackground: {backgroundColor: Colors.primary},
    outlineBackground: {
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
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
});
