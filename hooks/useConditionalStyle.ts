import { CommonStyle } from '../meta/types';

export const useConditionalStyle = (conditionedStyles: [boolean, CommonStyle][]) => {
  return conditionedStyles.filter(c => c[0]).map(c => c[1]);
};
