import initialState from './initialState';
import { SHIRT, MUG, CAP, ADD_ONE, REMOVE_ONE } from 'constants/index';

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHIRT:
      if (action.setAmount === ADD_ONE) {
        return {
          ...state,
          shirt: {
            amount: state.shirt.amount + 1,
            priceTotal: action.price * (state.shirt.amount + 1)
          }
        }
      } else if (action.setAmount === REMOVE_ONE && state.shirt.amount > 0) {
        return {
          ...state,
          shirt: {
            amount: state.shirt.amount - 1,
            priceTotal: action.price * (state.shirt.amount - 1)
          }
        }
      }
      return state;
    case MUG:
      if (action.setAmount === ADD_ONE) {
        return {
          ...state,
          mug: {
            amount: state.mug.amount + 1,
            priceTotal: action.price * (state.mug.amount + 1)
          }
        }
      } else if (action.setAmount === REMOVE_ONE && state.mug.amount > 0) {
        return {
          ...state,
          mug: {
            amount: state.mug.amount - 1,
            priceTotal: action.price * (state.mug.amount - 1)
          }
        }
      }
      return state;
    case CAP:
      if (action.setAmount === ADD_ONE) {
        return {
          ...state,
          cap: {
            amount: state.cap.amount + 1,
            priceTotal: action.price * (state.cap.amount + 1)
          }
        }
      } else if (action.setAmount === REMOVE_ONE && state.cap.amount > 0) {
        return {
          ...state,
          cap: {
            amount: state.cap.amount - 1,
            priceTotal: action.price * (state.cap.amount - 1)
          }
        }
      }
      return state;
    default:
      return state;
  }
};

export default productsReducer;
