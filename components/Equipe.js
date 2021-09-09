import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LottieView from "lottie-react-native";
import {openWebView} from "./Tools";
import {Colors} from "../values/Colors";

const Equipe = (props) => {

    const users = [{
        name: 'Thomas SAMY',
        fonction: 'Alternant développeur mobile',
        email: 'tsamy@snapp.fr',
        image: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg'
    }, {
        name: 'Maxime DUBOIS',
        fonction: 'Chef de projet',
        email: 'mdubois@snapp.fr',
        image: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png'
    }, {
        name: 'Nidal DJEMAM',
        fonction: 'Lead Dev Mobile',
        email: 'ndjemam@snapp.fr',
        image: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg'
    }]

    const [transition, setTransition] = useState(true)
    const [timePassed, setTimePassed] = useState(false)

    const showTransition = () => {
        if (transition) {
            return (
                <LottieView source={require('../assets/lottie/transition-up.json')} autoPlay={true} loop={false}
                            resizeMode={"cover"} onAnimationFinish={() => {
                    setTransition(false)
                }}/>
            )
        }

    }

    const showMenu = () => {
        setTimeout(() => {setTimePassed(true)},900)
        if (timePassed) {
            return (
                <View style={{flex:1}}>
                    <View style={styles.mainView}>
                        {users.map((user) => (
                            <TouchableOpacity style={styles.button}
                                              onPress={() => props.navigation.navigate("MemberDetails", {member: user})}>
                                <Text style={styles.buttonText}>{user.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonLink} onPress={() => {openWebView(props.navigation,"https://www.epsi.fr")}}>
                            <Text style={styles.buttonLinkText}>Site de l'EPSI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonLink} onPress={() => {openWebView(props.navigation,"https://www.snapp.fr")}}>
                            <Text style={styles.buttonLinkText}>Site de Snapp'</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            )
        }
    }

    return (
        <View style={{flex: 1}}>
            {showMenu()}
            {showTransition()}
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingTop: 100
    },
    button: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: Colors.transparent,
        borderWidth: 1,
        paddingTop: 11,
        paddingBottom: 12,
        paddingStart: 15,
        paddingEnd: 15,
        marginStart: 16,
        marginEnd: 16
    },
    buttonLink: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: Colors.blue,
        borderWidth: 1,
        paddingTop: 11,
        paddingBottom: 12,
        paddingStart: 15,
        paddingEnd: 15,
        marginStart: 16,
        marginEnd: 16
    },
    buttonText: {
        textAlign: "center"
    },
    buttonLinkText: {
        textAlign: "center",
        color: Colors.black,
        fontSize: 15
    }
})

export default Equipe
