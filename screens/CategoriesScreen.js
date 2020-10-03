import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = props => {


  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => {
        props.navigation.navigate('CategoryMealsScreen', {
          categoryId : itemData.item.id,
          title : itemData.item.title
        })
      }}>
        <View >
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>

    )
  }


  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle : 'Meal Categories'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 50,
   
  }
});

export default CategoriesScreen;
