import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const CategoryGridTile = (props) => {

    const imgSrc = { uri: 'https://imgix.bustle.com/uploads/image/2020/5/21/f99aafdb-775e-4220-ace2-2c1a0d7b6a35-howls-moving-castle-breakfast-cropped.jpg?w=2000&h=1090&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=focalpoint&blend=000000&blendAlpha=45&blendMode=normal&fp-x=0.5293333333333333&fp-y=0.49866666666666665' };

    return (
        <TouchableOpacity style={{ ...styles.gridItem, backgroundColor: props.color }} onPress={props.onSelect}>
            {/* <Image source={require(props.imgLink)} /> */}
            <ImageBackground source={imgSrc}
                style={styles.image}
                resizeMode="cover">
                <View >
                    <Text style={styles.header}>{props.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 8,
        height: 120,
        borderRadius: 10,
        justifyContent: 'center',
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3

    },
    header: {
        fontFamily: 'product-sans-bold',
        fontSize: 20,
        color: 'white'


    },
    image: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical:10,
        justifyContent: 'flex-end',
        alignItems:'flex-end'
    }

})



export default CategoryGridTile;