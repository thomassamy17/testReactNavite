import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DarkColors} from "../values/ClearColors";

const ProductItem = (props) => {
    const {product, displayDetailProduct} = props
    const colors = props.colors

    const imageFavorite = () => {
        if (props.isFilmFavorite) {
            return (
                <Image
                    style={styles.favorite}
                    source={require('../../assets/heart_dark_mode.png')}/>
            )
        }
    }
    return (
        <TouchableOpacity style={styles.mainView} onPress={() => displayDetailProduct(product)}>
            {imageFavorite()}
            <Image style={styles.image} source={{uri: product.picture_url}}/>
            <View style={styles.childView}>
                <Text style={[styles.name, {color: colors.black}]}>{product.name}</Text>
                <Text style={[styles.desc, {color: colors.black}]} numberOfLines={2}>{product.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row"
    },
    childView: {
        flex: 1,
        flexDirection: "column",
        paddingEnd: 10
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        margin: 5
    },
    name: {
        fontSize: 16
    },
    desc: {
        marginTop: 20,
        fontSize: 14
    },
    favorite: {
        margin: 16,
        right: 0,
        position: 'absolute',
        width: 15,
        height: 15
    }
})

export default ProductItem
