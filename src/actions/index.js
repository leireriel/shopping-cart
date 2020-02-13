import { SHIRT, MUG, CAP } from 'constants/index';

export const actionShirt = (actionToPerform, price) => ({ 
  type: SHIRT,
  actionToPerform,
  price
});

export const actionMug = (actionToPerform, price) => ({ 
  type: MUG,
  actionToPerform,
  price
});

export const actionCap = (actionToPerform, price) => ({ 
  type: CAP,
  actionToPerform,
  price
});

// TODO una sola function
