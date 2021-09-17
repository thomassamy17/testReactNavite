import React from "react";
import LottieView from "lottie-react-native";
import {View} from "react-native";

const Lottie = () => {
    return (
        <View style={{flex: 1, backgroundColor:'#F7DD7C'}}>
            <LottieView source={require('../../assets/lottie/cat_loader.json')} autoPlay loop/>
        </View>
    )
}

export default Lottie
