
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';


const Stack = createStackNavigator();



const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories Screen">
        <Stack.Screen
          name="Categories Screen"
          component={CategoriesScreen}
          options={
            {
              title: 'Meal Categories',
              headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
              },
              headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary
            }}
        />
        <Stack.Screen
          name="CategoryMealsScreen"
          component={CategoryMealsScreen}
          options={({ route }) => (
            {
              title: route.params.title,
              headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
              },
              headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary
            }
          )}
        />
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default MealsNavigator;
