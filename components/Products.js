import React, {useEffect, useState} from "react";
import {getCategories, getProductsListWithCategory} from "../API/NidalAPI";
import {FlatList, StyleSheet, View} from "react-native";
import {Picker} from '@react-native-picker/picker'
import ProductItem from "./ProductItem";

const Products = (props) => {

    const[products,setProducts] = useState([])
    const[categories,setCategories] = useState(undefined)
    const[selectedProduct, setSelectedProduct] = useState();

    useEffect(() => {
        if (categories === undefined){
            getCategories().then(dataCat => {
                setCategories(dataCat.items)
            })
        }
    })

    const _displayDetailProduct = (item) => {
        props.navigation.navigate("ProductDetails", {item: item, title: item.name})
    }

    const _getProducts = (url) => {
        getProductsListWithCategory(url).then(data => {
            setProducts(data.items)
        })
    }

    const _displayProduct = () => {
        if (categories !== undefined){
            return (
                <View style={styles.mainView}>
                    <Picker
                        style={styles.picker}
                        selectedValue={selectedProduct}
                        onValueChange={(itemValue, itemIndex) => {
                            if (itemValue !== 'empty'){
                                _getProducts(itemValue)
                            }
                            setSelectedProduct(itemValue)
                        }
                        }>
                        <Picker.Item label='...' value='empty' />
                        {categories.map((item) => (
                            <Picker.Item label={item.title} value={item.products_url} />
                        ))}
                    </Picker>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={products}
                        renderItem={({item}) => (
                            <ProductItem item={item} displayDetailProduct={_displayDetailProduct}/>
                        )
                        }
                    />
                </View>
            )
        }
    }

    return (
        <View style={styles.mainView}>
            {_displayProduct()}
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
    }
})

export default Products
