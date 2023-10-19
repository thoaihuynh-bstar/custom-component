import {StyleSheet} from 'react-native';
import {Metrics} from '../themes';

export const StyleUtils = StyleSheet.create({
    ROW: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    CENTER: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    CENTER_V: {
        justifyContent: 'center',
    },
    CENTER_H: {
        alignItems: 'center',
    },

    // AVATAR SIZE
    AVATAR_SM: {
        height: Metrics.AVATAR_SM,
        width: Metrics.AVATAR_SM,
        borderRadius: Metrics.AVATAR_SM / 2,
    },
    AVATAR_MD: {
        height: Metrics.AVATAR_MD,
        width: Metrics.AVATAR_MD,
        borderRadius: Metrics.AVATAR_MD / 2,
    },
    AVATAR_LG: {
        height: Metrics.AVATAR_LG,
        width: Metrics.AVATAR_LG,
        borderRadius: Metrics.AVATAR_LG / 2,
    },

    // ICON SIZE
    ICON_XS: {
        height: Metrics.ICON_XS,
        width: Metrics.ICON_XS,
    },
    ICON_SM: {
        height: Metrics.ICON_SM,
        width: Metrics.ICON_SM,
    },
    ICON_MD: {
        height: Metrics.ICON_MD,
        width: Metrics.ICON_MD,
    },
    ICON_LG: {
        height: Metrics.ICON_LG,
        width: Metrics.ICON_LG,
    },

    // PADDING
    PADDING_H_SM: {
        paddingHorizontal: Metrics.SPACING_SM,
    },
    PADDING_H_MD: {
        paddingHorizontal: Metrics.SPACING_MD,
    },
    PADDING_H_LG: {
        paddingHorizontal: Metrics.SPACING_LG,
    },
});
