import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from '../data/dummy-data';



const CategoryMealScreen = props => {

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        isVegan={itemData.item.isVegan}
        isVegetarian={itemData.item.isVegetarian}
        onSelectMeal={() => { props.navigation.navigate('MealDetailScreen', {
            mealId: itemData.item.id,
            title: itemData.item.title
          })}
        } />
    )
  }

  const catId = props.route.params.categoryId;

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );



  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }} />
    </View>
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

export default CategoryMealScreen;
