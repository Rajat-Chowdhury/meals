import React, { useState } from 'react';
import { StatusBar, Text, View, } from 'react-native';
// import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import Colors from './constants/Colors';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';


enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer);




export default function App() {


  let [fontsLoaded] = useFonts({
    'product-sans': require('./assets/fonts/Product-Sans-Regular.ttf'),
    'product-sans-bold': require('./assets/fonts/Product-Sans-Bold.ttf')
  });


  if (!fontsLoaded) {
    return <AppLoading />
  }
  else {
    return (
      <>
        <StatusBar translucent backgroundColor='rgba(0,0,0,0.1)' />
        <Provider store={store}>
          <MealsNavigator />
        </Provider>

      </>
    )
  }

}
