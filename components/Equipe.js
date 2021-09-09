import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LottieView from "lottie-react-native";

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
