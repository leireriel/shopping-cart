import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Shop from 'routes/Shop';

const App = memo(() => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" render={() =>
        <Shop/>
      }/>
    </Switch>
  </Provider>
));

export default App;
