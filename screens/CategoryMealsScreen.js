import React from 'react';
import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';



const CategoryMealScreen = props => {



  const catId = props.route.params.categoryId;

  const displayedMeals = MEALS.filter(
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
