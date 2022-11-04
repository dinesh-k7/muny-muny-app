import {WHITE, GRAY_DARK, ACTIVE, ALERT} from './colors';
import {FONT_REGULAR, FONT_SIZE_32, FONT_SIZE_16, LINE_HEIGHT_16} from './typography';

export const headingText = {
  fontFamily: FONT_REGULAR.fontFamily,
  fontSize: FONT_SIZE_32,
};

export const regularText = {
  fontFamily: FONT_REGULAR.fontFamily,
  fontSize: FONT_SIZE_16,
  lineHeight: LINE_HEIGHT_16,
};

// Auth Component common styles
export const buttonGradient = {
  borderRadius: 8,
  height: 56,
  marginHorizontal: 8,
  flexDirection: 'row',
};

export const buttonGradientText = {
  color: WHITE,
  textAlign: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 18,
  margin: 14,
};

export const iconStyle = {
  padding: 10,
  alignItems: 'center',
  color: GRAY_DARK,
};

export const linkText = {
  marginRight: 8,
  color: ACTIVE,
  textAlign: 'right',
  margin: 'auto',
};

export const snackBarError = {
  backgroundColor: ALERT,
};
