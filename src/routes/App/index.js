import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from 'routes/Shop';

const App = () => (
  <Switch>
    <Route exact path="/" render={() =>
      <Shop/>
    }/>
  </Switch>
);

export default App;
