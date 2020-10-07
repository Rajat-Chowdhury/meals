import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {


  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile title={itemData.item.title} imgLink={itemData.item.imgLink} color={itemData.item.color} onSelect ={() => 
        {
          props.navigation.navigate('CategoryMealsScreen', {
              categoryId: itemData.item.id,
              title: itemData.item.title,
              color: itemData.item.color
          })
      }
      } />
    )
  }


  return (
   
      <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem} />
   
    
  );
};

// CategoriesScreen.navigationOptions = {
//   headerTitle : 'Meal Categories'
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  
});

export default CategoriesScreen;
