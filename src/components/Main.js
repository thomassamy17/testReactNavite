import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useSelector as useReduxSelector} from "react-redux";
import CustomModal from "./CustomModal";

const Main = (props) => {

    const colors = useReduxSelector((state) => state.toggleColor.colors)
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[styles.mainView, {backgroundColor: colors.white}]}>
            <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            <TouchableOpacity style={[styles.button, {borderColor: 'green'}]} onPress={() => props.navigation.navigate("Search")}>
                <Text style={[styles.text,{color: colors.black}]}>Test OpenClassRooms</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderColor: 'red'}]} onPress={() => props.navigation.navigate("Lottie")}>
                <Text style={[styles.text,{color: colors.black}]}>Test Lottie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderColor: 'blue'}]} onPress={() => props.navigation.navigate("Map")}>
                <Text style={[styles.text,{color: colors.black}]}>Test Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderColor: 'orange'}]} onPress={() => props.navigation.navigate("Products")}>
                <Text style={[styles.text,{color: colors.black}]}>Produits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderColor: 'pink'}]} onPress={() => props.navigation.navigate("Equipe")}>
                <Text style={[styles.text,{color: colors.black}]}>Équipe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderColor: 'grey'}]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={[styles.text,{color: colors.black}]}>Custom alert test</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    button: {
        margin: 20,
        padding: 10,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 5,
    },
    text: {
        textAlign: "center",
        fontSize: 25
    }
})

export default Main
