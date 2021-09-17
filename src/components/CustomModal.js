import {Button, Modal, StyleSheet, Text, View} from "react-native";
import React from "react";

const CustomModal = (props) => {
    return (
        <Modal
            transparent={true}
            visible={props.modalVisible}
            animationIn="slideInLeft"
            animationOut="slideOutRight">
            <View
                style={styles.modalMainView}>
                <View
                    style={styles.modalChildView}>
                    <Text>Hi, This is dummy alert!</Text>
                    <Button
                        onPress={() => { props.setModalVisible(false) }}
                        title="Close"
                    />
                </View>
            </View>
        </Modal>
    )
}

export const styles = StyleSheet.create({
    modalMainView: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    modalChildView: {
        width: '90%',
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    }
})

export default CustomModal
