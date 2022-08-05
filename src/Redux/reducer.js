const initial_value = {
    cartCounter: 0
};

export default function cartCounterReducer(state = initial_value, action)
{
    switch (action.type) {
        case 'CartCounter':
            return{
                    cartCounter: action.payload
                };
        default:
            return {
                ...state
            }; 
    }
}