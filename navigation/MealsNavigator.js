
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
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { SimpleLineIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native';



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
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let tabOption;
            if (route.name === 'MealsStack') {
              // iconName = focused
              //   ? 'ios-restaurant'
              //   : 'md-square-outline';
              tabOption =
                <MaterialIcons name='restaurant' size={25} color={color} />

            } else if (route.name === 'FavouritesStack') {
              // iconName = focused ? 'md-heart' : 'md-heart-empty';
              tabOption =
                <Ionicons name='md-heart' size={25} color={color} />
            }

            // You can return any component that you like here!
            return tabOption;
          },
        })}
        activeColor='white'
        inactiveColor="rgba(255,255,255,0.5)"

        shifting={true}
      // labeled={focused ? true : false}
      >

        <BottomTab.Screen
          name="MealsStack"
          children={createMealsStack}
          options={{
            title: "Meals",
            tabBarColor: Platform.OS === 'android' ? Colors.primary : 'white',
            activeColor: Platform.OS === 'android' ? 'white' : Colors.primary
          }} />
        <BottomTab.Screen
          name="FavouritesStack"
          children={createFavoritesStack}
          options={{
            title: "Favorites",
            tabBarColor: Platform.OS === 'android' ? Colors.accentColor : 'white',
            activeColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
          }} />
      </BottomTab.Navigator>
    )
  }

  const createMealsStack = (props) => {
    return (
      <Stack.Navigator
        mode="modal"
        screenOptions={defaultOptions}>
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={
            {
              title: 'Meal Categories',
              headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title='sideDrawer'
                    iconName='md-menu'
                    onPress={() => props.navigation.toggleDrawer()} />
                </HeaderButtons>
              )

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
  const createFavoritesStack = (props) => {
    return (
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.accentColor : 'white'
          },
          headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.accentColor
        }} >
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={
            {
              title: 'Favorites',
              headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title='sideDrawer'
                    iconName='md-menu'
                    onPress={() => props.navigation.toggleDrawer()} />
                </HeaderButtons>
              )


            }}
        />
        <Stack.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
          options={
            ({ route }) => (
              {
                title: route.params.title,
                headerRight: ({route}) => (
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

  const createFiltersStack = (props) => {
    return (
      <Stack.Navigator
        mode="modal"
        screenOptions={defaultOptions}>
        <Stack.Screen
          name="FiltersScreen"
          component={FiltersScreen}
          options={{
            title: "Filters",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='sideDrawer'
                  iconName='md-menu'
                  onPress={() => props.navigation.toggleDrawer()} />
              </HeaderButtons>
            )
          }} />
      </Stack.Navigator>
    )
  }


  return (
    <NavigationContainer>
      <Drawer.Navigator >
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
