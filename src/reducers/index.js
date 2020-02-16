  
import { combineReducers } from 'redux';
import products from 'components/Shop/components/Product/modules/reducerProducts';
import modal from 'components/Shop/components/Product/modules/reducerModal';

const rootReducer = combineReducers({
  products,
  modal
})

export default rootReducer;
