import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect, useDispatch, useSelector as useReduxSelector} from "react-redux";
import {ClearColors} from "../values/ClearColors";

const ProductDetails = (props) => {
    const product = props.route.params.item
    const colors = useReduxSelector((state) => state.toggleColor.colors)
    const favoriteProducts = useReduxSelector((state) => state.favoriteReducer.favoriteProducts)
    const dispatch = useDispatch()

    const addFavorite = () => {
        const action = {type: "TOGGLE_FAVORITE", value: product}
        dispatch(action)
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView style={[styles.mainView, {backgroundColor: colors.white}]}>
                <Image style={styles.image} source={{uri: product.picture_url}}/>
                <Text style={[styles.textDesc, {color: colors.black}]}>{product.description}</Text>
            </ScrollView>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={addFavorite}
                style={styles.fab}>
                <Image
                    source={(favoriteProducts.findIndex(item => item.name === product.name) === -1) ? require('../../assets/heart_empty.png') : require('../../assets/heart_fill.png')}
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: Dimensions.get("window").width - 20,
        height: 300,
        resizeMode: "contain",
        marginBottom: 20
    },
    textDesc: {
        fontSize: 14,
        marginBottom: 100
    },
    fab: {
        margin: 16,
        right: 0,
        bottom: 0,
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ClearColors.pink_light,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    }
})
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => {
            dispatch(action)
        }
    }
}
export default connect(mapDispatchToProps)(ProductDetails)
