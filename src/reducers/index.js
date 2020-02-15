  
import { combineReducers } from 'redux';
import products from 'components/Shop/components/Product/modules/reducers';

const rootReducer = combineReducers({
  products
})

export default rootReducer;
