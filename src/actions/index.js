import { SHIRT, MUG, CAP } from 'constants/index';

export const actionShirt = (setAmount, price) => ({ 
  type: SHIRT,
  setAmount,
  price
});

export const actionMug = (setAmount, price) => ({ 
  type: MUG,
  setAmount,
  price
});

export const actionCap = (setAmount, price) => ({ 
  type: CAP,
  setAmount,
  price
});
