import { ADD_ONE, REMOVE_ONE } from 'actions';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
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

export default reducer;
