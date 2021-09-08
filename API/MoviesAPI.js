import React from "react";

const API_TOKEN = "e43927ad3e965c7e5e96b5e7a65c4c47"

export const getFilmsFromApiWithSearchedText = (text, page) => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export const getFilmDetails =(idFilm) => {
    return fetch('https://api.themoviedb.org/3/movie/' + idFilm + '?api_key=' + API_TOKEN + '&language=fr')
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export const getImageFromApi = (url) => {
    return 'https://image.tmdb.org/t/p/w300'+url
}
