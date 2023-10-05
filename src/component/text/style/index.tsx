import {StyleSheet} from 'react-native';
import { Themes } from '../../../themes';

export const styles = StyleSheet.create({
  // Text color
  defaultTextColor: {
    color: Themes.colorTextBase,
  },
  primaryTextColor: {
    color: Themes.colorPrimary,
  },
  alertTextColor: {
    color: Themes.colorError,
  },
  infoTextColor: {
    color: Themes.colorWait,
  },
  warningTextColor: {
    color: Themes.colorWarning,
  },
  successTextColor: {
    color: Themes.colorSuccess,
  },
});
