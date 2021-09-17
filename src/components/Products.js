import React, {useEffect, useState} from "react";
import {getCategories, getProductsListWithCategory} from "../API/NidalAPI";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ProductItem from "./ProductItem";
import {useSelector as useReduxSelector} from "react-redux";
import CustomModalProductCat from "./CustomModalProductCat";
import {FAB} from "react-native-paper";

const Products = (props) => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState(undefined)
    const [modalMenuVisible, setModalMenuVisible] = useState([false,false])
    const [currentCat, setCurrentCat] = useState("Catégories")
    const colors = useReduxSelector((state) => state.toggleColor.colors)
    const favoriteProducts = useReduxSelector((state) => state.favoriteReducer.favoriteProducts)

    useEffect(() => {
        if (categories === undefined) {
            getCategories().then(dataCat => {
                setCategories(dataCat.items)
            })
        }
    })
    const _displayDetailProduct = (item) => {
        props.navigation.navigate("ProductDetails", {item: item, title: item.name})
    }

    const _getProducts = (item) => {
        getProductsListWithCategory(item.products_url).then(data => {
            setProducts(data.items)
            setCurrentCat(item.title)
            setModalMenuVisible([false,modalMenuVisible[1]])
        })
    }

    const _displayProduct = () => {
        if (categories !== undefined) {
            return (
                <View style={styles.mainView}>
                    <CustomModalProductCat modalVisible={modalMenuVisible[0]} categories={categories}
                                           getProducts={_getProducts}/>
                    <TouchableOpacity
                        style={[styles.buttonLink, {backgroundColor: colors.red_light, borderColor: colors.black}]}
                        onPress={() => setModalMenuVisible([true,modalMenuVisible[1]])}>
                        <Text>{currentCat}</Text>
                    </TouchableOpacity>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={products}
                        renderItem={({item}) => (
                            <ProductItem
                                product={item}
                                displayDetailProduct={_displayDetailProduct}
                                colors={colors}
                                isFilmFavorite={(favoriteProducts.findIndex(itemList => itemList.name === item.name) !== -1)}/>
                        )
                        }
                    />
                </View>
            )
        }
    }

    return (
        <View style={[styles.mainView, {backgroundColor: colors.white}]}>
            {_displayProduct()}
            <FAB
                style={styles.fab}
                extend
                icon="plus"
                onPress={() => setModalMenuVisible([modalMenuVisible[0],true])}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    picker: {
        marginTop: 15,
        marginBottom: 15
    },
    buttonLink: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        paddingTop: 11,
        paddingBottom: 12,
        paddingStart: 15,
        paddingEnd: 15,
        marginStart: 16,
        marginEnd: 16
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})

export default Products
