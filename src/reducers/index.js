import { combineReducers } from 'redux';
import counter from './counter';
import isLogged from './isLogged';

const allReducers = combineReducers({
  counter,
  isLogged
})

export default allReducers;
