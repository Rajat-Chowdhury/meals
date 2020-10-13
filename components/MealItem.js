import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DefaultText from './DefaultText';

const MealItem = (props) => {

    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    let type = 'green';
    if (!props.isVegan && !props.isVegetarian) {
        type = 'red';
    }

    return (
        <View style={styles.mealItem}>
            <TouchableCmp onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <LinearGradient
                                // Background Linear Gradient
                                colors={['transparent', 'rgba(0,0,0,0.8)']}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    height: 100,
                                }}
                            />
                            <View style={styles.header}>
                                <View style={{ ...styles.mealType, backgroundColor: type, borderWidth: 2, borderColor: 'white' }}></View>
                                <Text style={styles.title}  >{props.title}</Text>
                            </View>
                        </ImageBackground >
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText style={styles.text}>{props.duration} min</DefaultText>
                        <DefaultText style={styles.text}>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText style={styles.text}>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableCmp>
        </View>


    )
}


const styles = StyleSheet.create({
    mealItem: {
        height: 250,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5

    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: 200,

    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'stretch'
    },
    title: {
        fontFamily: 'product-sans-bold',
        fontSize: 22,
        color: 'white',
        paddingVertical: 5,
        paddingHorizontal: 12,
        // textAlign: 'right'

    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    mealType: {
        height: 15,
        width: 15,
        borderRadius: 99,
        margin: 10

    },
    text: {
        fontSize: 15,
        fontFamily: 'product-sans-bold'

    }

});

export default MealItem