import { MODAL_OPEN, MODAL_CLOSE } from './types';

const reducerModal = (state = false, action) => {
  switch(action.type) {
    case MODAL_OPEN:
      return {
        open: true,
        copies: {
          titleLeft: action.payload.titleLeft,
          price: action.payload.price,
          currency: action.payload.currency,
          description: action.payload.description,
          footer: action.payload.footer,
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
