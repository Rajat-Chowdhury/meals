
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';



const Stack = createStackNavigator();



const MealsNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories Screen" component={CategoriesScreen} />
        <Stack.Screen name="Category Meals Screen" component={CategoryMealsScreen} />
        <Stack.Screen name="Meal Detail Screen" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default MealsNavigator;
