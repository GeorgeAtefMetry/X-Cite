import { legacy_createStore as createStore} from 'redux'
import ProductReducer from "../reducers/wishlistReducers"

const store = createStore(ProductReducer)

export default store