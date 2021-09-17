import React from "react";
import {ClearColors} from "../values/ClearColors";

const initialState = {colors: ClearColors}

const toggleColor = (state = initialState, action) => {
    let nextState
    switch (action.type) {
        case 'TOGGLE_DARK':
            nextState = {...state, colors: action.value}
            return nextState
        default:
            return state
    }
}

export default toggleColor
