import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';
import 'react-native-gesture-handler';


const fetchFonts = () => {
  return Font.loadAsync({
    'product-sans': require('./assets/fonts/Product-Sans-Regular.ttf'),
    'product-sans-bold': require('./assets/fonts/Product-Sans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (

    <MealsNavigator />

  )
}
