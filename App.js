import React from 'react';
import Home from './screens/Home';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }
  return <Home />;
}
