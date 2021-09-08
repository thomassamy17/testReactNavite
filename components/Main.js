import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Main = (props) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity style={[styles.button, {borderColor: 'green'}]} onPress={() => props.navigation.navigate("Search")}>
                <Text style={styles.text}>Test OpenClassRooms</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderColor: 'red'}]} onPress={() => props.navigation.navigate("Lottie")}>
                <Text style={styles.text}>Test Lottie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderColor: 'blue'}]} onPress={() => props.navigation.navigate("Map")}>
                <Text style={styles.text}>Test Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderColor: 'orange'}]} onPress={() => props.navigation.navigate("Products")}>
                <Text style={styles.text}>Produits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderColor: 'pink'}]} onPress={() => props.navigation.navigate("Equipe")}>
                <Text style={styles.text}>Équipe</Text>
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
        backgroundColor: 'white',
        color: 'black',
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
