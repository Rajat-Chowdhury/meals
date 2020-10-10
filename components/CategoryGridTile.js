import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, ImageBackground, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const CategoryGridTile = (props) => {


    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={{ ...styles.gridItem, backgroundColor: props.color }} >
            <TouchableCmp
                style={{ flex: 1 }}
                onPress={props.onSelect}>
                <View>
                    <ImageBackground source={{ uri: props.imageUrl }}
                        style={styles.image}
                        resizeMode="cover" >
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
                        <Text style={styles.header}>{props.title}</Text>
                    </ImageBackground>



                </View>

            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 8,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5

    },

    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        

    },
    header: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'product-sans-bold',
        textAlign: 'right',
        margin: 15

    }

})



export default CategoryGridTile;