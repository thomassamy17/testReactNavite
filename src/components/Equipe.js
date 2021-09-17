import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LottieView from "lottie-react-native";
import {openWebView} from "./Tools";
import {ClearColors} from "../values/ClearColors";
import {useSelector as useReduxSelector} from "react-redux";

const Equipe = (props) => {

    const colors = useReduxSelector((state) => state.toggleColor.colors)

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
                <LottieView source={require('../../assets/lottie/transition-up.json')} autoPlay={true} loop={false}
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
                            <TouchableOpacity style={[styles.button,{borderColor: colors.black}]}
                                              onPress={() => props.navigation.navigate("MemberDetails", {member: user})}>
                                <Text style={[styles.buttonText,{color: colors.black}]}>{user.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.buttonLink,{backgroundColor: colors.red_light,borderColor: colors.black}]} onPress={() => {openWebView(props.navigation,"https://api.instagram.com/oauth/authorize?client_id=379210597006417&redirect_uri=https://tsamy.com/auth&scope=user_profile,user_media&response_type=code")}}>
                            <Text style={[styles.buttonLinkText,{color: colors.black}]}>Site de Snapp'</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            )
        }
    }

    return (
        <View style={{flex: 1, backgroundColor: colors.white}}>
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
        backgroundColor: ClearColors.transparent,
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
        fontSize: 15
    }
})

export default Equipe

