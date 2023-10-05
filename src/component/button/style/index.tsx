import {StyleSheet} from 'react-native';
import {Themes} from '../../../themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Button font size
  smallRawText: {
    fontSize: Themes.fontSizeCaptionSm,
  },
  mediumRawText: {
    fontSize: Themes.fontSizeBase,
  },
  largeRawText: {
    fontSize: Themes.fontSizeCaption,
  },

  // Button font color
  primaryRawText: {
    color: Themes.colors.white,
  },
  warningRawText: {
    color: Themes.colors.white,
  },
  alertRawText: {
    color: Themes.colors.white,
  },
  outlineRawText: {
    color: Themes.colorPrimary,
  },
  linkRawText: {
    color: Themes.colorWait,
    textDecorationLine: 'underline',
  },

  // Button color
  primaryFill: {
    backgroundColor: Themes.colorPrimary,
  },
  warningFill: {
    backgroundColor: Themes.colorWarning,
  },
  alertFill: {
    backgroundColor: Themes.colorError,
  },
  outlineFill: {
    backgroundColor: Themes.colors.white,
    borderWidth: Themes.borderWidthMd,
    borderColor: Themes.colorPrimary,
  },
  linkFill: {
    backgroundColor: Themes.colors.transparent,
  },

  // Button size
  smallButton: {
    width: '100%',
    height: Themes.buttonSm,
    borderRadius: Themes.radiusMd,
  },
  mediumButton: {
    width: '100%',
    height: Themes.buttonMd,
    borderRadius: Themes.radiusMd,
  },
  largeButton: {
    width: '100%',
    height: Themes.buttonLg,
    borderRadius: Themes.radiusMd,
  },

  // Disable button
  primaryDisableFill: {
    backgroundColor: `${Themes.colorPrimary}99`, // Opacity 60%
  },
  warningDisableFill: {
    backgroundColor: `${Themes.colorWarning}99`, // Opacity 60%
  },
  alertDisableFill: {
    backgroundColor: `${Themes.colorError}99`, // Opacity 60%
  },
  outlineDisableFill: {
    backgroundColor: Themes.colors.white,
    borderWidth: Themes.borderWidthMd,
  },
  linkDisableFill: {
    backgroundColor: Themes.colorTextDisabled,
  },

  // Indicator color
  primaryIndicatorColor: {
    color: Themes.colors.white,
  },
  warningIndicatorColor: {
    color: Themes.colors.white,
  },
  alertIndicatorColor: {
    color: Themes.colors.white,
  },
  outlineIndicatorColor: {
    color: Themes.colors.black,
  },
  linkIndicatorColor: {
    color: Themes.colors.black,
  },

  indicator: {
    marginRight: Themes.hSpacingMd,
  },

  linkButtonStyle: {
    height: undefined,
  },
});
