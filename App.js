import React from 'react';
import {connect, Provider} from "react-redux";
import Store from './src/store/configureStore'
import Navigation from "./src/Navigation";

const App = () => {
    return (
        <Provider store={Store}>
            <ConnectedRoot/>
        </Provider>
    );
};

const mapStateToProps = (state) => {
    return {
        colors: state.toggleColor.colors,
        favoriteProducts: state.favoriteReducer.favoriteProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => {
            dispatch(action)
        }
    }
}

const ConnectedRoot = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default App

