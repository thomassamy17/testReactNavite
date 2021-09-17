import {FlatList, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ClearColors} from "../values/ClearColors";
import React from "react";

const CustomModalProductCat = (props) => {
    return (
        <Modal
            transparent={true}
            visible={props.modalVisible}
            animationIn="slideInLeft"
            animationOut="slideOutRight">
            <View
                style={styles.mainViewModel}>
                <View
                    style={styles.childViewModal}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={props.categories}
                        renderItem={(item) => (
                            <TouchableOpacity style={{
                                marginBottom: 10,
                                backgroundColor: ClearColors.pink_light,
                                padding: 5,
                                alignItems: "center"
                            }} onPress={() => props.getProducts(item.item)}>
                                <Text>{item.item.title}</Text>
                            </TouchableOpacity>
                        )
                        }
                    />
                </View>
            </View>
        </Modal>
    )
}

export const styles = StyleSheet.create({
    mainViewModel: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    childViewModal: {
        width: '90%',
        backgroundColor: 'white',
        padding: 22,
        borderRadius: 10,
        borderColor: ClearColors.transparent,
    },
    buttonModal: {
        flex: 0.5,
        alignItems: 'center',
        padding: 5,
        margin: 2,
        backgroundColor: ClearColors.red_light,
        borderRadius: 5
    }
})

export default CustomModalProductCat
