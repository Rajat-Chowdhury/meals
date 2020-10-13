import React, { useState } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';


const FilterSwitch = (props) => {
  return (<View style={styles.filterContainer}>
    <DefaultText style={styles.label}>{props.label}</DefaultText>
    <Switch
      trackColor={{ false: 'lightgrey', true: Colors.primary }}
      thumbColor='lightgrey'
      value={props.state}
      onValueChange={props.onChange} />
  </View>)
}

const FiltersScreen = props => {

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);



  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Available Filters</DefaultText>
      <FilterSwitch label="Gluten free" state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
      <FilterSwitch label="Lactose free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
      <FilterSwitch label="Vegan" state={isVegan} onChange={newValue => setIsVegan(newValue)} />
      <FilterSwitch label="Vegetarin" state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
    </View>
  );
};




const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  title: {
    fontFamily: 'product-sans-bold',
    fontSize: 25,
    margin: 20,

  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20
  },
  label:{
    fontSize: 17
  }
});

export default FiltersScreen;
