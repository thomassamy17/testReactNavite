import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ClearColors, DarkColors} from "../values/ClearColors";
import React from "react";

const CustomModalDarkMode = (props) => {
    return (
        <Modal
            transparent={true}
            visible={props.modalVisible}
            animationIn="slideInLeft"
            animationOut="slideOutRight">
            <View
                style={styles.mainViewModel}>
                <View
                    style={styles.childViewModal}>
                    <Text style={{marginBottom: 20}}>Dark Mode / Clear mode ?</Text>
                    <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={styles.buttonModal} onPress={() => {
                            props.darkMode(DarkColors)
                        }}>
                            <Text>Dark Mode</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonModal} onPress={() => {
                            props.darkMode(ClearColors)
                        }}>
                            <Text>Clear Mode</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export const styles = StyleSheet.create({
    mainViewModel: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    childViewModal: {
        width: '90%',
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: ClearColors.transparent,
    },
    buttonModal: {
        flex: 0.5,
        alignItems: 'center',
        padding: 5,
        margin: 2,
        backgroundColor: ClearColors.red_light,
        borderRadius: 5
    }
})

export default CustomModalDarkMode
