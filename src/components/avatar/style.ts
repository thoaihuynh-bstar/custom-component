import {StyleSheet} from 'react-native';
import {StyleUtils} from '../../utils';
import {Colors, Metrics} from '../../themes';

export const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: Colors.gray1,
    },
    smAvatar: {...StyleUtils.AVATAR_SM},
    mdAvatar: {...StyleUtils.AVATAR_MD},
    lgAvatar: {...StyleUtils.AVATAR_LG},
    editButton: {
        ...StyleUtils.CENTER,
        backgroundColor: Colors.white,
        ...StyleUtils.ICON_MD,
        borderWidth: Metrics.BORDER_MD,
        borderRadius: Metrics.ICON_MD / 2,
        overflow: 'hidden',
        borderColor: Colors.gray2,
        position: 'absolute',
    },
    smPosition: {
        bottom: 0,
        right: 0,
    },
    mdPosition: {
        bottom: 0,
        right: 0,
    },
    lgPosition: {
        bottom: 12,
        right: 16,
    },
});
