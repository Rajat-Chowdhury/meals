import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
  // console.log(props);
  // console.log(props.route.params.categoryId);
  // console.log(CATEGORIES)

  // console.log(props.navigation.getParam('categoryId'));
  const catId = props.route.params.categoryId;


  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to meal details" onPress={() => {
        props.navigation.navigate('MealDetailScreen');
      }} />
    </View>
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
