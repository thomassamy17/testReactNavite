import React, {useState} from "react";
import {View} from "react-native";
import WebView from "react-native-webview";
import LottieView from "lottie-react-native";

const WebViewCustom = (props) => {

    const[loader,showLoader] = useState(true)
    const url = props.route.params.url

    const _loader = () => {
        if (loader){
            return (
                <LottieView resizeMode={"contain"} source={require('../assets/lottie/cat_loader.json')} autoPlay loop/>
            )
        }
    }
    return (
        <View style={{flex:1}}>
            <WebView source={{uri: url}} onLoadEnd={() => showLoader(false)}/>
            {_loader()}
        </View>
    )
}

export default WebViewCustom

