import { Dimensions, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');

const Metrics = {
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
  buttonXs: 26,
  buttonMd: 36,
  buttonLg: 48,

  // Spacing horizontal
  hSpacingXs: 4,
  hSpacingSm: 8,
  hSpacingMd: 12,
  hSpacingLg: 16,
  hSpacingXl: 20,

  // Spacing vertical
  vSpacingXs: 4,
  vSpacingSm: 8,
  vSpacingMd: 12,
  vSpacingLg: 16,
  vSpacingXl: 20,

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
  icSm: 20,
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
