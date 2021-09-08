import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LottieView from "lottie-react-native";

const Equipe = (props) => {

    const users = [{
        name: 'Thomas SAMY',
        fonction: 'Alternant développeur mobile',
        email: 'tsamy@snapp.fr'
    }, {
        name: 'Maxime DUBOIS',
        fonction: 'Chef de projet',
        email: 'mdubois@snapp.fr'
    }, {
        name: 'Nidal DJEMAM',
        fonction: 'Lead Dev Mobile',
        email: 'ndjemam@snapp.fr'
    }]

    const [transition, setTransition] = useState(true)

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
        if (!transition) {
            return (
                <View style={styles.mainView}>
                    {users.map((user) => (
                        <TouchableOpacity style={styles.button}
                            onPress={() => props.navigation.navigate("MemberDetails", {member: user})}>
                        <Text style={styles.buttonText}>{user.name}</Text>
                        </TouchableOpacity>
                    ))}
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
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 100
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 25,
    },
    buttonText: {
        textAlign: "center"
    }
})

export default Equipe
