/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { Dimensions } from 'react-native';
import { scale } from 'utils';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

/**
 * Colors
 */
export const COLORS = {
    // Example colors:
    transparent: 'transparent',
    inputBackground: '#FFFFFF',
    white: '#ffffff',
    text: '#212529',
    primary: '#3f51b5',
    secondary: '#ffb300',
    textOnPrimary: '#ffffff',
    textOnSecondary: '#000000',
    success: '#28a745',
    error: '#dc3545',
    inputText: '#212529',
    placeholder: '#86888a',
    background: 'whitesmoke',
    disabled: '#989898',
    Color963: '#FFFFFF',
    Color209: '#2C2121',
    Color726: 'rgba(0,0,0,0.87)',
    Color280: 'rgba(123,123,123,0.87)',
    Color321: '#E2DFDD',
    Color323: '#EF5B31',
    Color148: '#EF6038',
    Color912: '#F06841',
    Color674: '#F1734F',
    Color455: 'rgba(241,122,88,0.91)',
    Color240: '#FF9070',
    Color672: '#FDFCFE',
    Color206: '#F0F0F0',
    Color718: '#1492E6',
    Color525: '#2259DC',
    Color596: '#F9F9F9',
    Color758: '#999999',
    Color886: '#595151',
    Color603: '#EF5D34',
    Color289: '#F46036',
    Color267: '#A29F9E',
    Color409: '#F17451',
    Color276: 'rgba(0,0,0,0.05)',
    Color516: '#235BE0',
    Color611: '#FFFFFF',
    Color424: '#414770',
    Color378: '#F5663D',
    Color197: '#F9F9F9',
    Color718: '#707070',
    Color571: '#2C2121',
    Color182: '#EDEDED',
    Color786: 'rgba(0,0,0,0.87)',
    Color745: 'rgba(148,148,148,0.87)',
    Color565: '#A6ABB8',
    Color508: '#F34014',
    Color522: '#AAAAAA',
    Color375: '#343434',
    Color700: '#818181',
    Color134: '#F14318',
    backMainIcon: '#F4F1EE',
    Color327: '#FDFDFD',
    Color756: '#2E3A59',
    backMore: '#F3F3F3',
    actionLine: '#3A3A3A',
};

export const NAVIGATION_COLORS = {
    primary: COLORS.primary,
    tabBarActiveTint: COLORS.primary,
    tabBarInactiveTint: COLORS.disabled,
};

/**
 * FontSizes
 */
export const FONT_SIZE = {
    tiny: 6,
    small: 8,
    regular: 12,
    large: 16,
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    icon: 20,
    button: 12,
};

/**
 * Metrics Sizes
 */
const nano = scale(3);
const tiny = scale(6);
const small = scale(12);
const regular = scale(16);
const large = scale(32);
export const METRIC_SIZES = {
    nano,
    tiny,
    small,
    regular,
    large,
};
