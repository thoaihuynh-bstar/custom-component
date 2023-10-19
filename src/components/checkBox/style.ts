import {StyleSheet} from 'react-native';
import {Metrics} from '../../themes';

export const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleStyle: {
        marginLeft: Metrics.SPACING_XS,
    },
    smIcon: {
        height: 16,
        width: 16,
    },
    mdIcon: {
        height: 20,
        width: 20,
    },
    lgIcon: {
        height: 24,
        width: 24,
    },
});
