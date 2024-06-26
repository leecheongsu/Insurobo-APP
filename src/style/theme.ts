import { DefaultTheme as DefaultNavigationTheme } from '@react-navigation/native';

const WHITE = '#FFFFFF';
const BLACK = '#000000';
const BLACK2 = '#333';
const BLACK3 = '#666';
const BLACK4 = '#4a4a4a';
const BLUE = '#013561';
const BLUE2 = '#47a5f1';
const TABLE_BACK = '#f2fafc';
const GRAY = '#707070';
const GRAY2 = '#f5f6fa';
const GRAY3 = '#b1b6cc';
const INPUT_GRAY = '#d8d8d8';
const DIVIDER_BACK = '#f6f5f5';
const ROUND_STEPPER = '#ddd';
const BORDER_GRAY = '#e0e0e0';
const BACKGROUND_GRAY = '#cbcbcb';
const SOFTGRAY = '#a3a9be';
const LIGHTGRAY = '#eaeaea';
const MENU_BACKGROUD_COLOR = '#dfe4ea';
const SKYBLUE = '#48a5f2';
const SKYBLUE2 = '#91c3ea';
const SKYBLUE3 = '#1667a8';
const SOFTPUPLE = '#c4d2f1';
const SOFTPUPLE2 = '#4e85ff';
const BLUE_RGB = 'rgba(1, 52, 97, 0.950)';
const GRAY_RGB = 'rgba(203, 203, 203,0.950)';
const WARING_RED = '#fd4173';
const MSG_BACK = '#dedede';
const CIRCLE_BACK = '#e8eaef';
const SOFTBLUE = '#40a1ef';
const YELLOW = '#ffc75f';
const BROWN = '#cc561e';

const theme = {
  color: {
    BLACK,
    BLACK2,
    BLACK3,
    WHITE,
    BLUE,
    BLUE2,
    SKYBLUE,
    SKYBLUE2,
    SKYBLUE3,
    TABLE_BACK,
    GRAY,
    GRAY2,
    GRAY3,
    INPUT_GRAY,
    DIVIDER_BACK,
    BORDER_GRAY,
    ROUND_STEPPER,
    MENU_BACKGROUD_COLOR,
    SOFTPUPLE,
    SOFTBLUE,
    SOFTGRAY,
    LIGHTGRAY,
    SOFTPUPLE2,
    BACKGROUND_GRAY,
    BLUE_RGB,
    GRAY_RGB,
    WARING_RED,
    MSG_BACK,
    BLACK4,
    CIRCLE_BACK,
    YELLOW,
    BROWN,
  },
};

export const navigationTheme = {
  ...DefaultNavigationTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: theme.color.WHITE,
  },
};

export default theme;
