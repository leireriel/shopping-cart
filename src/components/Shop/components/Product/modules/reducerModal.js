import { MODAL_OPEN, MODAL_CLOSE } from './types';

const reducerModal = (state = false, action) => {
  switch(action.type) {
    case MODAL_OPEN:
      return true
    case MODAL_CLOSE:
      return false
    default:
      return state;
  };
};

export default reducerModal;
