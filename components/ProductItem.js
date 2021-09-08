import React from "react";
import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";

const ProductItem = (props) => {
    const{item, displayDetailProduct} = props
    return (
        <TouchableOpacity style={styles.mainView} onPress={() => displayDetailProduct(item)}>
            <Image style={styles.image} source={{uri: item.picture_url}}/>
            <View style={styles.childView}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
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
        resizeMode:"contain",
        margin: 5
    },
    name: {
        fontSize: 16
    },
    desc: {
        marginTop: 20,
        fontSize: 14
    }
})

export default ProductItem
