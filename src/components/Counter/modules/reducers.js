import { ADD_ONE, REMOVE_ONE } from './actions.js';
import initialState from 'reducers/initialState';

const reducerCounter = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ONE:
      return {
        number: state.number + 1
      };
    case REMOVE_ONE:
      return {
        number: state.number - 1
      };
    default:
      return state;
    }
}

export default reducerCounter;
