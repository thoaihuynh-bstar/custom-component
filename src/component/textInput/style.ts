import { StyleSheet } from "react-native";
import {Metrics, Colors} from '../../themes'

export const TEXT_INPUT_FOCUS_THEME = {
    focus: {backgroundColor: Colors.white, borderColor: Colors.greyScale2},
    unFocus: {backgroundColor: Colors.greyScale1, borderColor: Colors.greyScale3}
}

export const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1, paddingHorizontal: Metrics.spacingSm,
        borderColor: Colors.primary

    },
    disableInput: {color:Colors.greyScale2, backgroundColor: Colors.greyScale3, borderColor: Colors.greyScale2},
    titleStyle: {
        fontSize: Metrics.fontXl,
        marginBottom: Metrics.spacingXs,
        marginTop: Metrics.spacingMd
    },
    inputStyle: {
        flex:1,
        flexGrow: 1,
        minHeight: Metrics.buttonLg,
    },
    iconStyle: {
        height: Metrics.iconLg,
        width: Metrics.iconLg,
        marginLeft:Metrics.spacingSm,
    },
    alertContainer: {
        flexDirection: 'row',
        paddingVertical: Metrics.spacingSm
    },
    alertTextColor: {
        color: Colors.systemColor.alert
    }
})