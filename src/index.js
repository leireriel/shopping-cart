import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from 'reducers';
import { ALLOW_REDUX_DEV_TOOLS } from 'constants/index';
import App from 'routes/App';
import 'styles/index.scss';

const store = createStore(rootReducer, ALLOW_REDUX_DEV_TOOLS);

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
