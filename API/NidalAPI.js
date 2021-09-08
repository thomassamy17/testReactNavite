import React from "react";

export const getCities = () => {
    const url = "https://djemam.com/epsi/cities.json"
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export const getCategories = () => {
    const url = "http://djemam.com/epsi/categories.json"
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export const getProductsListWithCategory = (urlCat) => {
    console.log(urlCat)
    return fetch(urlCat)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

