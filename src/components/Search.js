import React, {useState} from 'react'
import {ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import FilmsItem from "./FilmsItem";
import {getFilmsFromApiWithSearchedText} from "../API/MoviesAPI";

let page = 0
let totalPage = 0
let changedText = ""

const Search = props => {

    const [films, setFilms] = useState([])
    const [isLoading, setLoading] = useState(false)


    const _displayDetailForFilm = (idFilm) => {
        props.navigation.navigate("FilmDetails", {idFilm: idFilm})
    }

    const _loadFilms = () => {
        setLoading(true)
        getFilmsFromApiWithSearchedText(changedText, page + 1).then(data => {
            if ("results" in data){
                totalPage = data.total_pages
                page = data.page
                setFilms(films => [...films, ...data.results])
            }
            setLoading(false)
        })
    }

    const _submitSearch = () => {
        page = 0
        totalPage = 0
        setFilms([])
        _loadFilms()
    }

    const _showLoader = () => {
        if (isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    return (
        <View style={styles.mainview}>
            <TextInput
                style={styles.textinput}
                placeholder='Titre du film'
                onChangeText={text => changedText = text}
                onSubmitEditing={() => _submitSearch()}
            />
            <TouchableOpacity style={styles.button} onPress={() => {_submitSearch()}}><Text style={styles.textButton}>Rechercher</Text></TouchableOpacity>
            <FlatList
                data={films}
                keyExtractor={(item => item.id.toString())}
                renderItem={({item}) =>
                  <FilmsItem
                      film={item} displayDetailsForFilm={_displayDetailForFilm}/>}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (page < totalPage) {
                      _loadFilms()
                  }
                }}
            />
            {_showLoader()}
        </View>
    )
}

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        marginTop: 10,
        padding: 10
    },
    textinput: {
        marginBottom: 10,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignSelf: "center",
        borderRadius:15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingStart: 20,
        paddingEnd: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13}
    },
    textButton: {
        textAlign: "center",
        color: "red"
    }
})

export default Search
