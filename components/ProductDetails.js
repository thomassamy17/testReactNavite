import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";

const ProductDetails = (props) => {
    const item = props.route.params.item

    return (
        <ScrollView style={styles.mainView}>
            <Image style={styles.image} source={{uri : item.picture_url}}/>
            <Text style={styles.textDesc}>{item.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 10
    },
    image: {
        width: Dimensions.get("window").width,
        height: 300,
        resizeMode: "contain",
        marginBottom: 20
    },
    textDesc: {
        fontSize: 14
    }
})

export default ProductDetails
