import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const MemberDetails = (props) => {

    const member = props.route.params.member

    return (
        <View style={styles.mainView}>
            <View style={styles.content}>
                <Image style={styles.image} source={{uri: member.image}}/>
                <Text style={styles.text}>{member.fonction}</Text>
                <Text style={styles.text}>{member.email}</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("WebViewCustom", {url: "https://www.epsi.fr", title: "EPSI"})}}>
                    <Text style={styles.buttonText}>Site de l'EPSI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("WebViewCustom", {url: "https://www.snapp.fr", title: "Snapp'"})}}>
                    <Text style={styles.buttonText}>Site de Snapp'</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingStart: 20,
        paddingEnd: 20,
    },
    image: {
        alignSelf: "center",
        width: 300,
        height: 300,
        resizeMode: "contain",
        marginBottom: 20
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        color: "red",
        fontSize: 20
    },
    content: {
       flex: 0.8
    },
    bottom: {
        backgroundColor: '#00000000',
        flex: 0.2,
    },
    button: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#b46e4b",
        paddingTop: 11,
        paddingBottom: 12,
        paddingStart: 15,
        paddingEnd: 15,
        marginStart: 16,
        marginEnd: 16
    },
    buttonText: {
        textAlign: "center",
        color: "#FDE8AC",
        fontSize: 15
    }
})

export default MemberDetails
