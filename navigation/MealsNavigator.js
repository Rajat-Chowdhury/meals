
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { Dimensions, Platform, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createMaterialBottomTabNavigator();



const MealsNavigator = () => {

  const defaultOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''

    },
    headerTitleStyle: {
      fontFamily: 'product-sans-bold'
    },
    headerBackStyle: {
      fontFamily: 'product-sans'
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
        lazy={true}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let tabOption;
            if (route.name === 'MealsStack') {

              tabOption =
                <MaterialIcons name='restaurant' size={25} color={color} />

            } else if (route.name === 'FavouritesStack') {

              tabOption =
                <Ionicons name='md-heart' size={25} color={color} />
            }

            return tabOption;
          },


          tabBarOptions: { labelStyle: { fontFamily: 'product-sans-bold', fontSize: 20 } }


        })}
        tabBarOptions={{ labelStyle: { fontFamily: 'product-sans-bold' } }}
        activeColor='white'
        // labelStyle = {{fontFamily:'product-sans', fontSize:50}}
        inactiveColor="rgba(255,255,255,0.5)"
        shifting={true}
        tabBarOptions={{
          labelStyle: {
            fontFamily: 'product-sans-bold '
          }
        }}
      // labeled={focused ? true : false}
      >

        <BottomTab.Screen
          name="MealsStack"
          children={createMealsStack}
          options={{
            title: "Meals",
            tabBarColor: Platform.OS === 'android' ? Colors.primary : 'white',
            activeColor: Platform.OS === 'android' ? 'white' : Colors.primary,
            tabBarLabel: <Text style={{
              fontFamily: 'product-sans-bold',
              color: Platform.OS === 'android' ? 'white' : Colors.primary
            }}>Meals</Text>

          }} />
        <BottomTab.Screen
          name="FavouritesStack"
          children={createFavoritesStack}
          options={{
            title: "Favorites",
            tabBarColor: Platform.OS === 'android' ? Colors.accentColor : 'white',
            activeColor: Platform.OS === 'android' ? 'white' : Colors.accentColor,
            tabBarLabel: <Text style={{
              fontFamily: 'product-sans-bold',
              color: Platform.OS === 'android' ? 'white' : Colors.accentColor
            }} >Favorites</Text>
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
              title: 'Cuisines',
              headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title='sideDrawer'
                    iconName='md-menu'
                    iosColor='grey'
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
                      iosColor='grey'
                      onPress={() => console.log(route)} />
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
          ...defaultOptions,
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
                    iosColor='grey'
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
                headerRight: ({ route }) => (
                  <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                      title='Favourite'
                      iconName='ios-heart'
                      iosColor='grey'
                      onPress={() => console.log('mrak as fav')} />
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
                  iosColor='grey'
                  onPress={() => props.navigation.toggleDrawer()} />
              </HeaderButtons>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='save'   
                  iosColor={Colors.primary} 
                  onPress={() =>  props.route.state.routes[0].params.save()} />
              </HeaderButtons>
            )
          }} />
      </Stack.Navigator>
    )
  }


  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ height: Dimensions.get('window').height - 30 }} >
          <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginBottom: 0 }}>
            <DrawerItem
              label={() => <Text style={{
                color: 'tomato',
                fontFamily: 'product-sans-bold',
                fontSize: 30
              }}>Meals App</Text>}
              icon={({ focused }) => (
                <MaterialCommunityIcons
                  name="food"
                  size={60}
                  color={focused ? Colors.primary : '#ccc'} />)}
              onPress={() => alert('Thank you for using Meals App')}
            />
          </View>


          <View style={{ flex: 1 }}>
            <DrawerItemList {...props} />
          </View>


          <View >
            <DrawerItem
              label="Made by RAJAT"
              icon={({ focused }) => (
                <Entypo name="google-play" size={24} color="lightgrey" />)}
              onPress={() => alert('Rate on Playstore')}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }



  return (
    <NavigationContainer>
      <Drawer.Navigator
        lazy={true}
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeBackgroundColor: 'lightgrey',
          labelStyle: { fontFamily: 'product-sans-bold', fontSize: 15 },
          itemStyle: { marginHorizontal: 0, padding: 5 },

        }} >
        <Drawer.Screen
          name="BottomTabs"
          children={createBottomTabs}
          options={{
            title: 'Meals ',
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="md-restaurant"
                size={24}
                color={focused ? Colors.primary : '#ccc'} />)
          }} />
        <Drawer.Screen
          name="FiltersScreen"
          children={createFiltersStack}
          options={{
            title: 'Filters',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="filter"
                size={24}
                color={focused ? Colors.primary : '#ccc'} />)
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};


export default MealsNavigator;
