import { MODAL_OPEN, MODAL_CLOSE } from './types';

const reducerModal = (state = false, action) => {
  switch(action.type) {
    case MODAL_OPEN:
      return {
        open: true,
        copies: {
          titleLeft: action.payload.titleLeft,
          titleRight: action.payload.titleRight,
          description: action.payload.description,
          more: action.payload.more,
          buttonText: action.payload.buttonText,
          imgSrc: action.payload.imgSrc,
          imgAlt: action.payload.imgAlt
        }
      };
    case MODAL_CLOSE:
      return {
        open: false
      };
    default:
      return state;
  };
};

export default reducerModal;
