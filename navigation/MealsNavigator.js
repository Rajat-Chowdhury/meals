
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createMaterialBottomTabNavigator();



const MealsNavigator = () => {

  const defaultOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary
  }

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
      <Stack.Navigator
        mode="modal"
        screenOptions={defaultOptions}>
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={
            {
              title: 'Meal Categories'

            }}
        />
        <Stack.Screen
          name="CategoryMealsScreen"
          component={CategoryMealsScreen}
          options={({ route }) => (
            {
              title: route.params.title,

              headerStyle: {
                backgroundColor: Platform.OS === 'android' ? route.params.color : ''
              },
              headerTintColor: Platform.OS === 'android' ? '#fff' : route.params.color



            }
          )}
        />
        <Stack.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
          options={
            ({ route }) => (
              {
                title: route.params.title,
                // headerRight: () => (
                //   <Button
                //     onPress={() => alert('This is a button!')}
                //     title="Info"
                //     color="#fff" />)
                headerRight: () => (
                  <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                    title='Favourite' 
                    iconName='ios-heart'
                    onPress={() => console.log('Mark as fav')} />
                  </HeaderButtons>
                )
              }
              
            )} />
      </Stack.Navigator>
    )
  }
  const createFavoritesStack = () => {
    return (
      <Stack.Navigator
        mode="modal"
        screenOptions={defaultOptions} >
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={
            {
              title: 'Favorites'

            }}
        />
      </Stack.Navigator>
    )
  }

  const createFiltersStack = () => {
    return (
      <Stack.Navigator
        mode="modal"
        screenOptions={defaultOptions}>
        <Stack.Screen name="FiltersScreen" component={FiltersScreen} options={{ title: "Filters" }} />
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
          children={createFiltersStack}
          options={{ title: 'Filters' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};


export default MealsNavigator;
