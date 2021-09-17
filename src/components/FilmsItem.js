import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {getImageFromApi} from "../API/MoviesAPI";

const FilmsItem = (props) => {
    const {film, displayDetailsForFilm} = props
    return (
        <TouchableOpacity style={styles.mainView} onPress={() => displayDetailsForFilm(film.id)}>
            <Image style={styles.image} source={{uri: getImageFromApi(film.poster_path)}}/>
            <View style={styles.secondView}>
                <View style={styles.thirdView}>
                    <Text style={styles.titleText}>{film.title}</Text>
                    <Text style={styles.voteText}>{film.vote_average}/10</Text>
                </View>
                <View style={styles.descView}>
                    <Text style={styles.descText} numberOfLines={6}>{film.overview}</Text>
                </View>
                <View style={styles.dateView}>
                    <Text style={styles.dateText}>{film.release_date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        height: 190
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    secondView: {
        flex: 1,
        margin: 5
    },
    thirdView: {
        flex: 3,
        flexDirection: "row"
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    voteText: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    descView: {
        flex: 7
    },
    descText: {
        fontStyle: 'italic',
        color: '#666666'
    },
    dateView: {
      flex: 1
    },
    dateText: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default FilmsItem
