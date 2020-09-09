import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useColorStyles } from '../hooks/useColorStyles';
import { Amount } from './Amount';

interface Props {
  width: number;
  height: number;
  amount: number;
  changes: number;
  name: string;
}

export const SquareBlock: FC<Props> = ({ width, height, name, amount, changes, children }) => {
  const rootStyle = useColorStyles(styles.rootLight, styles.rootDark);
  const titleStyle = useColorStyles(styles.titleLight, styles.titleDark);
  const amountStyle = useColorStyles(styles.amountLight, styles.amountDark);

  return (
    <View style={[styles.root, rootStyle, { width, height }]}>
      <View style={styles.header}></View>
      <View style={styles.footer}>
        <Text style={[styles.title, titleStyle]}>{name}</Text>
        <View style={styles.subtitle}>
          <Amount outerStyles={[styles.amount, amountStyle]} value={amount} />
          <Amount changes outerStyles={[styles.changes]} value={changes} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginLeft: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
  },
  rootLight: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  rootDark: {
    backgroundColor: '#111111',
  },
  title: {
    fontWeight: '800',
    fontSize: 22,
    marginBottom: 5,
  },
  titleLight: {
    color: '#000',
  },
  titleDark: {
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
  },
  footer: {
    flexDirection: 'column',
  },
  changes: {
    fontWeight: '500',
    fontSize: 16,
  },
  amount: {
    fontWeight: '500',
    marginRight: 6,
    fontSize: 16,
  },
  amountLight: {
    color: '#323234',
  },
  amountDark: {
    color: '#c0c0c4',
  },
  numbers: {
    flexDirection: 'row',
  },
  subtitle: {
    flexDirection: 'row',
  },
});
