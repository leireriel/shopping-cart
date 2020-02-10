import { ADD_ONE, REMOVE_ONE } from 'constants/index';
import initialState from './initialState';

const shop = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ONE:
      return {
        tshirt: state.tshirt + 1
      };
    case REMOVE_ONE:
      return {
        tshirt: state.tshirt - 1
      };
    default:
      return state;
  }
};

export default shop;
