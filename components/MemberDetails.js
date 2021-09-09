import React, {useState} from "react";
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {openWebView} from "./Tools";
import {Colors} from "../values/Colors";

const MemberDetails = (props) => {

    const member = props.route.params.member
    const[infoView, isInfoView] = useState(true)

    const _showMenu = () => (
            <View style={{flexDirection: "row", height: 50}}>
                <TouchableOpacity style={[styles.buttonMenu, {backgroundColor: (infoView) ? Colors.transparent : Colors.blue}]} onPress={() => {isInfoView(true)}}>
                    <Text style={styles.textButtonMenu}>Informations</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonMenu, {backgroundColor: (!infoView) ? Colors.transparent : Colors.blue}]} onPress={() => {isInfoView(false)}}>
                    <Text style={styles.textButtonMenu}>Liens</Text>
                </TouchableOpacity>
            </View>
        )

    const _showInfo = () => {
        if (infoView){
            return (
                <View style={styles.content}>
                    <Image style={styles.image} source={{uri: member.image}}/>
                    <Text style={styles.text}>{member.fonction}</Text>
                    <Text style={styles.text}>{member.email}</Text>
                </View>
            )
        }
    }

    const _showLink = () => {
        if (!infoView){
            return (
                <View style={styles.links}>
                    <TouchableOpacity style={styles.button} onPress={() => {openWebView(props.navigation,"https://www.epsi.fr","EPSI")}}>
                        <Text style={styles.buttonText}>Site de l'EPSI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {openWebView(props.navigation,"https://www.snapp.fr","Snapp'")}}>
                        <Text style={styles.buttonText}>Site de Snapp'</Text>
                    </TouchableOpacity>
                </View>
            )
        }

    }

    return (
        <View style={styles.mainView}>
            {_showMenu()}
            <View style={styles.separator}/>
            {_showInfo()}
            {_showLink()}
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        width: Dimensions.get("window").width,
        height: 3,
    },
    buttonMenu : {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000"
    },
    textButtonMenu: {
        color: Colors.black,
        fontSize: 15,
        fontWeight: "bold"
    },
    mainView: {
        flex: 1,
    },
    childView: {
        flex: 1,
        paddingStart: 20,
        paddingEnd: 20
    },
    image: {
        alignSelf: "center",
        width: 300,
        height: 200,
        resizeMode: "contain",
        marginBottom: 20
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.black,
        fontSize: 20
    },
    content: {
       flex: 1,
        paddingTop: 20
    },
    links: {
        paddingTop: 20
    },
    button: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: Colors.blue,
        backgroundColor: Colors.black,
        paddingTop: 11,
        paddingBottom: 12,
        paddingStart: 15,
        paddingEnd: 15,
        marginStart: 16,
        marginEnd: 16
    },
    buttonText: {
        textAlign: "center",
        color: Colors.white,
        fontSize: 15
    }
})

export default MemberDetails
