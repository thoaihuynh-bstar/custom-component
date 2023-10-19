import {Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

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
