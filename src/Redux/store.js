import cartCounterReducer from './reducer';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(cartCounterReducer);
export default store;