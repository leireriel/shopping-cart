import { createStore } from 'redux';
import allReducers from 'reducers';

const allowReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(allReducers, allowReduxDevTools);

export default store;
