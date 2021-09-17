const initialState = {favoriteProducts: []}

const favoriteReducer = (state = initialState, action) => {
    let nextState
    switch (action.type) {
        case "TOGGLE_FAVORITE":
            const favoriteProduct = state.favoriteProducts.findIndex(item => item.name === action.value.name)
            if (favoriteProduct !== -1) {
                nextState = {
                    ...state,
                    favoriteProducts: state.favoriteProducts.filter((item, index) => index !== favoriteProduct)
                }
            } else {
                nextState = {
                    ...state,
                    favoriteProducts: [...state.favoriteProducts, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default favoriteReducer
