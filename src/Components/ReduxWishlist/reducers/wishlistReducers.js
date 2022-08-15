const initialState = {
    products : [],
}

export default function ProductReducer (state = initialState, action){
    console.log(state, action)
    switch (action.type){
        case "set-products" :
            return {...state, products: new Array(...state.products, action.payload)}
        case "delete-products" :
            return {...state, products:action.payload}
        default :
            return {...state}
    }
    
}