import { MODAL_OPEN, MODAL_CLOSE } from './types';

const reducerModal = (state = false, action) => {
  switch(action.type) {
    case MODAL_OPEN:
      return {
        open: true,
        modalType: action.payload.modalType,
        copies: {
          name: action.payload.name,
          price: action.payload.price,
          currency: action.payload.currency,
          description: action.payload.description,
          code: action.payload.code,
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
