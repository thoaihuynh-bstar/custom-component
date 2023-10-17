import {Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

export const Colors = {
  transparent: 'transparent',
  black: '#000000',
  white: '#FFFFFF',
  primary: '#EDA949',
  secondary: '#F2C079',

  greyScale0: '#FFFFFF',
  greyScale1: '#E5E5E5',
  greyScale2: '#808080',
  greyScale3: '#4D4D4D',
  greyScale4: '#2E2E2E',

  blue: '#1F4761',
  darkBlue: '#182933',

  systemColor: {
    alert: '#f4333c',
    success: '#6abf47',
    warning: '#FF9900',
    important: '#ff5b05',
    info: '#108ee9',
  },
};

export const Metrics = {
  // Size Xs | Sm | Md | Lg | Xl | Xxl | Xxxxl

  getStatusBarHeight: () => {
    return StatusBar.currentHeight;
  },
  // Screen width/height
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  // TabBar height
  tabBarHeight: 60,

  // Button  height
  buttonSm: 26,
  buttonMd: 36,
  buttonLg: 48,

  // Spacing
  spacingXs: 4,
  spacingSm: 8,
  spacingMd: 12,
  spacingLg: 16,
  spacingXl: 20,

  // Border width
  borderWidthSm: 0.5,
  borderWidthMd: 1,
  borderWidthLg: 2,

  // Border radius
  radiusXs: 4,
  radiusSm: 6,
  radiusMd: 8,
  radiusLg: 12,

  // Icon size
  iconXs: 16,
  iconSm: 20,
  iconMd: 24,
  iconLg: 32,

  // Fonts size
  fontXs: 10,
  fontSm: 12,
  fontMd: 14,
  fontLg: 16,
  fontXl: 20,
};

export default Metrics;
