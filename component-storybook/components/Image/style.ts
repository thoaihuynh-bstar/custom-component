import {StyleSheet} from 'react-native';
import {Metrics} from '../themes';

export const styles = StyleSheet.create({
  containerStyle: {
    height: '100%',
    width: '100%',
  },

  xsIcon: {
    height: Metrics.iconXs,
    width: Metrics.iconXs,
  },
  smIcon: {
    height: Metrics.iconSm,
    width: Metrics.iconSm,
  },
  mdIcon: {
    height: Metrics.iconMd,
    width: Metrics.iconMd,
  },
  lgIcon: {
    height: Metrics.iconLg,
    width: Metrics.iconLg,
  },
});
