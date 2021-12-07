import { createStitches } from '@stitches/react';
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  slateDarkA
} from '@radix-ui/colors';
import { container, containerDark, text, textDark } from "./theme.colors"
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      container,
      containerDark,
      text,
      textDark,
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...slateDarkA
    },
  },
  darkTheme: {
    containerDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});