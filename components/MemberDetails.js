import React from "react";
import {Button, Linking, StyleSheet, View} from "react-native";

const MemberDetails = (props) => {

    const member = props.route.params.member

    return (
        <View style={styles.mainView}>
            <Button title="Click me" onPress={() => {props.navigation.navigate("WebViewCustom",{url: "https://www.epsi.fr", title: "EPSI"})}} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    }
})

export default MemberDetails
