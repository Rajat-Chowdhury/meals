import React, { useState } from 'react';
import { Text, View } from 'react-native';
// import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import 'react-native-gesture-handler';
// import { enableScreens } from 'react-native-screens';
 
// enableScreens();


// const fetchFonts = () => {
//   return Font.loadAsync({
//     'product-sans': require('./assets/fonts/Product-Sans-Regular.ttf'),
//     'product-sans-bold': require('./assets/fonts/Product-Sans-Bold.ttf')
//   });
// };

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    'product-sans': require('./assets/fonts/Product-Sans-Regular.ttf'),
    'product-sans-bold': require('./assets/fonts/Product-Sans-Bold.ttf')
  });

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );
  // }

  if(!fontsLoaded){
    return <AppLoading />
  }
  else{
    return (
      <MealsNavigator /> 
    )
  }
  
}
