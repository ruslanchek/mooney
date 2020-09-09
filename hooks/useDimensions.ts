import { useEffect, useMemo, useState } from 'react';
import { Dimensions } from 'react-native';

export const useDimensions = () => {
  const getCurrentState = () => {
    const screen = Dimensions.get('screen');
    const window = Dimensions.get('window');
    return {
      screen,
      window,
      orientation: screen.width >= screen.height ? 'landscape' : 'portrait',
    };
  };
  const [state, setState] = useState(getCurrentState());
  const updateState = () => {
    console.log('upd');
    setState(getCurrentState());
  };
  useEffect(() => {
    Dimensions.addEventListener('change', updateState);
    return () => {
      Dimensions.removeEventListener('change', updateState);
    };
  }, []);
  return state;
};
