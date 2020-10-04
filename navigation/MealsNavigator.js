
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createMaterialBottomTabNavigator();



const MealsNavigator = () => {

  // const createSideDrawer = () => {
  //   return(
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="Filters" component={filter} />
  //     </Drawer.Navigator>
  //   )
  // }

  const createBottomTabs = () => {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="MealsStack"
          children={createMealsStack}
          options={{ title: "Categories" }} />
        <BottomTab.Screen
          name="FavouritesStack"
          children={createFavoritesStack}
          options={{ title: "Favorites" }} />
      </BottomTab.Navigator>
    )
  }

  const createMealsStack = () => {
    return (
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
    )
  }
  const createFavoritesStack = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="BottomTabs"
          children={createBottomTabs}
          options={{ title: 'Meals App' }} />
        <Drawer.Screen
          name="FiltersScreen"
          component={FiltersScreen}
          options={{ title: 'Filters' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};


export default MealsNavigator;
