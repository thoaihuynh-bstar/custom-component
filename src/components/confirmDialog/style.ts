import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../themes';

export const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: Colors.white,
        borderRadius: Metrics.radiusLg,
        padding: Metrics.spacingSm,
        marginHorizontal: Metrics.spacingSm,
    },
    blurModal: {
        minHeight: 20,
        borderRadius: 8,
        paddingVertical: 28,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
    },
    halfScreenButton: {width: '45%'},
    fullScreenButton: {width: '100%'},
    buttonView: {marginTop: 8},
});
