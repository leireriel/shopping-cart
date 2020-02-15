  
import { combineReducers } from 'redux';
import products from 'components/Shop/modules/reducers';

const rootReducer = combineReducers({
  products
})

export default rootReducer;