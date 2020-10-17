import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import {useSelector} from 'react-redux';

const FavoritesScreen = props => {

  const favMeals = useSelector(state => state.meals.meals);

  

  return <MealList
    listData={favMeals}
    navigation={props.navigation}
  />



};



export default FavoritesScreen;
