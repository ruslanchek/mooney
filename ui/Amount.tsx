import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { CommonStyle } from '../meta/types';
import { useConditionalStyle } from '../hooks/useConditionalStyle';
import { useCurrencySign } from '../hooks/useCurrencySign';

interface Props {
  value: number;
  changes?: boolean;
  outerStyles?: CommonStyle[];
}

export const Amount: FC<Props> = ({ value, changes = false, outerStyles = [] }) => {
  const currencySign = useCurrencySign();
  if (value === 0) {
    return null;
  }
  const conditionalStyles = changes
    ? useConditionalStyle([
        [value > 0, styles.rootPositive],
        [value < 0, styles.rootNegative],
      ])
    : [];
  return (
    <Text style={[styles.root, ...conditionalStyles, ...outerStyles]}>
      {changes ? (value > 0 ? '+' : '–') : ''}
      {currencySign}
      {value
        .toLocaleString('en', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })
        .replace('-', '')}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {},
  rootPositive: {
    color: '#279b52',
  },
  rootNegative: {
    color: '#F24F3B',
  },
});
