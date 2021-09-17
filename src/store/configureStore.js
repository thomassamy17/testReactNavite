import React from "react";
import {combineReducers, createStore} from "redux";
import toggleColor from "../reducers/darkModeReducer";
import favoriteReducer from "../reducers/favoriteReducer";

const rootReducer = combineReducers({
    toggleColor: toggleColor,
    favoriteReducer: favoriteReducer
})

export default createStore(rootReducer);
