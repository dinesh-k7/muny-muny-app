import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

const dimensions = (top: number, right = top, bottom = top, left = right, property: string) => {
  const styles: any = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

export const margin = (top: number, right: number, bottom: number, left: number) => {
  return dimensions(top, right, bottom, left, 'margin');
};

export const padding = (top: number, right: number, bottom: number, left: number) => {
  return dimensions(top, right, bottom, left, 'padding');
};

export const boxShadow = (
  color?: string,
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
};

export const borderRadius = (radius = 20) => {
  return {
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  };
};
