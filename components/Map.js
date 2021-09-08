import React, {useEffect, useState} from "react";
import MapView, {Marker} from "react-native-maps";
import {Dimensions, StyleSheet, View} from "react-native";
import {getCities} from "../API/NidalAPI";

const Map = () => {

    const[cities, setCities] = useState([])

    useEffect(() => {
        getCities().then(data => {
            setCities(data.cites)
        })
    })

    return (
        <View style={styles.mainView}>
            <MapView style={styles.map} initialRegion={{latitude: 46.227638, longitude: 2.213749,latitudeDelta: 12,longitudeDelta: 12}}>
                { cities.map((item) => (
                    <Marker title={item.city} coordinate={{ latitude : item.lan, longitude : item.lng }}/>
                ))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})

export default Map
