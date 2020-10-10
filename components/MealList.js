import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {

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
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetailScreen', {
                        mealId: itemData.item.id,
                        title: itemData.item.title
                    })
                }
                } />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }} />
        </View>
    );

}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default MealList;