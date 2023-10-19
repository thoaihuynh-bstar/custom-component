import {StyleSheet} from 'react-native';
import {Metrics} from '../../themes';

export const styles = StyleSheet.create({
    containerStyle: {
        height: '100%',
        width: '100%',
    },

    xsIcon: {
        height: Metrics.ICON_XS,
        width: Metrics.ICON_XS,
    },
    smIcon: {
        height: Metrics.ICON_SM,
        width: Metrics.ICON_SM,
    },
    mdIcon: {
        height: Metrics.ICON_MD,
        width: Metrics.ICON_MD,
    },
    lgIcon: {
        height: Metrics.ICON_LG,
        width: Metrics.ICON_LG,
    },
});
