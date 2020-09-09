import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { MainScreen } from './screens/MainScreen';
import { AppearanceProvider } from 'react-native-appearance';
import { useColorStyles } from './hooks/useColorStyles';

export default function App() {
  const rootStyle = useColorStyles(styles.rootLight, styles.rootDark);

  return (
    <AppearanceProvider>
      <View style={[styles.root, rootStyle]}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar style={'auto'} animated />
          <MainScreen />
        </SafeAreaView>
      </View>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootLight: {
    backgroundColor: '#fff',
  },
  rootDark: {
    backgroundColor: '#000',
  },
  safeArea: {
    flex: 1,
  },
});
