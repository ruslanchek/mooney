import { useColorScheme } from 'react-native-appearance';
import { CommonStyle } from '../meta/types';

export const useColorStyles = (lightStyles: CommonStyle, darkStyles: CommonStyle) => {
  const colorScheme = useColorScheme();
  if (colorScheme === 'dark') {
    return darkStyles;
  }
  return lightStyles;
};
