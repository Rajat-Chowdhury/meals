import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import {useSelector} from 'react-redux';

const FavoritesScreen = props => {

  const favMeals = useSelector(state => state.meals.favouriteMeals)

  

  return <MealList
    listData={favMeals}
    navigation={props.navigation}
  />



};


// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

export default FavoritesScreen;
