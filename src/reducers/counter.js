const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_ONE':
      return state + action.payload;
    case 'REMOVE_ONE':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
