import React, { FC, useMemo } from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { SquareBlock } from '../ui/SquareBlock';
import { Amount } from '../ui/Amount';
import { useDimensions } from '../hooks/useDimensions';
import { useColorScheme } from 'react-native-appearance';

interface Props {}

export const MainScreen: FC<Props> = ({ children }) => {
  const { window } = useDimensions();
  const colorScheme = useColorScheme();
  const totalAmount = 18091.22;
  const totalChanges = 4022;
  const blockWidth = window.width - 30;
  const blockHeight = (window.width - 30) / 2;
  return (
    <View style={styles.root}>
      <View style={styles.total}>
        <Amount outerStyles={[styles.totalAmount]} value={totalAmount} />
        <Amount outerStyles={[styles.totalChanges]} changes value={totalChanges} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <SquareBlock width={blockWidth} height={blockHeight} amount={33.87} changes={100} name='Cash' />
        <SquareBlock width={blockWidth} height={blockHeight} amount={1200.0} changes={-2100.12} name='Epayments' />
        <SquareBlock width={blockWidth} height={blockHeight} amount={3029.01} changes={0} name='Hellenic' />
        <SquareBlock width={blockWidth} height={blockHeight} amount={10000.22} changes={5000} name='Transferwise' />
      </ScrollView>
      <View style={[styles.tabBar, { width: window.width }]}>
        <BlurView
          intensity={100}
          tint={colorScheme === 'dark' ? 'dark' : 'light'}
          style={[styles.blur, { width: window.width }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scroll: {
    paddingRight: 15,
  },
  blur: {
    height: 50,
  },
  tabBar: {
    height: 50,
    bottom: 0,
    left: 0,
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.05)',
  },
  total: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  totalAmount: {
    fontSize: 34,
    fontWeight: '600',
    marginRight: 10,
  },
  totalChanges: {
    fontSize: 20,
    fontWeight: '600',
  },
});
