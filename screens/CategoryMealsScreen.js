import React from 'react';
import MealList from '../components/MealList';

import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';



const CategoryMealScreen = props => {



  const catId = props.route.params.categoryId;

  const availableMeals = useSelector(state=>  state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );



  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <MealList
      listData={displayedMeals}
      navigation={props.navigation} />
  );
};





export default CategoryMealScreen;
