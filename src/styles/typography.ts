import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_POPPINS = 'Poppins, FontAwesome, sans-serif';

// FONT WEIGHT
export const FONT_WEIGHT_400 = '400';
export const FONT_WEIGHT_700 = '700';
export const FONT_WEIGHT_900 = '900';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_32 = 32;

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_POPPINS,
  fontWeight: FONT_WEIGHT_400,
};
