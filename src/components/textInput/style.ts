import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../themes';

export const TEXT_INPUT_FOCUS_THEME = {
    focus: { backgroundColor: Colors.white, borderColor: Colors.gray2 },
    unFocus: { backgroundColor: Colors.gray1, borderColor: Colors.gray3 },
};

export const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        paddingHorizontal: Metrics.spacingSm,
        borderColor: Colors.primary,
        alignItems: 'center',
    },
    disableInput: {
        color: Colors.gray2,
        backgroundColor: Colors.gray3,
        borderColor: Colors.gray2,
    },
    titleStyle: {
        fontSize: Metrics.fontXl,
        marginBottom: Metrics.spacingXs,
        marginTop: Metrics.spacingMd,
    },
    inputStyle: {
        flex: 1,
        flexGrow: 1,
        minHeight: Metrics.buttonLg,
    },
    iconStyle: {
        height: Metrics.iconLg,
        width: Metrics.iconLg,
        marginLeft: Metrics.spacingSm,
    },
    alertContainer: {
        flexDirection: 'row',
        paddingVertical: Metrics.spacingSm,
    },
    alertTextColor: {
        color: Colors.systemColor.alert,
    },
});
