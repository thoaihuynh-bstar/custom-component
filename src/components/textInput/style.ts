import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../themes';

export const TEXT_INPUT_FOCUS_THEME = {
    focus: {backgroundColor: Colors.white, borderColor: Colors.gray2},
    unFocus: {backgroundColor: Colors.gray1, borderColor: Colors.gray3},
};

export const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        paddingHorizontal: Metrics.SPACING_SM,
        borderColor: Colors.primary,
        alignItems: 'center',
    },
    disableInput: {
        color: Colors.gray2,
        backgroundColor: Colors.gray3,
        borderColor: Colors.gray2,
    },
    titleStyle: {
        fontSize: Metrics.FONT_XL,
        marginBottom: Metrics.SPACING_XS,
        marginTop: Metrics.SPACING_MD,
    },
    inputStyle: {
        flex: 1,
        flexGrow: 1,
        minHeight: Metrics.BUTTON_LG,
    },
    iconStyle: {
        height: Metrics.ICON_LG,
        width: Metrics.ICON_LG,
        marginLeft: Metrics.SPACING_SM,
    },
    alertContainer: {
        flexDirection: 'row',
        paddingVertical: Metrics.SPACING_SM,
    },
    alertTextColor: {
        color: Colors.systemColor.alert,
    },
});
