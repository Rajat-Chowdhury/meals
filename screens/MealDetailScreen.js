import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';

import DefaultText from '../components/DefaultText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals'

const ListItem = (props) => {

  const [completed, setCompleted] = useState(false);

  const toggleCompletedHandler = () => {
    setCompleted(completed => !completed);
  }

  return (
    <TouchableHighlight onPress={toggleCompletedHandler}>
      <View style={completed ? styles.itemCompleted : styles.item} >
        <DefaultText style={styles.itemText} >{props.children}</DefaultText>
      </View>
    </TouchableHighlight>
  )
}

const MealDetailScreen = props => {

  const availableMeals = useSelector(state => state.meals.meals)

  const mealId = props.route.params.mealId;

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const tags = [selectedMeal.isLactoseFree, selectedMeal.isGlutenFree];

 const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(selectedMeal.id));
  }, [dispatch, mealId])

  useEffect(
    props.navigation.setParams({toggleFav : toggleFavoriteHandler})
    , [toggleFavoriteHandler])


  let lactoseColor = 'rgb(219,68,55)';
  let lactoseBackground = 'rgba(219,68,55,0.15)';
  let lactoseText = 'Contains Lactose'

  if (tags[0]) {
    lactoseColor = 'rgb(66,133,244)';
    lactoseBackground = 'rgba(66,133,244,0.15)';
    lactoseText = 'Lactose free'
  }

  let glutenColor = 'rgb(244,160,0)';
  let glutenBackground = 'rgba(244,160,0,0.15)';
  let glutenText = 'Contains Gluten'

  if (tags[1]) {
    glutenColor = "rgb(15,157,88)";
    glutenBackground = "rgba(15,157,88,0.15)";
    glutenText = "Gluten free"
  }

  let foodType;
  if (selectedMeal.isVegan) {
    foodType = "Vegan"
  }
  else if (selectedMeal.isVegetarian) {
    foodType = "Vegetarian"
  }
  else {
    foodType = "Non vegetarian"
  }

  return (
    <ScrollView >
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} resizeMode="cover" style={styles.image} />
      </View>
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <View style={{ ...styles.tagContainer, backgroundColor: lactoseBackground }}>
          <DefaultText style={{ color: lactoseColor }}>{lactoseText}</DefaultText>
        </View>
        <View style={{ ...styles.tagContainer, backgroundColor: glutenBackground }}>
          <DefaultText style={{ color: glutenColor }}>{glutenText}</DefaultText>
        </View>
      </View>


      <View style={styles.details}>
        <View style={styles.impDetail}>
          <View style={styles.label}>
            <MaterialIcons name="access-time" size={24} color="black" />
            <DefaultText style={styles.text}> Duration</DefaultText>
          </View>
          <DefaultText style={{ ...styles.text, ...styles.info }}>{selectedMeal.duration} min</DefaultText>
        </View>
        <View style={styles.impDetail}>
          <View style={styles.label}>
            <MaterialCommunityIcons name="puzzle-outline" size={24} color="black" />
            <DefaultText style={styles.text}> Complexity</DefaultText>
          </View>
          <DefaultText style={{ ...styles.text, ...styles.info }}>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        </View>
        <View style={styles.impDetail}>
          <View style={styles.label}>
            <MaterialCommunityIcons name="food" size={24} color="black" />
            <DefaultText style={styles.text}> Food type</DefaultText>
          </View>
          <DefaultText style={{ ...styles.text, ...styles.info }}>{foodType}</DefaultText>
        </View>
        <View style={styles.impDetail}>
          <View style={styles.label}>
            <MaterialIcons name="attach-money" size={24} color="black" />
            <DefaultText style={styles.text}> Affordability</DefaultText>
          </View>
          <DefaultText style={{ ...styles.text, ...styles.info }}>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
      </View>
      <View style={styles.infoBody}>
        <DefaultText style={styles.title}>Ingredients</DefaultText>
        {selectedMeal.ingredients.map(ingredient =>
          <ListItem key={ingredient}>{ingredient}</ListItem>
        )}


      </View>
      <View style={styles.infoBody}>
        <DefaultText style={styles.title}>Recipe</DefaultText>
        {selectedMeal.steps.map(step =>
          <ListItem key={step}>{step}</ListItem>)}
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({

  imageContainer: {
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
  },

  image: {
    width: 'auto',
    height: 250,
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    padding: 15
  },
  impDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  text: {
    fontFamily: 'product-sans-bold',
    fontSize: 17,
    color: 'black'
  },
  info: {
    textAlign: 'right'
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontFamily: 'product-sans-bold',
    marginBottom: 10
  },
  infoBody: {
    padding: 15
  },
  item: {
    marginVertical: 5,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey'
  },
  itemCompleted: {
    marginVertical: 5,
    backgroundColor: 'lightgreen',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'green'
  },
  itemText: {
    fontSize: 16
  },
  tagContainer: {
    backgroundColor: 'red',
    width: 'auto',
    padding: 10,
    borderRadius: 999,
    marginHorizontal: 5
  },
  tagText: {
    color: 'white'
  }
});

export default MealDetailScreen;
